"use client";

import { useState } from "react";

export default function UserData({ register, errors }) {



const additionalNote = [
  { label: "I'd like to discuss the option" },
  { label: "I am ready to book this week" },
  { label: "I am browsing" },
  { label: "I'd like to discuss the option" },
  { label: "I am browsing" },
  { label: "I am ready to book this week" },
];
 const [OpenNote,setOpenNote] = useState(true)

  return (
    <div className="w-full">
      <h2 className=" h2 font-semibold mt-4 ">Discover your 5+ instant prices</h2>
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
            />
            {errors.ph_no && (
              <p className="mt-1  text-xs text-red-500">
                {errors.ph_no.message}
              </p>
            )}
          </div>
        
        </div>
          <div className="flex-1" >
         <div>
              { OpenNote ? (<p onClick={()=>setOpenNote(false)} className="  cursor-pointer text-[var(--primary-hex)] font-medium underline mt-2 "  >Add additional note for your move+ </p>) :
            (    <textarea
              {...register("adidition_message", {
                required: "Please enter your message.",
              })}
              className="w-full rounded-md border px-3 py-2"
              rows={4}
              placeholder="Enter your message here"
            />)
              }
          
         </div>
         <div className=" flex  gap-2 pt-2 flex-wrap " >
            {additionalNote.map((item,idx)=>(
                <span className={`px-4 py-2  flex-auto bg-gray-200 rounded-full s-text text-center  `} onClick={()=>notehandler(item.label)} >

                    {item.label}
                </span>
            ))}

         </div>
          </div>

        {/* error masseaage */}
      </div>
    </div>
  );
}
