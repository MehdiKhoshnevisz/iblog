import github from "./icons/github.svg";
import linkedin from "./icons/linkedin.svg";

function App() {
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
          <a href="/" className="col-span-4">
            <figure className="mb-1">
              <img
                src="https://picsum.photos/320/240"
                width={320}
                height={240}
                alt="A descriptive image"
                className="rounded-lg bg-slate-100"
              />
              <figcaption className="mt-1">
                <span className="">Dec 30, 2020</span>
                <p className="text-lg text-black font-bold leading-snug">
                  This is a summary or intro of the blog post to show details
                  open it
                </p>
              </figcaption>
            </figure>
          </a>

          <a href="/" className="col-span-4">
            <figure className="mb-1">
              <img
                src="https://picsum.photos/320/240"
                width={320}
                height={240}
                alt="A descriptive image"
                className="rounded-lg bg-slate-100"
              />
              <figcaption className="mt-1">
                <span className="">Dec 30, 2020</span>
                <p className="text-lg text-black font-bold leading-snug">
                  This is a summary or intro of the blog post to show details
                  open it
                </p>
              </figcaption>
            </figure>
          </a>

          <a href="/" className="col-span-4">
            <figure className="mb-1">
              <img
                src="https://picsum.photos/320/240"
                width={320}
                height={240}
                alt="A descriptive image"
                className="rounded-lg bg-slate-100"
              />
              <figcaption className="mt-1">
                <span className="">Dec 30, 2020</span>
                <p className="text-lg text-black font-bold leading-snug">
                  This is a summary or intro of the blog post to show details
                  open it
                </p>
              </figcaption>
            </figure>
          </a>

          <a href="/" className="col-span-4">
            <figure className="mb-1">
              <img
                src="https://picsum.photos/320/240"
                width={320}
                height={240}
                alt="A descriptive image"
                className="rounded-lg bg-slate-100"
              />
              <figcaption className="mt-1">
                <span className="">Dec 30, 2020</span>
                <p className="text-lg text-black font-bold leading-snug">
                  This is a summary or intro of the blog post to show details
                  open it
                </p>
              </figcaption>
            </figure>
          </a>
        </div>
      </div>
    </main>
  );
}

export default App;
