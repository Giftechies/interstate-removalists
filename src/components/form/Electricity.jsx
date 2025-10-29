"use client"

import { Timer } from "lucide-react"
import { useEffect, useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import { setElectricity } from "@/app/store/reducers/formSlice"

export default function Electricity({getValues,setValue}){

    const data = [
        {lable:"Tommorrow",
         icon:<Timer/>
        },
        {lable:"I few day",
         icon:<Timer/>
        },
        {lable:"Next week",
         icon:<Timer/>
        },
        {lable:"Later",
         icon:<Timer/>
        },
    ]



    const dispatch = useDispatch()
    const [electricityBox,setElectricityBox]=useState('')


    useEffect(()=>{
        const currentValue =  getValues? getValues("electricity"):"";
        if(currentValue) setElectricityBox(currentValue)
    },[electricityBox])

    const handleElectricityData = (data)=>{
         console.log(data);
         setElectricityBox(data)
         setValue("electricity",data)
         dispatch(setElectricity(data))
    }
    return(
     <div>
              <p className=" h2 font-semibold text-center " >Connect electricity, gas or internet in your new home</p>
              <span className="text-black-3 h6 " >When would you like to be contacted to organise connection of your electricity, gas and/or internet at your new address?</span>
              <div className=" w-full  flex gap-6 mt-8 " >
                {data.map((item,id)=>{
                  const  IsActive = electricityBox === item.lable
                    return(
                        <div key={id} onClick={()=>handleElectricityData(item.lable)} className={` w-[12rem] rounded-md p-4 border hover:bg-gray-300  flex flex-col gap-2 items-center justify-center ${IsActive? " bg-[#f2d7bd] text-white-1 ":"text-black-4"} `} >
                            <span>{item.icon}</span>
                            <label> {item.lable} </label>
                           
                        </div>
                    )
                }
            )}

                
              </div>

     </div>
    )
}