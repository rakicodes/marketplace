"use client";
import React, { useState, useContext, useEffect } from "react";
import LoginTemplate from "@ui/templates/LoginTemplate";
import { AuthContext } from "@/app/context/auth";
import { useRouter } from "next/navigation"
import { isAuth } from "@ui/types/typeguards";

const Page = () => {
  const { currentUser, handleAuthCookie } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (currentUser) {
      router.push("/profile")
    }
  }, [currentUser, router])

  const resetForm = () => {
    setEmail("")
    setPassword("")
  }

  const handleSubmit = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        },
      );
      const data = await res.json();
      console.log(data)
      if (isAuth(data)) {
        handleAuthCookie(data)
        resetForm()
        router.push("/profile")  
      }
    } catch (error) {
      console.log(error)
    }
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
