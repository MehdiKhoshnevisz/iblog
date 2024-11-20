import Container from "@/components/Container";
import Post from "@/components/Post";

const Posts = () => {
  const posts = [
    {
      href: "/",
      image: "https://picsum.photos/320/240",
      title:
        "This is a summary or intro of the blog post to show details open it",
      date: "Dec 30, 2020",
    },
    {
      href: "/",
      image: "https://picsum.photos/320/240",
      title:
        "This is a summary or intro of the blog post to show details open it",
      date: "Dec 30, 2020",
    },
    {
      href: "/",
      image: "https://picsum.photos/320/240",
      title:
        "This is a summary or intro of the blog post to show details open it",
      date: "Dec 30, 2020",
    },
    {
      href: "/",
      image: "https://picsum.photos/320/240",
      title:
        "This is a summary or intro of the blog post to show details open it",
      date: "Dec 30, 2020",
    },
    {
      href: "/",
      image: "https://picsum.photos/320/240",
      title:
        "This is a summary or intro of the blog post to show details open it",
      date: "Dec 30, 2020",
    },
    {
      href: "/",
      image: "https://picsum.photos/320/240",
      title:
        "This is a summary or intro of the blog post to show details open it",
      date: "Dec 30, 2020",
    },
  ];

  return (
    <Container className="mb-12">
      <div className="grid grid-cols-12 gap-8">
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
    </Container>
  );
};

export default Posts;
