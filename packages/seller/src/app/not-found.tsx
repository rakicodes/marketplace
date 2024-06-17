"use client"
import React from 'react'
import ErrorPageTemplate from '@ui/templates/ErrorPageTemplate'
import { useRouter } from "next/navigation"

const NotFound = () => {
  const router = useRouter()
  return (
    <>
      <ErrorPageTemplate link={() => router.push("/")} message="Sorry we couldn't find the page you're looking for" />
    </>
  )
}

export default NotFound