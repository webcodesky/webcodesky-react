import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import img3 from "../../../assets/popularCard/react-service.png";

const ServiceDetailsBanner = ({ serviceDetails }) => {
  const service = (serviceDetails && serviceDetails[0]) || {};
  //   console.log(service.title);
  return (
    <div className="relative bg-[#FFFFFF] md:pt-[120px] pt-[90px] pb-[0px]">
      <div className="container mx-auto sm:px-6 lg:px-8 items-center ">
        <h1 className="font-bold text-[28px] text-center md:text-[96px] md:tracking-[-4%] md:leading-[100%] ">
          {service.serviceTitle}
          <span className="text-[#FF6600] ">Development</span>
        </h1>
        <p className="md:px-36 pt-[30px] leading-5 tracking-[0.2px] text-justify">
          {service.keyDescription}
        </p>
        <div className="flex justify-center md:gap-5 gap-2 md:flex-row flex-col">
          <button className="flex items-center justify-center mt-[30px] border-[1px] rounded-[50px] hover:bg-[#FF6600] md:gap-5 gap-2">
            <span className="dm-sans text-black hover:text-white text-[24px] leading-[100%] md:px-[25px] md:py-[27px]">
              Get a Quote
            </span>
            <span className="text-[#FF6600] hover:text-black text-[48px] p-3 my-auto">
              <BsFillArrowUpRightCircleFill />
            </span>
          </button>
          <button className="flex justify-center md:mt-[30px] mt-[10px] border-[1px] border-[#f5f5f5] rounded-[50px] md:gap-5">
            <span className="dm-sans text-black hover:text-white text-[24px] leading-[100%] px-[25px] py-[27px]">
              Contact Us
            </span>
          </button>
        </div>
        <div className="my-10 relative flex flex-col items-center">
          <img src={img3} alt="react" srcset="" />
          <div className="py-[5px] md:py-[15px] pl-[15px] md:pr-[35px] pr-[15px] bg-[#fff] rounded-lg shadow-lg absolute top-[-40px] right-[-30px]">
            <p>1000,000 Happy Clients</p>
            <p>⭐ 4.9 (15k Reviews)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsBanner;
