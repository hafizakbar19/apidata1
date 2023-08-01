import Navbar from "@/components/navbar";
import { useRouter } from "next/router"

export default function Blogs() {
    const router = useRouter();
    const blogIdentifier = router.query.blogs;
  return (
    <div>
        <Navbar />
        <h1>This is the dynamic {blogIdentifier} page</h1>
    </div>
  )
}
