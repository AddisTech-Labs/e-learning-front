import React from "react";

export const FormInput = ({ label, type = "text", className = "" }) => {
  return (
    <div
      className={`px-4 pt-3 pb-11 font-semibold text-white rounded-xl border-2 border-solid bg-sky-950 border-stone-400 w-[392px] ${className}`}
    >
      <input
        type={type}
        placeholder={label}
        className="w-full bg-transparent outline-none placeholder-white"
        aria-label={label}
      />
    </div>
  );
};
