import { useParams } from "react-router-dom";

export default function PostPage() {
  const { id } = useParams();

  return (
    <>
      <h2>post {id}</h2>
    </>
  );
}
