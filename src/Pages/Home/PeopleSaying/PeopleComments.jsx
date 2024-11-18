import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import img1 from "../../../assets/peopleComments/Container1.png";
import img2 from "../../../assets/peopleComments/Container2.png";
import img3 from "../../../assets/peopleComments/Container3.png";
import { FaRegStar, FaStar } from "react-icons/fa";
import { forwardRef, useRef, useImperativeHandle } from "react";

// eslint-disable-next-line react/display-name
const PeopleComments = forwardRef((_, ref) => {
  const testimonials = [
    {
      img: img1,
      name: "Sarah Johnson",
      location: "United States",
      message:
        "Webcodesky exceeded our expectations! They transformed our website into a user-friendly, stunning platform. The team’s dedication and expertise truly shined.",
      rating: 4,
    },
    {
      img: img2,
      name: "Michael Lee",
      location: "Australia",
      message:
        "Working with Webcodesky was a fantastic experience. Their creative solutions and attention to detail helped us boost our online presence tremendously.",
      rating: 5,
    },
    {
      img: img3,
      name: "Emily Carter",
      location: "United Kingdom",
      message:
        "From the first meeting to the final delivery, Webcodesky provided exceptional service. They built a site that not only looks great but performs perfectly.",
      rating: 4,
    },
    // Add more objects for each testimonial as needed
  ];

  const swiperInstance = useRef(null);

  // Expose the Swiper navigation methods to the parent component
  useImperativeHandle(ref, () => ({
    slideNext: () => swiperInstance.current?.slideNext(),
    slidePrev: () => swiperInstance.current?.slidePrev(),
  }));

  return (
    <div>
      <Swiper
        onSwiper={(swiper) => (swiperInstance.current = swiper)}
        slidesPerView={1}
        spaceBetween={0}
        breakpoints={{
          320: { slidesPerView: 1.5, spaceBetween: 10 },
          640: { slidesPerView: 2.5, spaceBetween: 20 },
          768: { slidesPerView: 2.5, spaceBetween: 20 },
          1024: { slidesPerView: 2.5, spaceBetween: 20 },
          1536: { slidesPerView: 3, spaceBetween: 20 },
        }}
        centeredSlides={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={1000} // Set transition speed in milliseconds
        loop={true}
        modules={[Pagination, Autoplay]}
        ref={ref}
        className="mySwiper"
      >
        {/* Swiper Slides */}
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img
                className="w-[90px] h-[90px] absolute -top-[50px] left-[24px]"
                src={testimonial.img}
                alt=""
              />
              <div className="md:w-[269px] md:h-[402px] flex-shrink-0 rounded-[8px] bg-[#FFF] p-6 mt-20 space-y-2">
                <div className="flex pt-[45px] pb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#8FD14F]">
                      <FaStar />
                    </span>
                  ))}
                  {[...Array(5 - testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#8FD14F]">
                      <FaRegStar />
                    </span>
                  ))}
                </div>
                <h1 className="text-[#2B2B2B] text-[20px] font-medium leading-[31.992px]">
                  {testimonial.name}
                </h1>
                <p className="text-[#575757] text-[14px] font-medium leading-[150%]">
                  {testimonial.location}
                </p>
                <p className="text-[#575757] text-[16px] md:text-[16px] lg:text-[18px] font-normal leading-[150%] tracking-[-0.32px] pb-5 md:pb-0">
                  {testimonial.message}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
});

export default PeopleComments;
