import React from "react";
import SignupForm from "../organisms/SignupForm";
import CenteredContentContainer from "./container/CenteredContentContainer";
import { ISignupTemplate } from "../types/props";
import ErrorPopup from "../molecules/ErrorPopup";

const SignupTemplate = ({
  name,
  email,
  password,
  error,
  open,
  handleOpen,
  onChangeName,
  onChangeEmail,
  onChangePassword,
  onSubmit,
}: ISignupTemplate) => {
  return (
    <div className="relative">
      <CenteredContentContainer>
        <ErrorPopup open={open} handleOpen={handleOpen}>{error as unknown as string}</ErrorPopup>
        <div className="pt-20 pb-10">
          <div className="flex flex-col p-10 w-full md:w-80 md:p-8 gap-y-10 bg-white border border-slate-500 rounded-lg">
            <div>
              <h1 className="text-2xl font-bold">Sign Up</h1>
              <p className="text-sm">Start selling today!</p>
            </div>
            <SignupForm
              name={name}
              email={email}
              password={password}
              onChangeName={onChangeName}
              onChangeEmail={onChangeEmail}
              onChangePassword={onChangePassword}
              onSubmit={onSubmit}
            />
          </div>
        </div>
      </CenteredContentContainer>
    </div>
  );
};

export default SignupTemplate;
