"use client";

import { BusinessRegister } from "@/data/formdata";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const formHandler = async (data) => {
    console.log(data);
    
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      console.log(data);
      
      const response = await BusinessRegister(data);

      if (response?.success) {
        toast.success("Business registered successfully!");
        reset();
      } else {
        toast.error(response?.message || "Failed to register. Try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="sp32px">
      <main className="container grid grid-cols-12 gap-4   justify-between  ">
        <form
          onSubmit={handleSubmit(formHandler)}
          className=" col-span-full md:col-span-7 space-y-6  "
        >
          <h3 className="h4">Register Your Company</h3>
          <p className="h6 text-black-3 mt-2">
            Get connected with Interstate Removalists to expand your business.
          </p>

          {/* --- Company Info --- */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label>Company Name</label>
              <input
                type="text"
                className="formInput"
                {...register("business_name", {
                  required: "Please enter company name",
                })}
              />
              {errors.business_name && (
                <p className="text-red-500 text-sm">
                  {errors.business_name.message}
                </p>
              )}
            </div>

            <div className="flex-1">
              <label>ABN</label>
              <input
                type="text"
                className="formInput"
                {...register("abn", { required: "Please enter ABN" })}
              />
              {errors.ABN && (
                <p className="text-red-500 text-sm">{errors.ABN.message}</p>
              )}
            </div>
          </div>

          {/* --- Email & Phone --- */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label>Email</label>
              <input
                type="email"
                className="formInput"
                {...register("company_email", {
                  required: "Please enter company email",
                })}
              />
              {errors.company_email && (
                <p className="text-red-500 text-sm">
                  {errors.company_email.message}
                </p>
              )}
            </div>

            <div className="flex-1">
              <label>Phone No.</label>
              <input
                type="tel"
                className="formInput"
                {...register("mobile", {
                  required: "Please enter phone number",
                })}
              />
              {errors.mobile && (
                <p className="text-red-500 text-sm">
                  {errors.mobile.message}
                </p>
              )}
            </div>
          </div>

          {/* --- Address & Site --- */}
          <div className="flex flex-col gap-4">
            <div className="flex-1">
              <label>Address</label>
              <input
                type="text"
                className="formInput"
                {...register("company_address", {
                  required: "Please enter company address",
                })}
              />
              {errors.company_address && (
                <p className="text-red-500 text-sm">
                  {errors.company_address.message}
                </p>
              )}
            </div>

            <div className="flex-1">
              <label>Company Site</label>
              <input
                type="text"
                className="formInput"
                {...register("company_site")}
              />
            </div>
          </div>

          {/* --- Contact Info --- */}
          <div>
            <h3 className="h4">Contact Information</h3>
            <p className="h6 mt-2 text-black-3">
              This information will be used to log in to the platform
            </p>

            <div className="mt-4 space-y-4">
              <div>
                <label>Full Name</label>
                <input
                  type="text"
                  className="formInput"
                  {...register("user_name", { required: "Please enter name" })}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">
                    {errors.user_name.message}
                  </p>
                )}
              </div>

              <div>
                <label>Email</label>
                <input
                  type="email"
                  className="formInput"
                  {...register("user_email", { required: "Please enter email" })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">
                    {errors.user_email.message}
                  </p>
                )}
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label>Password</label>
                  <input
                    type="password"
                    className="formInput"
                    {...register("user_password", {
                      required: "Please enter password",
                    })}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <div className="flex-1">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    className="formInput"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* --- Submit --- */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 mt-4 rounded-lg text-white-1 transition ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-prim"
            }`}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>

        {/* image */}
        <div className=" md:h-[70%]  md:sticky md:top-20 col-span-full md:col-span-4 md:col-start-9 rounded-lg overflow-hidden  " >
          <Image width={250} height={250} className="rounded-lg overflow-hidden w-full h-full  object-cover  " src='https://plus.unsplash.com/premium_photo-1661772661721-b16346fe5b0f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVzc2luZXNzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600' alt="Registeration image" />
        </div>
      </main>
    </section>
  );
}
