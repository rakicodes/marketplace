import React from "react";
import { ILoginForm } from "../types/props";
import UnderlineInputWithLabel from "../molecules/UnderlineInputWithLabel";
import FilledButton from "../atoms/FilledButton";

const LoginForm = ({
  email,
  password,
  onChangeEmail,
  onChangePassword,
  onSubmit,
}: ILoginForm) => {
  return (
    <div className="flex flex-col gap-y-10">
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

export default LoginForm;
