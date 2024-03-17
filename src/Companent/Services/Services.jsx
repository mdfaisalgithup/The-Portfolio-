"use client";

import useDataLoad from "@/DataLoaders/useDataLoad";
import Image from "next/image";
import Link from "next/link";


const Services = () => {
  
    const [seeData]  = useDataLoad()

if(seeData !== null){

     return (
        <div className="xl:mx-[240px] lg:mx-[120px] md:mx-[100px] mx-[10px] my-[50px]">
            <h2 className="font-bold text-[30px] text-center my-10">Service</h2>

        <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2">
        {
            seeData?.user?.services?.map((serviceData, index) => {


                return(<div key={index} className="border-[1px] p-2 rounded-md"> 

             <Image className="w-full h-[300px] rounded-md object-fill" src={serviceData?.image?.url} width={500} height={400} alt="image"></Image>
              <div className="py-2">
              <h2 className="font-semibold">{serviceData?.name}</h2>
                <h2><span className="font-bold">Price</span> {serviceData?.charge}</h2>
              </div>

              <div>
        
                <p>{serviceData?.desc}...        <Link href={`id/${serviceData?._id}`}><button className="font-bold text-orange-500 hover:text-orange-600">Read More</button></Link></p>
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

export default Services;