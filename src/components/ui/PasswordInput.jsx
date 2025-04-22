"use client";

import React, { useState } from "react";

export const PasswordInput = ({ className = "" }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className={`flex gap-5 justify-between items-start px-6 pt-2 pb-7 font-semibold text-white whitespace-nowrap rounded-xl border-2 border-solid bg-sky-950 border-stone-400 w-[392px] ${className}`}
    >
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        className="w-full bg-transparent outline-none placeholder-white"
        aria-label="Password"
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8770196c9295c201e431e8d6533f6196fecfe85f?placeholderIfAbsent=true"
          alt={showPassword ? "Hide password" : "Show password"}
          className="object-contain shrink-0 mt-3 aspect-square w-[30px]"
        />
      </button>
    </div>
  );
};
