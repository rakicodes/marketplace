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
  const [open, setOpen] = useState(false);
  const [err, setErr] = useState<Error | null>(null)
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
        setOpen(false)
        router.push("/")
      } else {
        setOpen(true)
        setErr(data)
      }
      
    } catch (error) {
      console.log(error)
      setOpen(true)
      setErr(error as Error)
    }
  };

  return (
    <>
      <SignupTemplate
        name={name}
        email={email}
        password={password}
        open={open}
        error={err}
        handleOpen={setOpen}
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
