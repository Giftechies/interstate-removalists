"use client";
import { cn } from "@/utils/cn";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Address({ register, errors, moving,setValue,getValues }) {
  // const { address,movingAddress } = useSelector((state) => state.form);
  const Feildname = moving === "from" ? "pickupAddress" : "deliveryAddress";
  const Togglename = `${Feildname}_discreetly`
  const currentAddress = moving === "from" ? "address" : "movingAddress";
  const [istoggle, setIstoggle] = useState(getValues(Togglename) || false);

  useEffect(()=>{
    setValue(Togglename,istoggle)

  },[istoggle])

  return (
    <div className="address-form w-full">
      <h2 className="h2 ">Where are you moving {moving} ?</h2>
      <p className=" text-zinc-500">
        Please tell us the exact address you&apos;re moving {moving}
      </p>
      <div className="flex flex-col items-start gap-2">
        <input
          {...register(Feildname, { required: "Pickup address is required" })}
          defaultValue={currentAddress?.Feildname || ""}
          className="placeholder:m-text  mt-6 w-[70%] bg-white-4 px-5 py-3 placeholder:text-black-3"
          placeholder="Pickup address"
        />
        <input type="" />
        {errors[Feildname] && (
          <p className="text-red-500">{errors[Feildname].message}</p>
        )}
          { moving.trim().toLowerCase() === 'from' && 
        <div>
          <input type="hidden" {...register(Togglename)} />
          <input
            type="checkbox"
            name="toggle_check"
            id="toggle_check"
            value={istoggle}
            onChange={(e) => setIstoggle(e.target.checked)}
            className="hidden"
          />
        <label htmlFor="toggle_check">
            <span
              className={cn(
                `  theme-transition-3 relative mr-3 rounded-full bg-gray-400 px-6 py-[.08rem] `,
                istoggle ? "bg-prim" : "",
              )}
            >
              <span
                className={cn(
                  `theme-transition-3  absolute left-1 top-1/2 -translate-y-1/2 rounded-full bg-white-1 p-[.5rem] `,
                  istoggle && "translate-x-[1.3rem]",
                )}
              ></span>
            </span>
          </label>

          <span>
            I require this move to be handled discreetly.
            <span className="group relative cursor-pointer text-primary ">
              What does this mean?
              <p className=" absolute -right-[180%] text-[12px] top-1/2  mt-2 hidden w-[16rem] -translate-y-1/2 bg-gray-200 p-4 text-black-3 group-hover:block ">
                Please enable this option if your move involves a domestic
                violence situation and you need contact with you to be handled
                in a sensitive manner.
              </p>
            </span>
          </span>

          {istoggle &&  (
            <p className=" mt-2 text-red-500 text-[12px] ">
            Please only enable this option if your move involves a domestic
            violence situation and you need contact to be handled in a
            sensitive manner.
            </p>
          )}
        </div>
        }
      </div>
    </div>
  );
}
