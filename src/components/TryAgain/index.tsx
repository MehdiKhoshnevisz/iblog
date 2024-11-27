import Button from "@/components/Button";
import Container from "@/components/Container";

const TryAgain = (props: { onClick: VoidFunction }) => {
  const { onClick = () => {} } = props;

  return (
    <Container className="min-h-screen flex justify-center items-center">
      <div className="text-center">
        <p className="text-4xl mb-4">Something went wrong :(</p>
        <Button color="primary" onClick={onClick}>
          Try Again...
        </Button>
      </div>
    </Container>
  );
};

export default TryAgain;
