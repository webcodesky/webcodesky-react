import Container from "../../../Components/Ui/Container/Container";

const DoseItWork = () => {
  return (
    <Container>
      <div className="pt-8 md:pt-[77px]">
        {/* Title Section */}
        <h2 className="text-[#161C2D] text-center">How does it work?</h2>
        <p className="px-4 sm:px-20 md:px-[200px] text-[#161C2D] text-center pt-4 md:pt-5 pb-8 md:pb-[80px]">
          Streamlined, efficient, and focused on delivering results—our process
          ensures your success from start to finish.{" "}
        </p>

        {/* Options Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-[37px] pb-8 md:pb-[58px] px-4 md:px-[46px]">
          {/* Step 1 */}
          <div className="w-full max-w-[256px] flex flex-col justify-center items-center">
            <div className="w-[73px] h-[73px] rounded-full bg-[#F64B4B] flex justify-center items-center">
              <p className="text-white text-[36px] font-bold leading-[48px] tracking-[-1.2px]">
                1
              </p>
            </div>
            <h3 className="text-[#161C2D] text-center pt-6 md:pt-[46px] pb-3 md:pb-[14px]">
              Discovery & Planning
            </h3>
            <f5 className="text-[#161C2D] text-center">
              We analyze goals and craft a strategic plan for success.
            </f5>
          </div>

          {/* Step 2 */}
          <div className="w-full max-w-[256px] flex flex-col justify-center items-center">
            <div className="w-[73px] h-[73px] rounded-full bg-[#68D585] flex justify-center items-center">
              <p className="text-white text-[36px] font-bold leading-[48px] tracking-[-1.2px]">
                2
              </p>
            </div>
            <h3 className="text-[#161C2D] text-center pt-6 md:pt-[46px] pb-3 md:pb-[14px]">
              Design & Prototyping
            </h3>
            <f5 className="text-[#161C2D] text-center">
              We create user-focused, visually appealing prototypes aligned with
              your brand.
            </f5>
          </div>

          {/* Step 3 */}
          <div className="w-full max-w-[256px] flex flex-col justify-center items-center">
            <div className="w-[73px] h-[73px] rounded-full bg-[#473BF0] flex justify-center items-center">
              <p className="text-white text-[36px] font-bold leading-[48px] tracking-[-1.2px]">
                3
              </p>
            </div>
            <h3 className="text-[#161C2D] text-center pt-6 md:pt-[46px] pb-3 md:pb-[14px]">
              Development & Testing
            </h3>
            <f5 className="text-[#161C2D] text-center">
              We build, test, and optimize fast, secure, and scalable solutions.
            </f5>
          </div>

          {/* Step 4 */}
          <div className="w-full max-w-[256px] flex flex-col justify-center items-center">
            <div className="w-[73px] h-[73px] rounded-full bg-[#A259FF] flex justify-center items-center">
              <p className="text-white text-[36px] font-bold leading-[48px] tracking-[-1.2px]">
                4
              </p>
            </div>
            <h3 className="text-[#161C2D] text-center pt-6 md:pt-[46px] pb-3 md:pb-[14px]">
              Launch & Support
            </h3>
            <f5 className="text-[#161C2D] text-center">
              We launch your project and provide ongoing support for continuous
              growth.
            </f5>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DoseItWork;
