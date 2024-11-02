import Container from "../../../Components/Ui/Container/Container";

const DoseItWork = () => {
  return (
    <Container>
      <div className="pt-8 md:pt-[77px]">
        {/* Title Section */}
        <h1 className="text-[#161C2D] text-center text-[32px] md:text-[48px] font-bold leading-[40px] md:leading-[58px] tracking-[-1.2px] md:tracking-[-1.8px]">
          How does it work?
        </h1>
        <p className="px-4 md:px-[310px] text-[#161C2D] text-center text-[16px] md:text-[19px] font-medium leading-[28px] md:leading-[32px] tracking-[-0.2px] opacity-70 pt-4 md:pt-5 pb-8 md:pb-[80px]">
          Streamlined, efficient, and focused on delivering results—our process ensures your success from start to finish.{" "}
        </p>

        {/* Options Section */}
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-[37px] pb-8 md:pb-[58px] px-4 md:px-[46px]">
          {/* Step 1 */}
          <div className="w-full max-w-[256px] flex flex-col justify-center items-center">
            <div className="w-[73px] h-[73px] rounded-full bg-[#F64B4B] flex justify-center items-center">
              <p className="text-white text-[36px] font-bold leading-[48px] tracking-[-1.2px]">
                1
              </p>
            </div>
            <h1 className="text-[#161C2D] text-center text-[20px] md:text-[21px] font-bold leading-[28px] md:leading-[32px] tracking-[-0.5px] pt-6 md:pt-[46px] pb-3 md:pb-[14px]">
              Discovery & Planning
            </h1>
            <p className="text-[#161C2D] text-center text-[16px] md:text-[17px] font-medium leading-[26px] md:leading-[29px] tracking-[-0.2px] opacity-70">
              We analyze goals and craft a strategic plan for success.
            </p>
          </div>

          {/* Step 2 */}
          <div className="w-full max-w-[256px] flex flex-col justify-center items-center">
            <div className="w-[73px] h-[73px] rounded-full bg-[#68D585] flex justify-center items-center">
              <p className="text-white text-[36px] font-bold leading-[48px] tracking-[-1.2px]">
                2
              </p>
            </div>
            <h1 className="text-[#161C2D] text-center text-[20px] md:text-[21px] font-bold leading-[28px] md:leading-[32px] tracking-[-0.5px] pt-6 md:pt-[46px] pb-3 md:pb-[14px]">
              Design & Prototyping
            </h1>
            <p className="text-[#161C2D] text-center text-[16px] md:text-[17px] font-medium leading-[26px] md:leading-[29px] tracking-[-0.2px] opacity-70">
              We create user-focused, visually appealing prototypes aligned with your brand.
            </p>
          </div>

          {/* Step 3 */}
          <div className="w-full max-w-[256px] flex flex-col justify-center items-center">
            <div className="w-[73px] h-[73px] rounded-full bg-[#473BF0] flex justify-center items-center">
              <p className="text-white text-[36px] font-bold leading-[48px] tracking-[-1.2px]">
                3
              </p>
            </div>
            <h1 className="text-[#161C2D] text-center text-[20px] md:text-[21px] font-bold leading-[28px] md:leading-[32px] tracking-[-0.5px] pt-6 md:pt-[46px] pb-3 md:pb-[14px]">
              Development & Testing
            </h1>
            <p className="text-[#161C2D] text-center text-[16px] md:text-[17px] font-medium leading-[26px] md:leading-[29px] tracking-[-0.2px] opacity-70">
              We build, test, and optimize fast, secure, and scalable solutions.
            </p>
          </div>

          {/* Step 4 */}
          <div className="w-full max-w-[256px] flex flex-col justify-center items-center">
            <div className="w-[73px] h-[73px] rounded-full bg-[#A259FF] flex justify-center items-center">
              <p className="text-white text-[36px] font-bold leading-[48px] tracking-[-1.2px]">
                4
              </p>
            </div>
            <h1 className="text-[#161C2D] text-center text-[20px] md:text-[21px] font-bold leading-[28px] md:leading-[32px] tracking-[-0.5px] pt-6 md:pt-[46px] pb-3 md:pb-[14px]">
              Launch & Support
            </h1>
            <p className="text-[#161C2D] text-center text-[16px] md:text-[17px] font-medium leading-[26px] md:leading-[29px] tracking-[-0.2px] opacity-70">
              We launch your project and provide ongoing support for continuous growth.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DoseItWork;
