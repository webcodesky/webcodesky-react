import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import BannerProject from "../BannerProject/BannerProject";

const Banner = () => {
  return (
    <div className="relative bg-[#FFFFFF] flex flex-col justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[12px] md:text-[18px] font-medium pt-[80px] md:pt-[140px] text-left md:pl-28">
        A complete Digital Solutions For Your Business
        </p>
        <span className="dm-sans-b font-bold text-[35px] md:text-[145px] 2xl:text-[190px] tracking-[-4%]">
          Web <span className="text-[#FF6600]">Code</span> Sky
        </span>
        <p className="text-[10px] font-medium md:text-[20px] tracking-[0.2px] text-left  md:pl-36 w-[80%] md:w-[650px] 2xl:w-[700px]  text-[#737373] font-montserrat md:leading-[20px]">
        We turn ideas into exceptional digital solutions. As a growing web development startup, we specialize in building high-performance websites and applications designed to elevate your business.
        </p>

        <div className="flex justify-center">
          <button className="flex justify-center items-center mt-6 sm:mt-8 border-[1px] rounded-full bg-[#FF6600] gap-3 sm:gap-5">
            <span className="dm-sans text-black hover:text-white text-[16px] sm:text-[24px] leading-[100%] px-4 md:py-2 2xl:py-2 sm:px-[25px] sm:py-[27px]">
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
