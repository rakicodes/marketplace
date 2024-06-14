"use client"
import React from 'react'
import Header from "@ui/organisms/Header";
import Footer from "@ui/organisms/Footer";
import { useRouter } from "next/navigation"
import { IPropsWithOnlyChildren } from '@ui/types/props';

const AppLayout = ({ children }: IPropsWithOnlyChildren) => {
  const router = useRouter()  
  return (
    <>
        <Header toProfile={() => router.push("/profile")} toSignup={() => router.push("/signup")} toLogin={() => router.push("/login")} />
            {children}
        <Footer />
    </>
  )
}

export default AppLayout