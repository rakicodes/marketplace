"use client"
import React from 'react'
import ErrorPageTemplate from '@ui/templates/ErrorPageTemplate'
import { useRouter } from "next/navigation"

const Error = () => {
  const router = useRouter()
  return (
    <>
      <ErrorPageTemplate link={() => router.push("/")} />
    </>
  )
}

export default Error