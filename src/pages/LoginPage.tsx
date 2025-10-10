import { handleLogin } from "@/features/auth/services/api";
import { LoginForm } from "@/components/login-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null); // state for error

  const handleLoginSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const user = await handleLogin(data);

      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    }
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen bg-gray-100">
        <LoginForm onSubmit={handleLoginSubmit} apiError={error} />
      </div>
    </>
  );
};
