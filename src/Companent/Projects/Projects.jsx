"use client";
import useDataLoad from '@/DataLoaders/useDataLoad';
import Image from 'next/image';
import React from 'react';

const Projects = () => {


    const [seeData]  = useDataLoad()

    if(seeData !== null){
    
        return (
            <div className='xl:mx-[240px] lg:mx-[120px] md:mx-[100px] mx-[10px] my-[150px]'>
          <h2 className='font-bold text-[30px] py-2 text-center my-10'>Projects</h2>
        <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
     
    {
        seeData?.user?.projects.map((projectData, index) => {
    
  
            return(<div key={index} className='border-[1px] rounded-md p-2'>  
            <h2 className='my-2 text-center font-semibold border-[1px] bg-green-400 text-white w-max mx-auto px-2 py-1 rounded-md'>{projectData?.title}</h2>
              <Image className="w-full h-max rounded-md object-fill" src={projectData?.image?.url} width={500} height={400} alt="image"></Image>
          
          <div className='flex flex-wrap gap-2 py-2'>
          {
                projectData?.techStack?.map((stack, index) => {
    
                    return(<div key={index} className='border-[1px] px-2 py-1 rounded-full bg-orange-500 text-white'>
                        <h2 className='font-bold'>{stack}</h2>
             
    
                    </div>)
                })
            }
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

export default Projects;