"use client";
import React from "react";

const LoginInput = ({ type = "text", label, showPasswordToggle = false }) => {
  return (
    <div className="relative mt-5 mr-0 mb-0 ml-16 h-[77px] w-[392px]">
      <div className="rounded-xl border-2 border-solid bg-sky-950 border-stone-400 size-full" />
      <label className="absolute text-xl font-semibold left-[17px] text-white text-opacity-50 top-[11px]">
        {label}
      </label>
      <input
        type={type}
        className="absolute inset-0 w-full h-full bg-transparent border-none text-white px-4 pt-8 pb-2 focus:outline-none"
        aria-label={label}
      />
      {showPasswordToggle && (
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb866f7f61dab23d79b48f22a33db8c1a10d78d1?placeholderIfAbsent=true"
          className="absolute h-[30px] right-[17px] top-[19px] w-[30px]"
          alt="Visibility Icon"
        />
      )}
    </div>
  );
};

export default LoginInput;
