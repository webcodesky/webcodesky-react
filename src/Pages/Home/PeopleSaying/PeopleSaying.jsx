import { useRef } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import PeopleComments from "./PeopleComments";
import Container1 from "../../../Components/Ui/Container/Container1";

const PeopleSaying = () => {
  // Ref to control the Swiper instance in PeopleComments
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="bg-[#FFF6EA]">
      <div className="max-w-[1560px] items-center mx-auto">
        <Container1>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[80px] pt-[60px] lg:pt-[120px] pb-[40px] lg:pb-[82px]">
            <div className="flex-[1] max-w-[415px]">
              <h1>
                What Are People <br />
                Saying
                <span className="text-[#FF6600]"> About Us</span>
              </h1>
              <p className="mont pt-6 lg:pt-[30px] text-[16px] md:text-[16px] pb-6 lg:pb-[32px] text-[#747272]">
                With expertise in the latest web technologies, we go beyond
                development, working as your team’s extension to ensure each
                project aligns with your goals and drives success.
              </p>
              <div className="flex gap-4 pt-6">
                <button
                  onClick={handlePrev}
                  className="w-12 h-12 lg:w-[56px] lg:h-[56px] text-white flex items-center justify-center rounded-lg bg-[rgba(255,102,0,0.5)]"
                >
                  <FaArrowLeft />
                </button>
                <button
                  onClick={handleNext}
                  className="w-12 h-12 lg:w-[56px] lg:h-[56px] text-white flex items-center justify-center rounded-lg bg-[#F60]"
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>
            <div className="flex-[2] overflow-hidden">
              <PeopleComments ref={swiperRef} />
            </div>
          </div>
        </Container1>
      </div>
    </div>
  );
};

export default PeopleSaying;
