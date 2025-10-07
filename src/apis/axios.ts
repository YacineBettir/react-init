import axios from "axios";
import "axios";

declare module "axios" {
    export interface AxiosRequestConfig {
        skipAuthRefresh: boolean;
    }
}

let isRefreshing = false;

const baseUrl: string = import.meta.env.VITE_API_URL
const axiosClient = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
})

axiosClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (originalRequest?.skipAuthRefres) {
            return Promise.reject(error);
        }
        if (error.response?.status === 401 && !originalRequest._retry) {
            if (isRefreshing) {
                return Promise.reject(error);
            }
            originalRequest._retry = true;
            isRefreshing = true;
            try {
                await refreshTokenService();
                isRefreshing = false;
                return axiosClient(originalRequest);
            } catch (refreshError) {
                isRefreshing = false;
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    },
);

export default axiosClient;

