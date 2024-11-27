const Container = (props: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { children, className = "" } = props;
  return (
    <div className={`max-w-4xl mx-auto px-3 lg:px-0 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
