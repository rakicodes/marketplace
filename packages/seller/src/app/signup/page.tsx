"use client";
import React, { useContext, useState, useEffect } from "react";
import SignupTemplate from "@ui/templates/SignupTemplate";
import { AuthContext } from "@/app/context/auth";
import { useRouter } from "next/navigation"
import { isAuth } from "@ui/types/typeguards";

const Page = () => {
  const { currentUser, handleAuthCookie } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (currentUser) {
      router.push("/profile")
    }
  }, [currentUser, router])

  const resetForm = () => {
    setName("")
    setEmail("")
    setPassword("")
  }

  const handleSubmit = async () => {
    try {
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
        },
      );
      const data = await res.json();
      if (isAuth(data)) {
        handleAuthCookie(data)
        resetForm()
        router.push("/")
      }
      
    } catch (error) {
      console.log(error)
    }
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
