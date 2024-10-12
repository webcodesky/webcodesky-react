import Container from "../../../Components/Ui/Container/Container";

const AboutClientSatisfaction = () => {
  return (
    <>
      <div className="px-[67px] pt-[68px] pb-[68px] rounded-[25px] bg-gradient-to-b from-[#FFF6EA] to-[rgba(255,232,199,0.20)]">
        <Container>
          <div className="flex justify-center items-center">
            <div>
              <h1 className="text-[#161C2D] text-center text-[48px] font-[700] leading-[58px] tracking-[-1.8px]">
                1M+
              </h1>
              <p className="w-[314px] text-[#161C2D] text-center opacity-70 text-[19px] font-[500] leading-[32px] tracking-[-0.2px]">
                Satisfaction rate comes from our awesome customers.
              </p>
            </div>
            <div>
              <h1 className="text-[#161C2D] text-center text-[48px] font-[700] leading-[58px] tracking-[-1.8px]">
                92%
              </h1>
              <p className="w-[314px] text-[#161C2D] text-center opacity-70 text-[19px] font-[500] leading-[32px] tracking-[-0.2px]">
                Satisfaction rate comes from our awesome customers.
              </p>
            </div>
            <div>
              <h1 className="text-[#161C2D] text-center text-[48px] font-[700] leading-[58px] tracking-[-1.8px]">
                4.9/5.0
              </h1>
              <p className="w-[314px] text-[#161C2D] text-center opacity-70 text-[19px] font-[500] leading-[32px] tracking-[-0.2px]">
                Satisfaction rate comes from our awesome customers.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default AboutClientSatisfaction;
