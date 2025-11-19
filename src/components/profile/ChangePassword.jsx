"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { changePasswordApi } from "@/data/formdata";
import PasswordField from "@/components/shared/PasswordField";



export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const changePasswordHandler = async () => {
    if (!currentPassword) return toast.error("Current password required");
    if (!newPassword) return toast.error("New password required");
    if (newPassword !== confirmPassword)
      return toast.error("Passwords do not match");

    const token = Cookies.get("authToken");
    if (!token) return toast.error("Please login again");

    setLoading(true);

    try {
      const response = await changePasswordApi(
        currentPassword,
        newPassword,
        token
      );

      const res = await response.json();
      if (res.success) toast.success("Password updated");
      else toast.error(res.message || "Failed to update password");
    } catch (err) {
      toast.error(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" p-8">
      <h2 className="text-xl font-semibold">Change Password</h2>

      <div className="mt-6 flex flex-col gap-6">

        <PasswordField
          label="Current Password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          disabled={loading}
        />

        <PasswordField
          label="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          disabled={loading}
        />

        <PasswordField
          label="Re-enter Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          disabled={loading}
        />

      </div>

      <button
        disabled={loading}
        onClick={changePasswordHandler}
        className={`profileButton mt-6 ${
          loading ? "opacity-60 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Changing..." : "Change Password"}
      </button>
    </div>
  );
}
