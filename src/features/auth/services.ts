import axiosClient from "../../apis/axios";
import { LoginCredentials } from "./types";

export async function loginService(payload: LoginCredentials) {
    try {
        var res = await axiosClient.post("/auth/login/", payload, {
            skipAuthRefresh: true,
        });
        if (res.status == 200) return res;
        throw res;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
        console.log("service login ", err);
        let message =
            err?.response?.data?.detail ||
            err?.response?.data?.non_field_errors?.[0] ||
            "Login failed!!";
        let type;
        if (err?.response?.data?.code === "user_inactive") {
            message = "Votre compte a été désactivé par l’administrateur.";
            type = "USER_INACTIVE";
        }

        throw { message, status: err?.response?.status, type };
    }
}

export async function refreshTokenService() {
    try {
        const res = await axiosClient.post("/auth/refresh/");
        return res.data; //
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        throw {
            type: "TOKEN_REFRESH_FAILED",
            message: error?.response?.data?.message || "Token refresh failed",
        };
    }
}
