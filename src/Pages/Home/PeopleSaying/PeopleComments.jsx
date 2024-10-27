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
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
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
                Selena Gomz
              </h2>
              <p className="text-[#575757] text-[14px] font-medium leading-[150%]">
                22 Years
              </p>
              <p className="text-[#575757] text-[16px] font-normal leading-[150%] tracking-[-0.32px] pb-5 md:pb-0">
                The salad is fresh!!! Do not ask about the sauce again, it is
                really delicious, it is going to be routine. I recommend this
                salad to all of you guys! because they really take care of the
                quality.
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
                Jennifer Sina
              </h2>
              <p className="text-[#575757] text-[14px] font-medium leading-[150%]">
                21 Years
              </p>
              <p className="text-[#575757] text-[16px] font-normal leading-[150%] tracking-[-0.32px] pb-5 md:pb-0">
                The salad is fresh!!! Do not ask about the sauce again, it is
                really delicious, it is going to be routine. I recommend this
                salad to all of you guys! because they really take care of the
                quality.
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
                David Ken
              </h2>
              <p className="text-[#575757] text-[14px] font-medium leading-[150%]">
                24 Years
              </p>
              <p className="text-[#575757] text-[16px] font-normal leading-[150%] tracking-[-0.32px] pb-5 md:pb-0">
                The salad is fresh!!! Do not ask about the sauce again, it is
                really delicious, it is going to be routine. I recommend this
                salad to all of you guys! because they really take care of the
                quality.
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
                Selena Gomz
              </h2>
              <p className="text-[#575757] text-[14px] font-medium leading-[150%]">
                22 Years
              </p>
              <p className="text-[#575757] text-[16px] font-normal leading-[150%] tracking-[-0.32px] pb-5 md:pb-0">
                The salad is fresh!!! Do not ask about the sauce again, it is
                really delicious, it is going to be routine. I recommend this
                salad to all of you guys! because they really take care of the
                quality.
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
                Jennifer Sina
              </h2>
              <p className="text-[#575757] text-[14px] font-medium leading-[150%]">
                21 Years
              </p>
              <p className="text-[#575757] text-[16px] font-normal leading-[150%] tracking-[-0.32px] pb-5 md:pb-0">
                The salad is fresh!!! Do not ask about the sauce again, it is
                really delicious, it is going to be routine. I recommend this
                salad to all of you guys! because they really take care of the
                quality.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PeopleComments;
