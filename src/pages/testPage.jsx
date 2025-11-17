import { useState } from "react";

export default function TestPage() {
    const[count,setCount]= useState(0);
    function increment() {
      setCount(count + 1);
    }

    function decrement() {
      setCount(count - 1);
    }

  return (
    <div className="w-full h-screen bg-amber-300 flex justify-center items-center">
      <div className="w-[400px] h-[400px] bg-white flex flex-col justify-center items-center">

        <h1 className="text-4xl font-bold">{count}</h1>
        <div className="w-full h-[100px] flex justify-center items-center border">
              <button onClick={decrement} className="w-[100px] bg-blue-500 h-[45px] text-3xl flex justify-center items-center text-white rounded-full">
                -

              </button>

              <button onClick={increment} className="w-[100px] bg-blue-500 h-[45px] text-3xl flex justify-center items-center text-white rounded-full">
                +

              </button>




  
        </div>
      </div>

      

    </div>
  );
}