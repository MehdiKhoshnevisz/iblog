import Container from "@/components/Container";

const TryAgain = (props: { onClick: VoidFunction }) => {
  const { onClick = () => {} } = props;

  return (
    <Container className="min-h-screen flex justify-center items-center">
      <div className="text-center">
        <p className="text-4xl mb-4">Something went wrong :(</p>
        {/* TODO: shoud be a component */}
        <button
          className="min-h-9 text-center px-4 py-2 text-slate-950 font-black bg-slate-100 hover:bg-slate-950 hover:text-slate-50 transition-all duration-300"
          onClick={onClick}
        >
          Try Again...
        </button>
      </div>
    </Container>
  );
};

export default TryAgain;
