import React from 'react';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';
import img3 from "../../../assets/popularCard/react-service.png";

const ServiceDetailsBanner = () => {
    return (
        <div className="relative bg-[#FFFFFF] pt-[168px] pb-[0px]">
            <div className="container mx-auto min-h-screen px-4 sm:px-6 lg:px-8 items-center ">
                <h1 className="dm-sans-b font-bold text-[40px] text-center md:text-[96px] tracking-[-4%]">
                React <span className="text-[#FF6600]">Development</span></h1>
                <p className="md:ps-[72px] pt-[30px] leading-5 tracking-[0.2px] text-center">
                We’ll Design your website with ReactJs, Super Fast , Responsive</p>
                <div className="flex justify-center gap-5">
                    <button className="flex justify-center mt-[30px] border-[1px] rounded-[50px] hover:bg-[#FF6600] gap-5">
                        <span className="dm-sans text-black hover:text-white text-[24px] leading-[100%] px-[25px] py-[27px]">
                        Get a Quote
                        </span>
                        <span className="text-[#FF6600] hover:text-black text-[48px] p-3 my-auto">
                        <BsFillArrowUpRightCircleFill />
                        </span>
                    </button>
                    <button className="flex justify-center mt-[30px] border-[1px] border-[#f5f5f5] rounded-[50px] gap-5">
                        <span className="dm-sans text-black hover:text-white text-[24px] leading-[100%] px-[25px] py-[27px]">
                        Contact Us
                        </span>
                    </button>
                </div>
                <div className='my-10 relative flex flex-col items-center'>
                    <img src={img3} alt="react" srcset="" />
                    <div className='py-[15px] pl-[15px] pr-[35px] bg-[#fff] rounded-lg shadow-lg absolute top-[-40px] right-[200px]'>
                        <p>1000,000 Happy Clients</p>
                        <p>⭐ 4.9 (15k Reviews)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsBanner;