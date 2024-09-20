import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./navbar";
function Quizpage() {
  const { state } = useLocation();
  return (<>

        <Navbar/>
    <div className="h-screen w-full flex justify-center items-center bg-lime-500 ">
        <div className="max-w-sm bg-white p-10 flex flex-col gap-4">
      <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
        {state.course}
      </h5>
      <p className=" text-xl font-bold  text-gray-700 dark:text-gray-400 text-center">
      {state.duration}
      </p>
      <button type="button"  className="w-[250px] focus:outline-none text-white bg-lime-600 hover:bg-green-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" >Start Quiz</button>

    </div>


    </div>
    </>
  );
}

export default Quizpage;
