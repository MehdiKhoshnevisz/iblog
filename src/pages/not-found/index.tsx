// import { Link } from "react-router";

import Container from "@/components/Container";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <Container className="min-h-screen flex justify-center items-center">
      <div className="text-center">
        <p className="text-4xl mb-8">Opps! Nothing is here :|</p>
        <Button color="primary" href="/">
          Go to home
        </Button>
      </div>
    </Container>
  );
}
