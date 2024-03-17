"use client";

import useDataLoad from '@/DataLoaders/useDataLoad';
import Image from 'next/image';
import React from 'react';
import "./skill.css"
const Skills = () => {


    const [seeData]  = useDataLoad()

    if(seeData !== null){
      return (
        <div className='xl:mx-[240px] lg:mx-[120px] md:mx-[100px] mx-[10px] my-[100px]'>
      <h2 className='font-bold text-[30px] my-10 text-center'>Skills</h2>


    <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2'>
 
{
    seeData?.user?.skills.map((skillsData, index) => {

      return(<div key={index} className='border-[1px] rounded-md p-2 gap-2 flex items-center h-full w-full'>  
   
    <div className='w-full'>
       <h2 className='my-2 text-center font-semibold border-[1px] bg-green-400 text-white w-max mx-auto px-2 py-1 rounded-full'>{skillsData?.name}</h2>
  </div>

 <div className='relative w-[100%] h-[15px] border-[1px] rounded-full'>
<div style={{ width: `${skillsData?.percentage}%`}}  className={`absolute top-0   h-full bg-orange-500 rounded-full`}>
 <div className='text-center flex justify-center w-full h-full items-center text-[10px] text-white font-bold'>
 {skillsData?.percentage}%
 </div>
</div>
</div>

<div className='py-2 w-full'>
<Image className="w-[70px] p-2 mx-auto h-[70px] bg-[#f3f6f5] rounded-full object-fill" src={skillsData?.image?.url} width={500} height={400} alt="image" />
</div>


        </div>)
    })
}

     

 </div>
        </div>
    );
       
    }
    else {

      return(<div className="flex justify-center items-center w-full min-h-screen">
  
  
  <span class="loading loading-ring loading-md"></span>
      </div>)
  }


  
};

export default Skills;