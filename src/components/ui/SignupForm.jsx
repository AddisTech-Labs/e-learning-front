"use client";

import React from "react";
import { Logo } from "./Logo";
import { FormInput } from "./FormInput";
import { PasswordInput } from "./PasswordInput";
import { AccountTypeSelect } from "./AccountTypeSelect";
import { SignupButton } from "./SignupButton";

export const SignupForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col py-16 pr-20 pl-7 mx-auto w-full text-xl text-white shadow-sm bg-sky-950 rounded-[34px] max-md:px-5 max-md:mt-10 max-md:max-w-full"
    >
      <Logo />

      <h2 className="self-center mt-9 text-5xl font-bold max-md:text-4xl">
        Welcome
      </h2>

      <p className="self-center mt-10 text-3xl max-md:mt-10">Join us today!</p>

      <div className="flex flex-col items-end gap-11 mt-16">
        <FormInput label="Email Address" type="email" />

        <PasswordInput />

        <AccountTypeSelect />

        <SignupButton />
      </div>

      <p className="self-center mt-7">
        Already have an account?{" "}
        <a href="/login" className="text-[#E49114] hover:underline">
          Login
        </a>
      </p>
    </form>
  );
};
