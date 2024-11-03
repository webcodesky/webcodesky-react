import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import img1 from "../../../assets/peopleComments/Container1.png";
import img2 from "../../../assets/peopleComments/Container2.png";
import img3 from "../../../assets/peopleComments/Container3.png";
import { FaRegStar, FaStar } from "react-icons/fa";

const PeopleComments = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          1536: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 500, // You can adjust the delay for autoplay
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-[90px] h-[90px] absolute -top-[50px] left-[24px]"
              src={img1}
              alt=""
            />
            <div className=" md:w-[269px] md:h-[402px] flex-shrink-0 rounded-[8px] bg-[#FFF] p-6 mt-20 space-y-2">
              <div className="flex pt-[45px] pb-6">
                <span className="text-[#8FD14F]">
                  <FaStar />
                </span>
                <span className="text-[#8FD14F]">
                  <FaStar />
                </span>
                <span className="text-[#8FD14F]">
                  <FaStar />
                </span>
                <span className="text-[#8FD14F]">
                  <FaStar />
                </span>
                <span className="text-[#8FD14F]">
                  <FaRegStar />
                </span>
              </div>
              <h2 className="text-[#2B2B2B] text-[20px] font-medium leading-[31.992px]">
                Sarah Johnson
              </h2>
              <p className="text-[#575757] text-[14px] font-medium leading-[150%]">
                United States
              </p>
              <p className="text-[#575757] text-[16px] md:text-[16px] lg:text-[18px] font-normal leading-[150%] tracking-[-0.32px] pb-5 md:pb-0">
                "Webcodesky exceeded our expectations! They transformed our
                website into a user-friendly, stunning platform. The team’s
                dedication and expertise truly shined."
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-[90px] h-[90px] absolute -top-[50px] left-[24px]"
              src={img2}
              alt=""
            />
            <div className="md:w-[269px] md:h-[402px] flex-shrink-0 rounded-[8px] bg-[#FFF] p-6 mt-20 space-y-2">
              <div className="flex pt-[45px] pb-6">
                <span className="text-[#8FD14F]">
                  <FaStar />
                </span>
                <span className="text-[#8FD14F]">
                  <FaStar />
                </span>
                <span className="text-[#8FD14F]">
                  <FaStar />
                </span>
                <span className="text-[#8FD14F]">
                  <FaStar />
                </span>
                <span className="text-[#8FD14F]">
                  <FaRegStar />
                </span>
              </div>
              <h2 className="text-[#2B2B2B] text-[20px] font-medium leading-[31.992px]">
                Michael Lee
              </h2>
              <p className="text-[#575757] text-[14px] font-medium leading-[150%]">
                Australia
              </p>
              <p className="text-[#575757] text-[16px] md:text-[16px] lg:text-[18px] font-normal leading-[150%] tracking-[-0.32px] pb-5 md:pb-0">
                "Working with Webcodesky was a fantastic experience. Their
                creative solutions and attention to detail helped us boost our
                online presence tremendously."
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-[90px] h-[90px] absolute -top-[50px] left-[24px]"
              src={img3}
              alt=""
            />
            <div className="md:w-[269px] md:h-[402px] flex-shrink-0 rounded-[8px] bg-[#FFF] p-6 mt-20 space-y-2">
              <div className="flex pt-[45px] pb-6">
                <span className="text-[#8FD14F]">
                  <FaStar />
                </span>
                <span className="text-[#8FD14F]">
                  <FaStar />
                </span>
                <span className="text-[#8FD14F]">
                  <FaStar />
                </span>
                <span className="text-[#8FD14F]">
                  <FaStar />
                </span>
                <span className="text-[#8FD14F]">
                  <FaRegStar />
                </span>
              </div>
              <h2 className="text-[#2B2B2B] text-[20px] font-medium leading-[31.992px]">
                Emily Carter
              </h2>
              <p className="text-[#575757] text-[14px] font-medium leading-[150%]">
                United Kingdom
              </p>
              <p className="text-[#575757] text-[16px] md:text-[16px] lg:text-[18px] font-normal leading-[150%] tracking-[-0.32px] pb-5 md:pb-0">
                "From the first meeting to the final delivery, Webcodesky
                provided exceptional service. They built a site that not only
                looks great but performs perfectly."
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-[90px] h-[90px] absolute -top-[50px] left-[24px]"
              src={img1}
              alt=""
            />
            <div className="md:w-[269px] md:h-[402px] flex-shrink-0 rounded-[8px] bg-[#FFF] p-6 mt-20 space-y-2">
              <div className="flex pt-[45px] pb-6">
                <span className="text-[#8FD14F]">
                  <FaStar />
                </span>
                <span className="text-[#8FD14F]">
                  <FaStar />
                </span>
                <span className="text-[#8FD14F]">
                  <FaStar />
                </span>
                <span className="text-[#8FD14F]">
                  <FaStar />
                </span>
                <span className="text-[#8FD14F]">
                  <FaRegStar />
                </span>
              </div>
              <h2 className="text-[#2B2B2B] text-[20px] font-medium leading-[31.992px]">
                David Thompson
              </h2>
              <p className="text-[#575757] text-[14px] font-medium leading-[150%]">
                Canada
              </p>
              <p className="text-[#575757] text-[16px] md:text-[16px] lg:text-[18px] font-normal leading-[150%] tracking-[-0.32px] pb-5 md:pb-0">
                "Their expertise in web development and SEO helped drive more
                traffic and conversions. A true partner for business growth!"
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-[90px] h-[90px] absolute -top-[50px] left-[24px]"
              src={img2}
              alt=""
            />
            <div className="md:w-[269px] md:h-[402px] flex-shrink-0 rounded-[8px] bg-[#FFF] p-6 mt-20 space-y-2">
              <div className="flex pt-[45px] pb-6">
                <span className="text-[#8FD14F]">
                  <FaStar />
                </span>
                <span className="text-[#8FD14F]">
                  <FaStar />
                </span>
                <span className="text-[#8FD14F]">
                  <FaStar />
                </span>
                <span className="text-[#8FD14F]">
                  <FaStar />
                </span>
                <span className="text-[#8FD14F]">
                  <FaRegStar />
                </span>
              </div>
              <h2 className="text-[#2B2B2B] text-[20px] font-medium leading-[31.992px]">
                James Walker
              </h2>
              <p className="text-[#575757] text-[14px] font-medium leading-[150%]">
                Germany
              </p>
              <p className="text-[#575757] text-[16px] md:text-[16px] lg:text-[18px] font-normal leading-[150%] tracking-[-0.32px] pb-5 md:pb-0">
                "The Webcodesky team brought our vision to life with a stunning
                website. Their professionalism and speed were remarkable."
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PeopleComments;
