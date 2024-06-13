import React from "react";
import Label from "../atoms/Label";
import { UnderlineInput } from "../atoms/UnderlineInput";
import { IUnderlineInputWithLabel } from "../types/props";

const UnderlineInputWithLabel = ({
  label,
  name,
  placeholder,
  value,
  type = "text",
  onChange,
}: IUnderlineInputWithLabel) => {
  return (
    <div className="flex flex-col">
      <Label>{label}</Label>
      <UnderlineInput
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default UnderlineInputWithLabel;
