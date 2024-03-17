"use client";


import Link from 'next/link';
import React from 'react';

const NotFoundSection = () => {
    return (
        <div>
        <div className="flex justify-center items-center w-full min-h-screen">
           <div className='text-center'>
           <h2 className='font-bold my-2 text-[30px]'>Not Found</h2>
            <Link href="/"><button className='font-bold hover:bg-red-600 transition-all px-3 py-2 rounded-md bg-red-500 text-white'>Back Now</button></Link>
           </div>
        </div>
        </div>
    );
};

export default NotFoundSection;