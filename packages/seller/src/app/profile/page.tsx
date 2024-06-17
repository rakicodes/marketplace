"use client";

import React, { useEffect, useContext, useState } from "react";
import ProfileTemplate from "@ui/templates/ProfileTemplate";
import { ICard } from "@ui/types/props";
import { AuthContext } from "@/app/context/auth";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";
import { IAuth, IListing } from "@ui/types/data";
import { isListingArray } from "@ui/types/typeguards";
import { listingArrayToCardArray } from "@ui/utils/convert";
import ErrorPageTemplate from "@ui/templates/ErrorPageTemplate";

const Page = () => {
	const { currentUser, handleAuthCookie } = useContext(AuthContext);
	const router = useRouter();
  const [data, setData] = useState([] as ICard[])
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const handleCardClick = (id: string) => {
      router.push(`/listing/${id}`)
    }

    const fetchData = async () => {
      const authCookie = JSON.parse(getCookie("auth") || "") as IAuth 
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/listing/user/${authCookie ? authCookie._id : ""}`,  {
					headers: {
						Authorization: `Bearer ${authCookie ? authCookie.token : ""}`,
					},
				})
        const data: IListing[] | Error = await res.json();
        if (isListingArray(data)) {
          setData(listingArrayToCardArray(data, handleCardClick))
        } else {
          setError(data)
        }
      } catch (error) {
        console.log(error)
      }
    };
    fetchData()
  }, [router])

	useEffect(() => {
		if (!currentUser) {
			router.push("/");
		}
	}, [currentUser, router]);

	return (
		<div>
      {
        data ? <ProfileTemplate
				items={data}
				onClick={() => router.push("/add")}
			  /> : <ErrorPageTemplate link={() => router.push("/")} />
      }

		</div>
	);
};

export default Page;
