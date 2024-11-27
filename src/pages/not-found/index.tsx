import { Link } from "react-router";

import Container from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="min-h-screen flex justify-center items-center">
      <div className="text-center">
        <p className="text-4xl mb-8">Opps! Nothing is here :|</p>
        {/* TODO: shoud be a component */}
        <Link
          to="/"
          className="min-h-9 text-center px-4 py-2 text-slate-950 font-black bg-slate-100 hover:bg-slate-950 hover:text-slate-50 transition-all duration-300"
        >
          Go to home
        </Link>
      </div>
    </Container>
  );
}
