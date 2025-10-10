import { createContext, useState, type ReactNode } from "react";

interface AuthType {
    id?: string;
    username?: string;
    email?: string;
    isAuthenticated: boolean;
    isLoading: boolean;
}

const authInitialState: AuthType = {
    id: "",
    username: "",
    email: "",
    isAuthenticated: false,
    isLoading: false,
};
export const AuthContext = createContext<AuthContextType | null>(null);

// NOTE:KEMEL MNA
export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [authState, setAuthState] = useState<AuthType>(authInitialState);
    const switchCase = (values, type) => {
        switch (type) {
            case "Authenticate":
                setAuthState((prev) => ({
                    ...prev,
                    username: values.username,
                    id: values.id,
                    email: values.email,
                    isAuthenticated: true,
                    isLoading: false
                }));
                break;
            default:
                break;

        };
    };
    return (
        <AuthContext.Provider value= {{ authState, switchCase }}>
    { children }
    </AuthContext.Provider>
    )
};

