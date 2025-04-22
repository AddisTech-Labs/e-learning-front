import React from "react";

export const SignupButton = ({ className = "", onClick }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`px-16 pt-3.5 pb-7 text-3xl text-white whitespace-nowrap bg-teal-700 rounded-xl w-[392px] hover:bg-teal-600 transition-colors ${className}`}
    >
      Signup
    </button>
  );
};
