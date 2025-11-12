"use client";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { CircleUserRound, LogOut, UserIcon } from "lucide-react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { UserlogOut } from "@/app/store/reducers/userSlice";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie"

export default function Userprofile({name,email}) {

  const dispatch = useDispatch()
  const router = useRouter()

  const logoutHandler = async ()=>{
   try {
    await dispatch(UserlogOut())
     toast.success('User logout successfully!')
         Cookies.remove("authToken", { path: "/" });
     router.push('/')
    
   } catch (error) {
    toast.error("logout failed!")
    
   }
  }


    
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="py-3 spx24px text-[20px]  rounded-full border  l-text flex gap-1 items-center ">
         <UserIcon size={15} />  Hi,{name?.split(' ')[0]}
        </button>
      </PopoverTrigger>

      <PopoverContent
        side="bottom"       // Position below the trigger
        align="right"         // Align to the right edge of the trigger
        className="w-72 text-[14px] p-4"
      >
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center">
          <button className="py-1 px-[.7rem] w-fit text-[20px] font-semibold rounded-full border flex items-center justify-center">
             {name?.charAt(0).toUpperCase()}
          </button>
          <span className="font-semibold mt-1">{name}</span>
          <span className="text-sm">
        {email}
          </span>
        </div>

        <hr className="my-3" />

        {/* Menu Items */}
        <div className="flex justify-between items-center">
          <Link
            href="/order-history"
            className="text-primary hover:underline text-sm font-medium"
          >
            Order History
          </Link>

          <button onClick={logoutHandler} className="flex items-center gap-1 text-sm text-destructive hover:underline">
            <LogOut size={14} />
            Logout
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
