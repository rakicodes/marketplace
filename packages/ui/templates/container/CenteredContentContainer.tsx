import React from "react";
import { IPropsWithOnlyChildren } from "../../types/props";

const CenteredContentContainer = ({ children }: IPropsWithOnlyChildren) => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white p-4 md:p-0">
      {children}
    </div>
  );
};

export default CenteredContentContainer;
