"use client";

import React from "react";
import UnderlineInputWithLabel from "../molecules/UnderlineInputWithLabel";
import FilledButton from "../atoms/FilledButton";
import { ISignupForm } from "../types/props";

const SignupForm = ({
  name,
  email,
  password,
  onChangeName,
  onChangeEmail,
  onChangePassword,
  onSubmit,
}: ISignupForm) => {
  return (
    <div className="flex flex-col gap-y-10">
      <UnderlineInputWithLabel
        label="name"
        name="name"
        value={name}
        placeholder="Enter your name"
        onChange={onChangeName}
      />
      <UnderlineInputWithLabel
        label="email"
        name="email"
        value={email}
        type="email"
        placeholder="Enter your email"
        onChange={onChangeEmail}
      />
      <UnderlineInputWithLabel
        label="password"
        name="password"
        value={password}
        type="password"
        placeholder="Enter your password"
        onChange={onChangePassword}
      />
      <FilledButton onClick={onSubmit}>Submit</FilledButton>
    </div>
  );
};

export default SignupForm;
