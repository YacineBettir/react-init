import { useState } from "react";

interface LoginProps {
  onLoginSuccess?: () => void;
  onSubmit: () => Promise<any>;
}

export const LoginForm: React.FC<LoginProps> = ({
  onLoginSuccess,
  children,
  onSubmit,
}) => {
  const [user, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  return (
    <div
      className="rounded-4xl h-[40vh] flex flex-col justify-center items-center 
                    w-full max-w-md shadow-lg border bg-[#1a1a1a] p-8 mx-auto"
    >
      <p className="text-3xl text-gray-200 mb-6">Login Form</p>
      <form
        className="flex flex-col gap-5 w-[90%]"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit({
            user,
            password,
          })
            .then((res) => {
              setLoading(false);
              console.log(res);
              onLoginSuccess?.(true);
            })
            .catch((e) => {
              console.log(e);
              // setError(e);
              // setLoading(true);
            });
        }}
      >
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={user}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 text-2xl text-gray-800 bg-gray-400 
                    border border-gray-400 rounded-md

                    "
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 text-2xl text-gray-800 bg-gray-400 
                    border border-gray-400 rounded-md

                    "
        />
        <button
          disabled={loading}
          type="submit"
          className="bg-blue-600 text-white py-2 rounderd-md hover:bg-blue-700 transition f"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};
