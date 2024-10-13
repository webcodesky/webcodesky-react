import Container from "../../../Components/Ui/Container/Container";

const BlogBanner = () => {
  return (
    <div className="md:pt-[206px]  bg-[#F5F5F5]">
      <Container>
        <div>
          <h1 className="text-black text-[64px] font-bold tracking-[-2.56px] leading-none text-center">
            WCS <span className="text-[#F60] ">Blog</span>
          </h1>
          <p className="text-[#737373] text-center text-[20px] font-medium leading-[20px] tracking-[0.2px] md:px-[340px] pt-2 md:pb-[146px]">
            Provide Top-noch Web solution over the world.Provide Top-noch Web
            solution over the world.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default BlogBanner;
