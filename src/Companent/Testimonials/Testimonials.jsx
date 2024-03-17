"use client";

import useDataLoad from '@/DataLoaders/useDataLoad';
import Image from 'next/image';
import React from 'react';
import Marquee from "react-fast-marquee"
const Testimonials = () => {



    const [seeData]  = useDataLoad();

    if(seeData !== null){



    return (
        <div>
            <h2 className='text-[30px] pt-10 font-bold text-center'>Testimonials</h2>


          
       <div className='w-[60%] mx-auto'>

    <Marquee>
          <div className='flex gap-2 my-10 w-full'>
          {
                seeData?.user?.testimonials.map((testi, index) => {

                  return(<div key={index} className='w-[400px] h-[350px] mx-2 rounded-md border-[1px] p-4'>

                     <div className='text-center'>
                        <Image className='rounded-full mx-auto' src={testi?.image?.url} width={100} height={200} alt='image'/>
                         <h2 className='font-bold mt-2 text-[18px]'>{testi?.name}</h2>
                         <p className='font-medium text-slate-400 text-[14px]'>{testi?.position}</p>
                         <div>
                            <p>{testi?.review}</p>
                         </div>
                     </div>
                      

                  </div>)


                })
            }
          </div>
          </Marquee>
 
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

export default Testimonials;