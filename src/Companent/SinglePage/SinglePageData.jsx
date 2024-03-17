"use client";

import useDataLoad from "@/DataLoaders/useDataLoad";
import Image from "next/image";


const SinglePageData = (idData) => {

    const {id} = idData;

    const [seeData]  = useDataLoad()


    if(seeData !== null){

       

       const seee =  seeData?.user?.services?.find(d => d?._id === id)

    return (
        <div className="mx-[240px] my-[50px] border-[1px] rounded-md p-2">
            <div>
            <Image src={seee?.image?.url} className="w-max h-max shadow-md block mx-auto rounded-md" alt="Image" width={200} height={200}></Image>
          <div>
          <h2 className="text-center font-bold my-2 text-[20px]">{seee?.name}</h2>
  <h2 className="text-center my-2 text-[20px]"><span className="font-bold">Price:</span> {seee?.charge}</h2>
          
            <p className="w-[50%] mx-auto text-center my-2">{seee?.desc}</p>
          </div>
            </div>
        </div>
    );

    }




};

export default SinglePageData;