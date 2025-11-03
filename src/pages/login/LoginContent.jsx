"use client"
import element from "@/../public/images/home-one/footer-crown.png";
import loginImage from "@/../public/img/innerimg/localimg.png";
import Image from "next/image";
import Link from "next/link";
import { Userlogin } from "@/data/formdata";
import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";
import { Loader2Icon } from "lucide-react";

const LoginContent =  () => {

  const { register,reset,formState:{errors},handleSubmit }= useForm({
    defaultValues:{
      email:"",
      password:""
    }
  })
  const [loading,setloading] =useState(false)

  const formHandler = async (data)=>{
    console.log(data);
    
    setloading(true)

    try {
    const res = await Userlogin(data);
    if(res.success){

      toast.success("User loging Successfully")
      localStorage.setItem("token",res.access_token)

    }else{
      toast.error(res.message)
    }
      

      
    } catch (error) {
      
      toast.error(`${error.message}`)
    }finally{

        setloading(false)
    

    }
  }



  return (
    <div className="relative h-screen grid-cols-12 items-center justify-center gap-6 lg:grid xxl:overflow-hidden">
      <div className="col-start-1 col-end-7">
        <Image
          src={loginImage}
          width={948}
          height={1080}
          alt="Login Image"
          className="xxl:max-h-screen"
        />
      </div>
      <div className="col-start-7 col-end-12 max-lg:px-4 max-lg:py-8 xl:col-start-8 ">
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
            <button type="submit" className={cn(`h6 smb32px smt32px w-full bg-prim py-3 flex items-center justify-center gap-2 text-center text-white-1 hover:text-[var(--primary-hex)] hover:bg-white-1 border-[var(--primary-hex)] border   ${loading 
       ? "cursor-not-allowed opacity-60 hover:bg-prim hover:text-white-1" 
       : "hover:text-[var(--primary-hex)] hover:bg-white-1"
     } `,)}>
            {loading? (<><Loader2Icon className=" animate-spin w-5 h-5 " /> loging...</>):('login')}
            </button>

          </form>
        </div>
      </div>
      <Image
        src={element}
        width={222}
        height={214}
        alt="Element"
        className="absolute bottom-0 right-0 max-3xl:hidden"
      />
    </div>
  );
};

export default LoginContent;
