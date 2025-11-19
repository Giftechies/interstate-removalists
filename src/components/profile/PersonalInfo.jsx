"use client";
import { updateProfileSlice } from "../../app/store/reducers/userSlice";
import { useEffect, useState, useCallback } from "react";
import toast from "react-hot-toast";
import cookies from "js-cookie";
import { useDispatch } from "react-redux";

export default function PersonalInfo({ user }) {
  console.log(user);
  
  const dispatch = useDispatch();

  const [name, setName] = useState(user?.name ?? "");
  const [mobile, setMobile] = useState(user?.mobile ?? "");
  const [email, setEmail] = useState(user?.email ?? "");
  const [address, setAddress] = useState(user?.pick_address ?? "");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setName(user?.name ?? "");
    setMobile(user?.mobile ?? "");
    setEmail(user?.email ?? "");
    setAddress(user?.pick_address ?? "")
  }, [user]);

  const handleSubmit = useCallback(async () => {
    if (loading) return;

    if (!name.trim()) return toast.error("Name is required");
    if (!/^\d{10}$/.test(mobile)) return toast.error("Invalid mobile number");
    if (!email.includes("@")) return toast.error("Invalid email");

    const token = cookies.get("authToken");
    if (!token) return toast.error("Please login again");

    try {
      setLoading(true);
      const res = await dispatch(
        updateProfileSlice({ name, mobile, email, token })
      );
      if (res?.payload.success) toast.success("Profile updated");
    } catch {
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
  }, [name, mobile, email, loading]);

  return (
    <div className="bg-white shadow-sm p-8 rounded-xl w-[35rem]">
      {/* Section Header */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Personal Info</h2>
      <p className="text-gray-500 text-sm mb-6">
        Update your personal details. Make sure they are correct.
      </p>

      {/* FORM FIELDS */}
      <div className="flex flex-col gap-6">
        {/* Name */}
        <div className="flex flex-col gap-1 w-full">
          <label className="text-gray-600 font-medium">Name</label>
          <input
            type="text"
            className="formInput focus:ring-2 focus:ring-blue-500 transition-all"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={loading}
          />
        </div>

        {/* Mobile */}
        <div className="flex flex-col gap-1 w-full">
          <label className="text-gray-600 font-medium">Mobile</label>
          <input
            type="tel"
            className="formInput focus:ring-2 focus:ring-blue-500 transition-all"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            disabled={loading}
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1 w-full">
          <label className="text-gray-600 font-medium">Email</label>
          <input
            type="email"
            className="formInput focus:ring-2 focus:ring-blue-500 transition-all"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
        </div>

        {/* Address */}
        {/* <div className="flex flex-col gap-1 w-full">
          <label className="text-gray-600 font-medium">Address</label>
          <input
            type="text"
            className="formInput focus:ring-2 focus:ring-blue-500 transition-all"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            disabled={loading}
          />
        </div> */}
      </div>

      {/* BUTTON */}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className={`profileButton mt-8 w-full py-3 rounded-lg text-white font-semibold 
          bg-prim hover:opacity-95 transition-all ${
            loading ? "opacity-60 cursor-not-allowed" : ""
          }`}
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Updating...
          </span>
        ) : (
          "Update Information"
        )}
      </button>
    </div>
  );
}
