'use client';

import { updateProfile } from "@/data/formdata";
import { useEffect, useState, useCallback } from "react";
import toast from "react-hot-toast"; // If you're using Sonner; remove if not
import cookies from 'js-cookie'

export default function PersonalInfo({ user }) {

  const [name, setName] = useState(user?.name ?? "");
  const [mobile, setMobile] = useState(user?.mobile ?? "");
  const [email, setEmail] = useState(user?.email ?? "");

  const [loading, setLoading] = useState(false);

  // Sync props → form state when user data changes
  useEffect(() => {
    setName(user?.name ?? "");
    setMobile(user?.mobile ?? "");
    setEmail(user?.email ?? "");
  }, [user]);


  const handleSubmit = useCallback(async () => {
    if (loading) return;

    // 🔐 Basic validation (prevents backend noise)
    if (!name.trim()) return toast.error("Name is required");
    if (!/^\d{10}$/.test(mobile)) return toast.error("Invalid mobile number");
    if (!email.includes("@")) return toast.error("Invalid email");
    const token = cookies.get ('authToken')
    if(!token) return toast.error("Token missing. Please login again")

    try {
      setLoading(true);

      const res = await updateProfile(name, mobile, email,token);

      if (res?.success) {
        toast.success("Profile updated");
      } 

    } catch (err) {
      console.error(err);
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
  }, [name, mobile, email, loading]);


  return (
    <div>

      <div className="mt-8 flex flex-col gap-4">

        <div className="w-[30rem]">
          <label>Name</label>
          <input
            type="text"
            className="formInput"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={loading}
          />
        </div>

        <div className="w-[30rem]">
          <label>Mobile</label>
          <input
            type="tel"
            className="formInput"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            disabled={loading}
          />
        </div>

        <div className="w-[30rem]">
          <label>Email</label>
          <input
            type="email"
            className="formInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
        </div>

      </div>

      <button
        className={`profileButton mt-4 ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <div className="loader border-white border-t-transparent"></div>
            Updating...
          </span>
        ) : (
          "Update Information"
        )}
      </button>

    </div>
  );
}
