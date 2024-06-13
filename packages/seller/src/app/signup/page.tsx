"use client";
import React, { useState } from "react";
import SignupTemplate from "@ui/templates/SignupTemplate";

const Page = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async () => {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/signup`,
			{
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({
					name,
					email,
					password,
				}),
			}
		);
		const data = await res.json();
	};

	return (
		<>
			<SignupTemplate
				name={name}
				email={email}
				password={password}
				onChangeName={(e: React.ChangeEvent<HTMLInputElement>) =>
					setName(e.target.value)
				}
				onChangeEmail={(e: React.ChangeEvent<HTMLInputElement>) =>
					setEmail(e.target.value)
				}
				onChangePassword={(e: React.ChangeEvent<HTMLInputElement>) =>
					setPassword(e.target.value)
				}
				onSubmit={handleSubmit}
			/>
		</>
	);
};

export default Page;
