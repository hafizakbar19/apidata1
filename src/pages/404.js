import Navbar from "@/components/navbar";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";


export default function Error() {
    const router = useRouter();
    const handleInput = () => {
        router.push("/");
    }

    useEffect(
        ()=>{
            setTimeout(() => {
               router.push("/") 
            }, 3000);
        },[]
    );
  return (
    <div>
        <Navbar />
        <h1>Sorry page not found</h1>
        <p>Our team is looking into this matter and working hard to resolve the issue as soon as possible</p>
        <Link href="/">
        Back to Home
        </Link>
    </div>
  )
}
