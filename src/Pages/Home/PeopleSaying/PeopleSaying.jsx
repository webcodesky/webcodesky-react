import { FaArrowRight } from "react-icons/fa";
import Container from "../../../Components/Ui/Container/Container";
import { FaArrowLeft } from "react-icons/fa6";
import PeopleComments from "./PeopleComments";

const PeopleSaying = () => {
  return (
    <div className="bg-[#FFF6EA]">
      <Container>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[80px] pt-[60px] lg:pt-[120px] pb-[40px] lg:pb-[82px]">
          <div className="flex-[1]">
            <h1 className="text-2xl lg:text-4xl font-bold">
              What Are People Saying
              <span className="text-[#FF6600]"> About Us</span>
            </h1>
            <p className="mont pt-6 lg:pt-[30px] pb-6 lg:pb-[32px] text-[#CCCCCC]">
              We are very happy if you are satisfied with our service and products, let's read pure reviews from customers who bought our products.
            </p>
            <p>
              <span className="text-4xl lg:text-[48px] font-bold leading-tight">02</span>
              <span className="text-[#CCCCCC]"> / 05</span>
            </p>
            <div className="flex gap-4 pt-6">
              <button className="w-12 h-12 lg:w-[56px] lg:h-[56px] text-white flex items-center justify-center rounded-lg bg-[rgba(255,102,0,0.5)]">
                <FaArrowLeft />
              </button>
              <button className="w-12 h-12 lg:w-[56px] lg:h-[56px] text-white flex items-center justify-center rounded-lg bg-[#F60]">
                <FaArrowRight />
              </button>
            </div>
          </div>
          <div className="flex-[2] overflow-hidden">
            <PeopleComments />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PeopleSaying;