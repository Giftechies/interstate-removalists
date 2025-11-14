"use client";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { LogOut, UserIcon } from "lucide-react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { UserlogOut } from "@/app/store/reducers/userSlice";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useState } from "react";

export default function Userprofile({ name, email }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const logoutHandler = async () => {
    try {
      const token = Cookies.get("authToken");
      const res = await dispatch(UserlogOut(token));

      if (res.payload?.success) {
        toast.success("User logged out successfully!");
        Cookies.remove("authToken", { path: "/" });
        setOpen(false);
        router.push('/profile');
      } else {
        toast.error(res.payload || "Logout failed");
      }
    } catch (error) {
      toast.error("Logout failed!");
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Link
        href={'/profile'}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="py-3 spx24px text-[20px] rounded-full border l-text flex gap-1 items-center"
        >
          <UserIcon size={15} /> Hi, {name?.split(" ")[0]}
        </Link>
      </PopoverTrigger>

      <PopoverContent
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        side="bottom"
        align="right"
        className="w-72 text-[14px] p-4"
      >
        <div className="flex flex-col items-center justify-center text-center">
          <button className="py-1 px-[.7rem] w-fit text-[20px] font-semibold rounded-full border flex items-center justify-center">
            {name?.charAt(0).toUpperCase()}
          </button>
          <span className="font-semibold mt-1">{name}</span>
          <span className="text-sm">{email}</span>
        </div>

        <hr className="my-3" />

        <div className="flex justify-between items-center">
          <Link
            href="/profile"
            className="text-primary hover:underline text-sm font-medium"
          >
            Order History
          </Link>

          <button
            onClick={logoutHandler}
            className="flex items-center gap-1 text-sm text-destructive hover:underline"
          >
            <LogOut size={14} />
            Logout
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
