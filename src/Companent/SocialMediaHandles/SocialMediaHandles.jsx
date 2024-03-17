"use client";


import useDataLoad from '@/DataLoaders/useDataLoad';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SocialMediaHandles = () => {


    const [seeData]  = useDataLoad();

    if(seeData !== null){
  return (
        <div className='xl:mx-[240px] lg:mx-[120px] md:mx-[100px] mx-[10px] my-[100px]'>
            <h2 className='text-center my-10 font-bold text-[30px]'>Social Media Handles</h2>
<div className='flex flex-wrap h-full gap-4 w-[100%] justify-center items-center'>
    
{
                seeData?.user?.social_handles.map((social, index) => {


                    return(<div key={index} className='border-[1px] hover:bg-slate-200 rounded-md p-2 w-[120px] transition-all'>

                     <div>
                     <h2 className='text-center font-bold py-2'>{social?.platform}</h2>
                         <Link href="#"><Image className='rounded-full border-[3px] border-[#ddd] object-center hover:border-[#ffffff] transition-colors w-[50px] my-1 h-max mx-auto' src={social?.image?.url} width={100} height={200} alt='image'/></Link>
                         

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

export default SocialMediaHandles;