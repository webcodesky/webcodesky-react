import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import BannerProject from "../BannerProject/BannerProject";

const Banner = () => {
  return (
    <div className="relative bg-[#FFFFFF] flex flex-col justify-center">
      <div className="container mx-auto px-4 text-center">
        <p className="text-[16px] md:text-[18px] font-medium pt-[120px] md:pt-[140px] text-left md:pl-28">
          A complete Digital Solutions For Your Business
        </p>
        <span className="dm-sans-b font-bold text-[42px] md:text-[80px] lg:text-[145px] 2xl:text-[190px] tracking-[-4%]">
          Web <span className="text-[#FF6600]">Code</span> Sky
        </span>
        <p className="text-[16px] font-medium md:text-[16px] lg:text-[20px] tracking-[0.2px] text-left  md:pl-36 w-[98%] md:w-[600px] lg:w-[900px] 2xl:w-[900px] text-[#747272] font-montserrat md:leading-[20px]">
          We turn ideas into exceptional digital solutions. As a growing web
          development startup, we specialize in building high-performance
          websites and applications designed to elevate your business.
        </p>

        <div className="flex justify-center">
          <button className="flex justify-center hover:bg-black text-white items-center mt-6 sm:mt-8 border-[1px] rounded-full bg-[#FF6600] md:gap-2 lg:gap-3 sm:gap-5">
            <span className="dm-sans  text-[16px] sm:text-[24px] leading-[100%] px-4 md:px-4 lg:px-5 py-3 md:py-4 lg:py-5">
              Get a Quote
            </span>
            <span className=" text-[40px] md:text-[24px] lg:text-[40px] p-2 md:p-2 my-auto">
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
