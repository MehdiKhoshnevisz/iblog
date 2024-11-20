const Container = (props: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { children, className = "" } = props;
  return <div className={`max-w-4xl mx-auto ${className}`}>{children}</div>;
};

export default Container;
