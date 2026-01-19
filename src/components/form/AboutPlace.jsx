"use client";

import { useEffect, useState } from "react";

export default function AboutPlace({ register, errors, setValue, getValues }) {
  const bedrooms = [
    { value: "1" },
    { value: "2" },
    { value: "3" },
    { value: "4" },
    { value: "5+" },
  ];
const [selected, setSelected] = useState("");
const [place,setplace] = useState('')


useEffect(() => {
    const current = getValues ? getValues("bedrooms") : "";
    if (current) setSelected(current);
    const currentplace = getValues? getValues("property"): ""
    if(currentplace) setplace(currentplace)
  }, [getValues]); 

  const handleBedroomClick = (value) => {
    setSelected(value);
    setValue("bedrooms", value);
  };


  return (
    <div className="place-form  ">
      <h4 className="formHeading ">Tell us a bit about your place</h4>
      <p className="textSm text-gray-400 mt-2">This helps us estimate your move size.</p>
      {place.trim().toLowerCase() =="storage"  ?
        <div className="   flex flex-col " >
          <label className=" mt-4 h3 font-medium " > How big the storage unit? </label>
        <div className="input_wrape relative w-[80%] ">
            <input  type="number" {...register("bedrooms",{required:true})} placeholder=" Floor area in square meter " onChange={(e)=>{handleBedroomClick(e.target.value)}}  className=" placeholder:m-text  bg-white-4 mt-2 w-full px-5 py-3 placeholder:text-black-3 border "  />

          <label className=" absolute right-5 top-1/2 ">m2</label>
        </div>
          {errors.bedrooms &&(<p className="text-red-500 text-sm mt-2">Please enter  distance.</p>)}
        </div>
      :
       <div>
       <p className="h6 mt-4 block  ">Number of bedrooms</p>
      <div className="flex  gap-4 mt-[.7rem]">
        {bedrooms.map((bedroom, index) => {
         

          return (
            <div
              key={index}
              onClick={() => handleBedroomClick(bedroom.value)}
              className={`w-[2.1rem] h-[2.1rem] border rounded-full flex items-center justify-center text-lg  cursor-pointer
                ${selected===bedroom.value ? "bg-gray-600 text-white-1" : "bg-gray-200 hover:bg-gray-100"}`}
            >
              {bedroom.value}
            </div>
          );
        })}
      </div>

      {/* Hidden input to connect with react-hook-form */}
      <input type="hidden" {...register("bedrooms", { required: true })} />

      {errors.bedrooms &&  (
        <p className="text-red-500 text-sm mt-2">Please select number of bedrooms.</p>
      )}
   </div> }

  
    </div>
  );
}
