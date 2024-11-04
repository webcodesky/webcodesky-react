import Container from "../../../Components/Ui/Container/Container";

const ServiceBanner = () => {
  return (
    <div className="pt-[80px] md:pt-[206px] bg-[#F5F5F5]">
      <Container>
        <div>
          {/* Title */}
          <h1 className="text-black text-[32px] sm:text-[48px] md:text-[64px] font-bold tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-2.56px] leading-tight text-center">
            WCS <span className="text-[#F60]">Services</span>
          </h1>

          {/* Description */}
          <p className="text-[#747272] text-center text-[16px] sm:text-[18px] md:text-[20px] font-medium leading-[24px] md:leading-[28px] tracking-[0.1px] sm:tracking-[0.15px] md:tracking-[0.2px] sm:px-[100px] md:px-[340px] pt-2 pb-8 md:pb-[146px]">
            Provide Top-noch Web solution over the world.Provide Top-noch Web
            solution over the world.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default ServiceBanner;
