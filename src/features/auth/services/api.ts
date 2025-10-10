import axiosClient from "@/apis/axios";

interface LoginCredentials {
  identifier: string; // email or username
  password: string;
}

export const handleLogin = async (credentials: LoginCredentials) => {
  try {
    const res = await axiosClient.post("/users/login", credentials);
    return res.data; 
  } catch (err: any) {
    if (err.response?.data?.message) {
      throw new Error(err.response.data.message);
    }
    throw new Error(err.message || "Login failed");
  }
};

