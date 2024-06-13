import React from "react";
import SignupForm from "../organisms/SignupForm";
import CenteredContentContainer from "./container/CenteredContentContainer";
import { ISignupForm } from "../types/props";

const SignupTemplate = ({
  name,
  email,
  password,
  onChangeName,
  onChangeEmail,
  onChangePassword,
  onSubmit,
}: ISignupForm) => {
  return (
    <CenteredContentContainer>
      <div className="flex flex-col p-10 w-full md:w-80 md:p-8 gap-y-10 bg-white rounded">
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
    </CenteredContentContainer>
  );
};

export default SignupTemplate;
