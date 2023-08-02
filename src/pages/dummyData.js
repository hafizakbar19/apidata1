import Navbar from "@/components/navbar";


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

        {data.map((el)=>{
            return <div key={el.id}>
                <h2>{el.id}</h2>
                <h3>{el.title}</h3>
                </div>
        })}

    </div>
  )
}
