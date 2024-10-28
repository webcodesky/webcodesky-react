import Container from "../../../Components/Ui/Container/Container";
import img1 from "../../../assets/Chooseicn1.png";
import img2 from "../../../assets/Chooseicn2.png";
import img3 from "../../../assets/Chooseicn3.png";

const ChooseUs = () => {
  return (
    <Container>
      <div className="md:pt-[74px] pb-10 text-center">
        <h1 className="">
          WHY <span className="text-[#F60]">CHOOSE</span> US
        </h1>
        <p className="mont text-[#737373] mt-4 mb-10 mx-auto w-full max-w-[600px]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-5 md:gap-[30px] justify-center">
        <div className="md:w-[328px] w-full h-full bg-[rgba(96,76,195,0.3)] border border-[#A9D6FF] rounded-[10px] md:mb-[74px]">
          {/* Icon and title */}
          <div className="flex justify-center gap-[15px] px-5 md:px-[50px] py-5 md:py-[30px] items-center  rounded-t-[10px]">
            <div className="flex w-[72px] h-[72px] justify-center items-center [23px_20px_22.647px_20px] rounded-[200px] bg-white">
              <img src={img1} alt="" />
            </div>
            <div className="mont-bold text-[16px] font-bold leading-[24px] tracking-[0.1px]">
              Web Development
            </div>
          </div>

          {/* Card Content */}
          <div className="p-6 rounded-t-[10px] bg-white space-y-3">
            <ul className="text-[#737373] text-[14px] font-semibold leading-[24px] space-y-1 mb-5">
              <li>- The best products start with Figma</li>
              <li>- Design with real data</li>
              <li>- Lightning fast prototyping</li>
              <li>- Fastest way to organize</li>
              <li>- Work at the speed of thought.</li>
            </ul>
            <span className="text-[#F60] text-[14px] font-semibold leading-[24px] tracking-[0.2px]">
              Learn More
            </span>
          </div>
        </div>
        <div className="md:w-[328px] w-full h-full bg-[rgba(96,76,195,0.3)] border border-[#A9D6FF] rounded-[10px] md:mb-[74px]">
          {/* Icon and title */}
          <div className="flex justify-center gap-[15px] px-5 md:px-[50px] py-5 md:py-[30px] items-center  rounded-t-[10px]">
            <div className="flex w-[72px] h-[72px] justify-center items-center p-[20px] rounded-full bg-white">
              <img src={img2} alt="" />
            </div>
            <div className="mont-bold text-[16px] font-bold leading-[24px] tracking-[0.1px]">
              National top 50 firms
            </div>
          </div>

          {/* Card Content */}
          <div className="p-6 rounded-t-[10px] bg-white space-y-3">
            <ul className="text-[#737373] text-[14px] font-semibold leading-[24px] space-y-1 mb-5">
              <li>- The best products start with Figma</li>
              <li>- Design with real data</li>
              <li>- Lightning fast prototyping</li>
              <li>- Fastest way to organize</li>
              <li>- Work at the speed of thought.</li>
            </ul>
            <span className="text-[#F60] text-[14px] font-semibold leading-[24px] tracking-[0.2px]">
              Learn More
            </span>
          </div>
        </div>
        <div className="md:w-[328px] w-full h-full bg-[rgba(96,76,195,0.3)] border border-[#A9D6FF] rounded-[10px] md:mb-[74px]">
          {/* Icon and title */}
          <div className="flex justify-center gap-[15px] px-5 md:px-[50px] py-5 md:py-[30px] items-center  rounded-t-[10px]">
            <div className="flex w-[72px] h-[72px] justify-center items-center p-[20px] rounded-full bg-white">
              <img src={img3} alt="" />
            </div>
            <div className="mont-bold text-[16px] font-bold leading-[24px] tracking-[0.1px]">
              Digital Marketing
            </div>
          </div>

          {/* Card Content */}
          <div className="p-6 rounded-t-[10px] bg-white space-y-3">
            <ul className="text-[#737373] text-[14px] font-semibold leading-[24px] space-y-1 mb-5">
              <li>- The best products start with Figma</li>
              <li>- Design with real data</li>
              <li>- Lightning fast prototyping</li>
              <li>- Fastest way to organize</li>
              <li>- Work at the speed of thought.</li>
            </ul>
            <span className="text-[#F60] text-[14px] font-semibold leading-[24px] tracking-[0.2px]">
              Learn More
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ChooseUs;
