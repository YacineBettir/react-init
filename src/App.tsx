import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <p>hello</p>
                <button
                    style={{
                        padding: "1em",
                        margin: "2px",
                        backgroundColor: "teal",
                        color: "white",
                    }}
                    onClick={() => setCount(count + 1)}
                >
                    Counter: {count}
                </button>
            </div>
        </>
    );
}

export default App;
