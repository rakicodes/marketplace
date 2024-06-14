import React, { useContext } from "react";
import FilledButton from "../atoms/FilledButton";
import OutlineButton from "../atoms/OutlineButton";
import { AuthContext } from "../../seller/src/app/context/auth";
import { IHeader } from "../types/props";

const Header = ({ toProfile, toSignup, toLogin }: IHeader) => {
	const { currentUser, handleAuthCookie } = useContext(AuthContext);

	const handleLogout = () => {
		handleAuthCookie(null)
	}

	return (
		<div className="px-4 md:px-8 py-3 flex justify-between items-center w-full absolute top-0">
			<span>Marketplace: Sellers</span>
			<div className="flex gap-x-2">
				{currentUser ? (
					<>
						<OutlineButton onClick={toProfile}>Profile</OutlineButton>
						<FilledButton onClick={handleLogout}>Log Out</FilledButton>
					</>
				) : (
					<>
						<OutlineButton onClick={toSignup}>Sign Up</OutlineButton>
						<FilledButton onClick={toLogin}>Log In</FilledButton>
					</>
				)}
			</div>
		</div>
	);
};

export default Header;
