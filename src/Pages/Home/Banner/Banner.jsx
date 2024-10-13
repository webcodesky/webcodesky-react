import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import BannerProject from "../BannerProject/BannerProject";

const Banner = () => {
  return (
    <div className="relative bg-[#FFFFFF]">
      <div className="container mx-auto min-h-screen px-4 sm:px-6 lg:px-8">
        <p className="text-[18px] font-medium  pt-[140px]">
          We Build YourDream Website
        </p>
        <span className="dm-sans-b font-bold text-[40px] md:text-[190px] tracking-[-4%]">
          Web <span className="text-[#FF6600]">Code</span> Sky
        </span>
        <p className="md:ps-[72px] pt-[30px] md:w-[638px] leading-5 tracking-[0.2px]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
        <div className="flex justify-center">
          <button className="flex justify-center mt-[30px] border-[1px] rounded-[50px] hover:bg-[#FF6600] gap-5">
            <span className="dm-sans text-black hover:text-white text-[24px] leading-[100%] px-[25px] py-[27px]">
              Get a Quote
            </span>
            <span className="text-white text-[48px] p-3 my-auto">
              <BsFillArrowUpRightCircleFill />
            </span>
          </button>
        </div>
      </div>
      <div className="-mt-[80px] pb-[30px]">
        <BannerProject />
      </div>
    </div>
  );
};

export default Banner;
