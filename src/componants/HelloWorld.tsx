import { useState } from "react";

const HelloWorld = () => {
    const [count, setCount] = useState(0);
    return (
        <div className=" bg-white flex flex-col items-center justify-center h-screen bg-teal-500 rounded-[30px]">
             <h2 className="text-gray-800 font-semi-bold text-4xl mb-4">{count}</h2>
            <button
                className=" block rounded-[4px] bg-teal-700 m-[30px] px-[20px] py-[10px]"
            onClick={() => { setCount(count + 1) }}
            >
            Click
        </button >
        </div>
    );
};

export default HelloWorld;
