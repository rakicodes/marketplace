import React from "react";
import { IPropsWithOnlyChildren } from "../types/props";

const Label = ({ children }: IPropsWithOnlyChildren) => {
	return <label className="uppercase text-sm">{children}</label>;
};

export default Label;
