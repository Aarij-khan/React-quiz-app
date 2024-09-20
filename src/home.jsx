import React, { useEffect, useState } from 'react';
import { arr } from './api';
import Navbar from './navbar';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate()
  const [data ,setData] = useState([])
  useEffect(() => {
    
   setData(arr)
  }, []);
  return (
    <div>
      <Navbar/>
      <div className='w-full  justify-center bg-green-500 flex flex-wrap py-20 gap-6'>
        {data.map((e,idx)=>{
          return(
        <div className='h-[200px] w-[270px] xl:w-[300px] bg-zinc-600  rounded-xl flex items-center gap-6 justify-center flex-col xl:mx-10' key={idx}>
          <h1 className='text-white text-3xl'>
          {e.course}

          </h1>
          <h1 className='text-white'>
          Duration:{e.duration}
          </h1>
         
            
            <button type="button" onClick={()=>navigate('/quizpage',{state : e})} class="w-[250px] focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" >Start Quiz</button>

        </div>

          )

        })}
      </div>
    </div>
  )
}

export default Home