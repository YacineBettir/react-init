import { handleLogin } from "@/features/auth/services/api";
import { LoginForm } from "@/components/login-form";

const handleLoginSubmit: SubmitHandler<Inputs> = async (data) => {
  try {
    const user = await handleLogin(data);
    console.log("Logged in user:", user);
  } catch (err: any) {
    console.error("Login error:", err.message);
  }
};
export const LoginPage = () => {
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen bg-gray-100">
        <LoginForm onSubmit={handleLoginSubmit} />
      </div>
    </>
  );
};
