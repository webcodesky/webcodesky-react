import Container from "../../../Components/Ui/Container/Container";

const ServiceVideo = () => {
  return (
    <>
      <Container>
        <div className="md:pt-20 max-sm:pb-10">
          <h1 className="px- md:px-20 lg:px-48 text-center mt-10 md:mt-auto">
            We are providing the best business service.
          </h1>
          <p className="md:px-[100px] lg:px-[310px] text-[#747272] text-center text-[16px] md:text-[16px] font-medium leading-[18px] md:leading-[20px] tracking-[0.2px] pt-2.5">
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics
          </p>

          <div className="flex justify-center items-center pt-[30px] md:pt-[50px]">
            <iframe
              className="w-full h-full md:w-[90%] md:h-[420px] lg:w-[877px] lg:h-[442px] rounded-[10px] md:rounded-[20px] bg-gradient-to-b from-transparent to-[rgba(56,56,56,0.84)]"
              src="https://www.youtube.com/embed/DFmhX5h6Lig?rel=0"
              title="YouTube Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Container>
      <div className="hidden md:block">
        <p className="hidden md:block bg-gradient-to-t from-[#FFF6EA] to-[#ffe8c780] h-[407px] md:-mt-[290px]"></p>
      </div>
    </>
  );
};

export default ServiceVideo;
