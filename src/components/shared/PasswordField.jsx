"use client";

import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function PasswordField({
  label,
  value,
  onChange,
  disabled = false,
  placeholder = "",
}) {
  const [show, setShow] = useState(false);

  return (
    <div className="w-[30rem] relative">
      <label className="mb-1 block">{label}</label>

      <input
        type={show ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className="formInput pr-10" // extra padding for eye icon
      />

      <button
        type="button"
        onClick={() => setShow((p) => !p)}
        className="absolute right-3 top-[38px] text-gray-500"
        tabIndex={-1}
      >
        {show ? (
          <EyeSlashIcon className="w-5 h-5" />
        ) : (
          <EyeIcon className="w-5 h-5" />
        )}
      </button>
    </div>
  );
}
