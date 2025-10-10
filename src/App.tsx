import { AuthProvider } from "@/features/auth/context/AuthContext";
import "./App.css";
import { LoginPage } from "@/pages/LoginPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
