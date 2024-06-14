"use client";
import React from "react";
import FilledButton from "../atoms/FilledButton";
import OutlineButton from "../atoms/OutlineButton";

const Header = () => {
	return (
		<div className="px-4 md:px-8 py-6 flex justify-between items-center w-full">
			<span>Marketplace: Sellers</span>
			<div className="flex gap-x-2">
				{true ? (
					<>
						<OutlineButton onClick={() => console.log()}>Profile</OutlineButton>
						<FilledButton onClick={() => console.log()}>Log Out</FilledButton>
					</>
				) : (
					<>
						<OutlineButton onClick={() => console.log()}>Sign Up</OutlineButton>
						<FilledButton onClick={() => console.log()}>Log In</FilledButton>
					</>
				)}
			</div>
		</div>
	);
};

export default Header;
