import Navbar from "@/components/navbar";
import Link from "next/link";


export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    return {
        props: {
            data,
        },
    }
}

export default function DummyData({data}) {
  return (
    <div>

        <Navbar />

        {data.map((item)=>{
            return <div key={item.id}>
                <h2>{item.id}</h2>
                <Link href={`/${item.id}`}>
                <h3>{item.title}</h3>
                </Link>
                </div>
        })}

    </div>
  )
}
