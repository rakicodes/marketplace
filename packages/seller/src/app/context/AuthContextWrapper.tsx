"use client"
import React from "react";
import { IAuth } from "@ui/types/data";
import { useState, useEffect } from "react";
import { setCookie, deleteCookie, getCookie } from "cookies-next";
import { AuthContext } from "@/app/context/auth";
import { IPropsWithOnlyChildren } from "@ui/types/props";

const AuthContextWrapper = ({ children }: IPropsWithOnlyChildren) => {
	const [currentUser, setCurrentUser] = useState<IAuth | null>(null);

	useEffect(() => {
		setCurrentUser(getCookie("auth") ? JSON.parse(getCookie("auth") || "") as IAuth : null)
	}, [])

	const handleAuthCookie = (user: IAuth | null) => {
		setCurrentUser(user);
		if (user) {
			setCookie("auth", user);
		} else {
			deleteCookie("auth");
		}
	};
	return <AuthContext.Provider value={{currentUser, handleAuthCookie}}>{children}</AuthContext.Provider>
    ;
};

export default AuthContextWrapper;
