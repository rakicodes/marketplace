"use client";
import React, { useState } from "react";
import LoginTemplate from "@ui/templates/LoginTemplate";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/login`,
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
      },
    );
    const data = await res.json();
  };

  return (
    <>
      <LoginTemplate
        email={email}
        password={password}
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
