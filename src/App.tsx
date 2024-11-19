import Post from "./components/Post";
import github from "./icons/github.svg";
import linkedin from "./icons/linkedin.svg";

function App() {
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
    <main>
      <div className="min-h-[400px] flex justify-center items-center mt-20 mb-40">
        <div className="max-w-4xl">
          <h1 className="text-6xl text-center font-black">
            Remote Front-End Developer from IRAN,Tehran.
          </h1>
          <p className="text-center mx-auto mt-8 text-xl text-slate-600 leading-snug">
            Hey, I’m <span className="font-black">Mehdi</span>-a front-end
            developer who loves creating interactive, visually stunning web
            experiences. From smooth animations to clean, functional designs,
            I’m all about bringing ideas to life and making the web a more
            exciting place!
          </p>
          <div className="flex justify-center gap-3 mt-8">
            <img
              src={github}
              height={24}
              width={24}
              alt="github"
              className="cursor-pointer"
            />
            <img
              src={linkedin}
              height={24}
              width={24}
              alt="linkedin"
              className="rounded cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* posts */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="grid grid-cols-12 gap-8">
          {posts.map((post, index) => (
            <div className="col-span-4">
              <Post
                key={index}
                href={post.href}
                image={post.image}
                title={post.title}
                date={post.date}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
