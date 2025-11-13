"use client"

import loginImage from "@/../public/img/innerimg/localimg.png";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Loader2Icon } from "lucide-react";
import { useDispatch } from "react-redux";
import {Userlogin} from "@/app/store/reducers/userSlice"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation";

const LoginContent =  () => {
  const router = useRouter()

  const dispatch = useDispatch();

  const { register,reset,formState:{errors},handleSubmit }= useForm({
    defaultValues:{
      email:"",
      password:""
    }
  })
  const [loading,setloading] =useState(false)
const formHandler = async (data) => {
  setloading(true);

  try {
    const result = await dispatch(Userlogin(data));
    const payload = result.payload;

    if (payload?.success) {
      toast.success("User logged in successfully!");
      reset()

       const token = payload.data?.token;
    
      if (token) {
        Cookies.set("authToken", token, {
          expires: 1, // days
          secure: true, // requires HTTPS
          sameSite: "Strict", // prevents CSRF from other domains
          path: "/", // accessible site-wide
        });
      }

      // router.push("/dashboard"); // optional redirect
    } else {
      toast.error(payload?.message || "Login failed");
    }

  } catch (error) {
    toast.error(error.message || "Something went wrong");
  } finally {
    setloading(false);
  }
};





  return (
    <div className="relative container max-md:mt-12 md:pt-20  py-4 md:py-8 grid-cols-12 items-center  lg:grid xxl:overflow-hidden">
     
      <div className="col-span-5 ">
        <div className="items-center justify-center">
          <div>
            <h5 className="h5 mt-6 text-center font-medium">
              Login to Your Account
            </h5>
          </div>
          <form onSubmit={handleSubmit(formHandler)} className="smt40px flex flex-col ">
            <input
              type="text"
              placeholder="john@gamil.com"
              className="formInput"
              {...register('email',{required:"Please enter your email"})}
            />
            {errors.email && <p className="text-red-500 h6" >{errors.email.message}</p> }
            <input
              type="password"
              placeholder="Password"
              className="formInput mt-8"
                {...register('password',{required:"Please enter your password"})}
            />
            {errors.password && <p className="text-red-500 h6" >{errors.password.message}</p> }
            <div className="s-text mt-3 flex items-center justify-end hover:text-[var(--primary-hex)] gap-6 text-black-3">
              <Link href={`/#`}>Forgot Password?</Link>
            </div>
            <button type="submit" className={cn(`h6 rounded-lg smb32px smt32px w-full bg-prim py-3 flex items-center justify-center gap-2 text-center text-white-1 hover:text-[var(--primary-hex)] hover:bg-white-1 border-[var(--primary-hex)] border   ${loading 
       ? "cursor-not-allowed opacity-60 hover:bg-prim hover:text-white-1" 
       : "hover:text-[var(--primary-hex)] hover:bg-white-1"
     } `,)}>
            {loading? (<><Loader2Icon className=" animate-spin w-5 h-5 " /> loging...</>):('login')}
            </button>

          </form>
        </div>
      </div>
       <div className=" md:h-[30rem] lg:col-start-7  col-span-6 rounded-lg overflow-hidden ">
        <Image
          src={loginImage}
          width={948}
          height={1080}
          alt="Login Image"
          className="w-full h-full  object-cover "
        />
      </div>
     
    </div>
  );
};

export default LoginContent;

