import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import BannerProject from "../BannerProject/BannerProject";

const Banner = () => {
  return (
    <div className="relative bg-[#FFFFFF] flex flex-col justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[18px] font-medium pt-[80px] md:pt-[140px] text-left md:pl-28">
          We Build Your Dream Website
        </p>

        <span className="dm-sans-b font-bold text-[40px] md:text-[190px] tracking-[-4%]">
          Web <span className="text-[#FF6600]">Code</span> Sky
        </span>
        <p className="leading-5 tracking-[0.2px] text-left  md:pl-36 md:px-[900px]">
          We believe you're in the right place. Here, we deliver quality work
          built on honesty and trust
        </p>

        <div className="flex justify-center">
          <button className="flex justify-center mt-6 sm:mt-8 border-[1px] rounded-full bg-[#FF6600] gap-3 sm:gap-5">
            <span className="dm-sans text-black hover:text-white text-[16px] sm:text-[24px] leading-[100%] px-4 py-3 sm:px-[25px] sm:py-[27px]">
              Get a Quote
            </span>
            <span className="text-white text-[28px] sm:text-[48px] p-2 sm:p-3 my-auto">
              <BsFillArrowUpRightCircleFill />
            </span>
          </button>
        </div>
      </div>

      <div>
        <BannerProject />
      </div>
    </div>
  );
};

export default Banner;
