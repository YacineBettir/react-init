import { useState } from "react";
import axiosClient from "../../../apis/axios";
import qs from "qs";

interface LoginProps {
    onLoginSuccess?: () => void;
}

const LoginForm: React.FC<LoginProps> = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await axiosClient.post(
                "/users/login",
                qs.stringify({ username, password }), // encode as form-urlencoded
            
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                },
            );
            console.log(res);

            if (onLoginSuccess) onLoginSuccess();
            console.log(res.data);
        } catch (err: any) {
            setError(err.response?.data?.message || "Login failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-md w-80 flex flex-col gap-y-4"
            >
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

                {error && <p className="text-red-500">{error}</p>}

                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="p-2 border rounded"
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-2 border rounded"
                    required
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-teal-500 text-white py-2 rounded hover:bg-teal-600 disabled:opacity-50"
                >
                    {loading ? "Logging in..." : "Login"}
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
