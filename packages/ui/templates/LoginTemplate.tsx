import React, { useState } from "react";
import CenteredContentContainer from "./container/CenteredContentContainer";
import LoginForm from "../organisms/LoginForm";
import { ILoginTemplate } from "../types/props";
import ErrorPopup from "../molecules/ErrorPopup";

const LoginTemplate = ({
  email,
  password,
  error,
  open,
  handleOpen,
  onChangeEmail,
  onChangePassword,
  onSubmit,
}: ILoginTemplate) => {
  return (
    <div className="relative">
      <CenteredContentContainer>
        <ErrorPopup open={open} handleOpen={handleOpen}>{error as unknown as string}</ErrorPopup>
        <div className="flex flex-col p-10 w-full md:w-80 md:p-8 gap-y-10 bg-white border border-slate-500 rounded-lg">
          <div>
            <h1 className="text-2xl font-bold">Login</h1>
            <p className="text-sm">Start selling today!</p>
          </div>
          <LoginForm
            email={email}
            password={password}
            onChangeEmail={onChangeEmail}
            onChangePassword={onChangePassword}
            onSubmit={onSubmit}
          />
        </div>
      </CenteredContentContainer>
    </div>
  );
};

export default LoginTemplate;
