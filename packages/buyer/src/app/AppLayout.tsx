"use client"
import BuyerHeader from "@ui/organisms/BuyerHeader";
import Footer from "@ui/organisms/Footer";
import { IPropsWithOnlyChildren } from "@ui/types/props";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const AppLayout = ({ children }: IPropsWithOnlyChildren) => {
	const router = useRouter();
	return (
		<>
			<BuyerHeader
				toHome={() => router.push("/")}
				toListings={() => router.push("/listings")}
				toSellers={
					<Link
						href={
							process.env.NEXT_PUBLIC_SELLER_URL
								? process.env.NEXT_PUBLIC_SELLER_URL
								: ""
						}
					>Sellers</Link>
				}
			/>
			{children}
			<Footer />
		</>
	);
};

export default AppLayout;
