const Container = ({ children }) => {
  return (
    <div className="h-full w-full max-w-[1440px] px-5 md:px-20 lg:px-28 mx-auto">
      {children}
    </div>
  );
};

export default Container;
