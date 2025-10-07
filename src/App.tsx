import { useState } from "react";
import HelloWorld from "./componants/HelloWorld";
import "./App.css";
import LoginForm from "./features/auth/componants/LoginPannel";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            {/* <HelloWorld /> */}
            <LoginForm />
        </>
    );
}

export default App;
