import Container from "@/components/Container";
import github from "@/assets/icons/github.svg";
import linkedin from "@/assets/icons/linkedin.svg";

const Biography = () => {
  return (
    <Container className="my-40">
      <section>
        <h1 className="text-6xl text-center font-black">
          Remote Front-End Developer from IRAN,Tehran.
        </h1>
        <p className="text-center mx-auto mt-8 text-xl text-slate-600 leading-snug">
          Hey, I’m <span className="font-black">Mehdi</span>-a front-end
          developer who loves creating interactive, visually stunning web
          experiences. From smooth animations to clean, functional designs, I’m
          all about bringing ideas to life and making the web a more exciting
          place!
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
      </section>
    </Container>
  );
};

export default Biography;
