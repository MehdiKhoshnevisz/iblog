import { ContainerProps } from "./types";

const Container = (props: ContainerProps) => {
  const { children, className = "" } = props;
  return (
    <div className={`max-w-4xl mx-auto px-4 lg:px-0 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
