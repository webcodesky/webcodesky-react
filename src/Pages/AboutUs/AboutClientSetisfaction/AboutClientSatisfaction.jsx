import Container from "../../../Components/Ui/Container/Container";

const AboutClientSatisfaction = () => {
  return (
    <>
      <div className="px-4 md:px-[67px] max-sm:mt-[100px] pb-8 md:pt-[68px] md:pb-[68px]  bg-gradient-to-b from-[#FFF6EA] to-[rgba(255,232,199,0.20)]">
        <Container>
          <div className="flex flex-wrap sm:flex-col md:flex-row pt-10 sm:pt-10 justify-center items-center gap-6">
            {/* Satisfaction Metric 1 */}
            <div className="flex-1 justify-center items-center min-w-[250px]">
              <h2 className="text-center">130+</h2>
              <p className=" text-[#161C2D] text-center opacity-70 text-[16px] md:text-[19px] font-[500] leading-[28px] md:leading-[32px] tracking-[-0.2px]">
                Successful Projects Delivered Across the Globe.
              </p>
            </div>
            {/* Satisfaction Metric 2 */}
            <div className="flex-1 min-w-[250px]">
              <h2 className="text-center">
                100+
              </h2>
              <p className=" text-[#161C2D] text-center opacity-70 text-[16px] md:text-[19px] font-[500] leading-[28px] md:leading-[32px] tracking-[-0.2px]">
                Happy Clients Trust Us <br /> Worldwide.
              </p>
            </div>
            {/* Satisfaction Metric 3 */}
            <div className="flex-1 min-w-[250px]">
              <h2 className="text-center">
                4.9/5.0
              </h2>
              <p className=" text-[#161C2D] text-center opacity-70 text-[16px] md:text-[19px] font-[500] leading-[28px] md:leading-[32px] tracking-[-0.2px]">
                Customer Satisfaction Rating for Excellence
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default AboutClientSatisfaction;
