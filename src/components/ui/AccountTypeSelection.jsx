"use client";

import React, { useState } from "react";

export const AccountTypeSelect = ({ className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      className={`flex gap-10 items-start py-5 pr-7 pl-20 font-semibold text-white rounded-xl border-2 border-solid bg-sky-950 border-stone-400 ${className}`}
      aria-haspopup="listbox"
      aria-expanded={isOpen}
    >
      <span className="my-auto">Select Account Type</span>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/40a127d88f50db3c24af93ee7ee48c9fb5c31e46?placeholderIfAbsent=true"
        alt="Select arrow"
        className="object-contain shrink-0 self-start w-10 aspect-square"
      />
    </button>
  );
};
