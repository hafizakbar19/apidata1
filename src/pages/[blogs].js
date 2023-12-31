import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((item) => {
    return {
      params: {
        blogs: item.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const ids = context.params.blogs;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${ids}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default function Blogs({ data }) {
  const { id, title, body } = data;
  return (
    <div>
      <Navbar />
      <div className="data-div" key={id}>
        <h2 className="data-h2">{id}</h2>
        <h3 className="data-h3">{title}</h3>
        <p className="data-p">{body}</p>
      </div>
      <Footer />
    </div>
  );
}
