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
            return <div className="data-div" key={item.id}>
                <Link href={`/${item.id}`}>
                <h2 className="data-h2">{item.id}</h2>
                
                <h3 className="data-h3">{item.title}</h3>
                <p className="data-p">{item.body}</p>
                </Link>
                </div>
        })}

    </div>
  )
}
