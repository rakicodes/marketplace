import React from "react";
import { IErrorPopup } from "../types/props";
import { IoCloseOutline } from "react-icons/io5";

const ErrorPopup = ({ children, open, handleOpen }: IErrorPopup) => {
    return (
		open && <div className="cursor-pointerpy-2 px-4 bg-red-50 absolute min-w-64 h-10 z-30 right-3 top-3 rounded text-red-900 flex items-center gap-x-2 text-sm">
			<IoCloseOutline onClick={() => handleOpen(!open)}/>
			{children}
		</div>
	);
};

export default ErrorPopup;
