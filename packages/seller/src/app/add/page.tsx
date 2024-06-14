"use client"
import { useContext, useEffect } from "react";
import AddListingTemplate from "@ui/templates/AddListingTemplate"
import { AuthContext } from "@/app/context/auth";
import { useRouter } from "next/navigation"

const Page = () => {
  const { currentUser, handleAuthCookie } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push("/")
    }
  }, [currentUser, router])

  return (
    <>
        <AddListingTemplate />
    </>
  )
}

export default Page