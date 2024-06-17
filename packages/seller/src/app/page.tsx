import SellerHomeTemplate from "@ui/templates/SellerHomeTemplate"
import Link from "next/link"

export default function Home() {
  return <><SellerHomeTemplate elem={<Link href="/login">Start Now</Link>}/></>;
}
