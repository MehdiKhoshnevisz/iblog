import Container from "@/components/Container";
import { useParams } from "react-router-dom";

export default function PostPage() {
  const { id } = useParams();

  return (
    <main>
      <Container className="my-40">
        <header className="mb-8">
          <h1 className="text-5xl font-black">
            What I learned as a product designer at Apple {id}.
          </h1>
          <span className="block mt-6">Dec 20, 2023</span>
        </header>

        <article className="text-xl text-slate-900">
          <h2 className="mb-2">Introduction</h2>

          <p>
            In today’s fast-paced world, staying productive can feel like an
            uphill battle. Whether you're working from home, managing a team, or
            juggling multiple responsibilities, productivity is the key to
            achieving your goals efficiently. Here are 10 actionable tips to
            help you boost productivity and make the most of your day.
          </p>

          <br />

          <p>
            Whether you're working from home, managing a team, or juggling
            multiple responsibilities, productivity is the key to achieving your
            goals efficiently. Here are 10 actionable tips to help you boost
            productivity and make the most of your day.
          </p>
        </article>
      </Container>
    </main>
  );
}
