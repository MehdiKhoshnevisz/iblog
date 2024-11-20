const Container = (props: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { children, className = "" } = props;
  return <div className={`max-w-3xl mx-auto ${className}`}>{children}</div>;
};

export default Container;
