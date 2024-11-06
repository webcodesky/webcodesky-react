import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import img3 from "../../../assets/popularCard/react-service.png";
import { Link } from "react-router-dom";

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
        <div className="flex justify-center md:gap-5 gap-2 md:flex-row flex-col text-white hover:text-black">
          <Link to="/getquote">
            <button className="flex justify-center hover:bg-black text-white items-center mt-6 sm:mt-8 border-[1px] rounded-full bg-[#FF6600] md:gap-2 lg:gap-3 sm:gap-5">
              <span className="dm-sans  text-[16px] sm:text-[24px] leading-[100%] px-4 md:px-4 lg:px-5 py-3 md:py-4 lg:py-5">
                Get a Quote
              </span>
              <span className=" text-[40px] md:text-[24px] lg:text-[40px] p-2 md:p-2 my-auto">
                <BsFillArrowUpRightCircleFill />
              </span>
            </button>
            <button className="flex justify-center hover:border-[#FF6600] md:mt-[30px] mt-[10px] border-[2px] border-[#f5f5f5] rounded-[50px] md:gap-5">
              <span className="dm-sans text-black text-[24px] leading-[100%] px-[25px] py-[27px]">
                Contact Us
              </span>
            </button>
          </Link>
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
