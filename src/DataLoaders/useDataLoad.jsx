"use client";


import { useEffect, useState } from "react";


const useDataLoad = () => {

    const [seeData, setData] = useState(null)


    useEffect( () => {


        const see = async () => {

     const res = await fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae")

     setData(await res.json())

        }
   
        
   see()


    }, [])


return [seeData]



};

export default useDataLoad;