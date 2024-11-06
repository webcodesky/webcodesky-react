import "./WhyChooseUs.css";
import Container from "../../../Components/Ui/Container/Container";
import deadlineIcon from "../../../assets/icon/deadline.svg";
import dotRectIcon from "../../../assets/icon/dot-rect.svg";

const WhyChooseUs = ({ serviceDetails }) => {
  const services = (serviceDetails && serviceDetails[0]) || {};

  const whyChooseUsData = services.whyChooseUs || [];
  // console.log(whyChooseUsData);
  return (
    <div className="relative">
      <img
        className="hidden md:inline-block absolute top-[20%] left-0"
        src={dotRectIcon}
        alt="dot rect"
      />
      <Container>
        <div className="md:py-20 py-5 flex flex-col items-center">
          <div className="flex flex-col items-center max-w-[685.605px]">
            <p className="poppins font-bold text-[13px] uppercase text-[#F64B4B]">
              Why choose us
            </p>
            <h1 className="poppins font-bold text-[36px] text-center">
              People choose us because we serve the best for everyone
            </h1>
          </div>
          {/* why choose box start */}
          <div className="grid md:grid-cols-2 grid-col-1 md:gap-12 gap-4 md:px-28 pt-[92px] pb-[88px] border-b-[1px] border-[#D8D8D8] stoke-[#E7E9ED]">
            {whyChooseUsData.map((item, index) => (
              <div
                key={index}
                className="icon-box flex flex-row md:gap-9 gap-3"
              >
                <div className="icon-setion w-[30%]">
                  <img className="w-full" src={deadlineIcon} alt={item.title} />
                </div>
                <div className="icon-box-content w-[70%]">
                  <div className="title poppins font-bold text-[22px] pb-2">
                    {item.title}
                  </div>
                  <div className="description poppins font-normal text-[18px]">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* why chose box end */}
          <div className="whychooseusCTA flex md:flex-row flex-col md:justify-between items-center w-full md:py-12 py-4">
            <div className="content">
              <h2 className="poppins font-bold text-[32px] pb-2 leading-none">
                Ready to launch your next project?
              </h2>
              <p className="poppins font-normal text-[18px]">
                With lots of unique blocks, you can easily build a page without
                coding. Build your next landing page.
              </p>
            </div>
            <div className="actionBtn pt-5">
              <button className="bg-[#FF6600] text-white px-4 py-1 font-normal leading-[32px] tracking-[-0.6px] rounded-[8px]">
                Get started a project
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
