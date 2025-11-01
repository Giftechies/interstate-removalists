"use client";

import { use, useCallback, useEffect, useState } from "react";

export default function UserData({ register, errors,setValue,getValues }) {



const additionalNote = [
  { label: "I'd like to discuss the option" },
  { label: "I am ready to book this week" },
  { label: "I am browsing" },
 
];

 const [OpenNote,setOpenNote] = useState(true)
 const [currentNote,setCurrentNote] =useState('')


const notehandler = useCallback((data)=>{
  if(!data) return
setCurrentNote(data)
setValue("additional_note",data)
},[setValue,setCurrentNote])

 useEffect(()=>{
 const data = getValues('additional_note')
 if(data) setCurrentNote(data)
 },[])

  return (
    <div className="w-full py-6 ">
      <h2 className=" h2 font-medium  ">Discover your 5+ instant prices</h2>
      <span className=" h6 text-black-3 ">
        We do not share your personal information with removalists until you
        book.
      </span>
      <div className="w-full mt-4 ">
        <div>
          <label>Name</label>
          <input
            type="text"
            {...register("name", { required: "Please enter your full name." })}
            className=" formInput "
            placeholder="John"
          />
        </div>
        <div className="mt-4 flex gap-4 ">
          <div className="flex-1">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", { required: "Please enter your email." })}
              className="formInput"
              placeholder="john@gmail.com"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="flex-1">
            <label htmlFor="ph_no" className="block text-sm font-medium">
              Phone
            </label>
            <input
              id="ph_no"
              type="tel"
              {...register("ph_no", {
                required: "Please enter your phone number.",
              })}
              className="formInput"
              placeholder=" 625487951"
            />
            {errors.ph_no && (
              <p className="mt-1  text-xs text-red-500">
                {errors.ph_no.message}
              </p>
            )}
          </div>
        
        </div>
          <div className="flex-1 mt-2 " >
            {/* additional message */}
         <div>
              { OpenNote ? (<p onClick={()=>setOpenNote(false)} className="  cursor-pointer text-[var(--primary-hex)] font-medium underline "  >Add additional note for your move+ </p>) :
            (    <textarea
              {...register("adidition_message", {
                required: "Please enter your message.",
              })}
              className="formInput mt-4"
              rows={4}
              placeholder="Enter your message here"
            />)
              }
          
         </div>
         {/* additional note */}
         <div className=" flex  gap-2 pt-2 flex-wrap " >
            {additionalNote.map((item,idx)=>{
              const IsActive = currentNote ==item.label
              return (
                   <span key={idx} className={`px-4 py-2  cursor-pointer w-fit   rounded-full s-text text-center ${IsActive?"bg-gray-400 text-white-1 ":"bg-gray-200"}  `} onClick={()=>notehandler(item.label)} >

                    {item.label}
                </span>
              )
            })}

         </div>
          </div>

        {/* error masseaage */}
      </div>
    </div>
  );
}
