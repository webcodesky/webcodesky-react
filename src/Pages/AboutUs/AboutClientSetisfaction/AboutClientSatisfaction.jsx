import Container from "../../../Components/Ui/Container/Container";

const AboutClientSatisfaction = () => {
  return (
    <>
      <div className="px-4 md:px-[67px] mt-[100px] pb-8 md:pt-[68px] md:pb-[68px] rounded-[25px] bg-gradient-to-b from-[#FFF6EA] to-[rgba(255,232,199,0.20)]">
        <Container>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {/* Satisfaction Metric 1 */}
            <div className="flex-1 min-w-[250px]">
              <h1 className="text-[#161C2D] text-center text-[40px] md:text-[48px] font-[700] leading-[48px] md:leading-[58px] tracking-[-1.8px]">
                1M+
              </h1>
              <p className="w-full md:w-[314px] text-[#161C2D] text-center opacity-70 text-[16px] md:text-[19px] font-[500] leading-[28px] md:leading-[32px] tracking-[-0.2px]">
                Satisfaction rate comes from our awesome customers.
              </p>
            </div>
            {/* Satisfaction Metric 2 */}
            <div className="flex-1 min-w-[250px]">
              <h1 className="text-[#161C2D] text-center text-[40px] md:text-[48px] font-[700] leading-[48px] md:leading-[58px] tracking-[-1.8px]">
                92%
              </h1>
              <p className="w-full md:w-[314px] text-[#161C2D] text-center opacity-70 text-[16px] md:text-[19px] font-[500] leading-[28px] md:leading-[32px] tracking-[-0.2px]">
                Satisfaction rate comes from our awesome customers.
              </p>
            </div>
            {/* Satisfaction Metric 3 */}
            <div className="flex-1 min-w-[250px]">
              <h1 className="text-[#161C2D] text-center text-[40px] md:text-[48px] font-[700] leading-[48px] md:leading-[58px] tracking-[-1.8px]">
                4.9/5.0
              </h1>
              <p className="w-full md:w-[314px] text-[#161C2D] text-center opacity-70 text-[16px] md:text-[19px] font-[500] leading-[28px] md:leading-[32px] tracking-[-0.2px]">
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
