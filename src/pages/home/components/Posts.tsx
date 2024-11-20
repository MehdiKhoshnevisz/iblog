import Container from "@/components/Container";
import Post from "@/components/Post";

const Posts = () => {
  const posts = [
    {
      href: "/",
      image: "https://picsum.photos/320/240",
      title: "This is a summary or intro",
      date: "Dec 30, 2020",
    },
    {
      href: "/",
      image: "https://picsum.photos/320/240",
      title: "This is a summary or intro",
      date: "Dec 30, 2020",
    },
    {
      href: "/",
      image: "https://picsum.photos/320/240",
      title: "This is a summary or intro",
      date: "Dec 30, 2020",
    },
    {
      href: "/",
      image: "https://picsum.photos/320/240",
      title: "This is a summary or intro",
      date: "Dec 30, 2020",
    },
    {
      href: "/",
      image: "https://picsum.photos/320/240",
      title: "This is a summary or intro",
      date: "Dec 30, 2020",
    },
    {
      href: "/",
      image: "https://picsum.photos/320/240",
      title: "This is a summary or intro",
      date: "Dec 30, 2020",
    },
  ];

  return (
    <Container>
      <h2 className="text-center text-4xl text-slate-950 font-black mb-10">
        What's going on?
      </h2>
      <div className="grid grid-cols-12 gap-4">
        {posts.map((post, index) => (
          <div className="col-span-4">
            <Post
              key={index}
              href={`/post/${index + 1}`}
              image={post.image}
              title={post.title}
              date={post.date}
            />
          </div>
        ))}
      </div>
      <div className="text-center my-8">
        <button className="rounded-lg text-center px-4 py-2 text-slate-950 font-black bg-slate-100 hover:bg-slate-950 hover:text-slate-50 transition-all duration-300">
          I want more...
        </button>
      </div>
    </Container>
  );
};

export default Posts;
