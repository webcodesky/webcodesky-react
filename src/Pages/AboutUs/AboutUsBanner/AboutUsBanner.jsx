import { MdCallMade } from "react-icons/md";
import Container from "../../../Components/Ui/Container/Container";

const AboutUsBanner = () => {
  return (
    <div className="md:pt-[203px] bg-[#F5F5F5]">
      <Container>
        <div className="flex md:gap-[100px]">
          <div>
            <h2 className="text-[#737373] text-[20px] font-[700] leading-[20px] tracking-[0.2px]">
              Who we Are?
            </h2>
            <h1 className="text-[#000] text-[64px] font-[700] leading-normal tracking-[-2.56px] text-left md:py-[30px]">
              Growing <span className="text-[#F60]">Web Agency</span>
            </h1>
            <p className="text-[#737373] text-[20px] font-[500] leading-[20px] tracking-[0.2px] w-[584px] md:pb-[60px]">
              Provide Top-noch Web solution over the world.Provide Top-noch Web
              solution over the world.
            </p>
            <div className="flex items-center md:gap-[26px] md:pb-[141px]">
              <div>
                <button className="w-[232px] h-[71px] flex-shrink-0 rounded-[50px] border-[0.5px] border-[#D3D4D5] bg-[#F60] text-white text-[24px] font-normal leading-[100%] flex justify-center items-center gap-4">
                  <p>Get a Quote</p>
                  <p className="w-[48px] h-[48px] flex-shrink-0 rounded-[35px] bg-white flex justify-center items-center text-[#F60]">
                    <MdCallMade />
                  </p>
                </button>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="60"
                  viewBox="0 0 48 60"
                  fill="none"
                >
                  <path
                    d="M30 13C39.9208 13 48 20.8509 48 30.5101C48 40.1491 39.9208 48 30 48C20.0792 48 12 40.1491 12 30.5101C12 20.8509 20.0792 13 30 13ZM27.9498 23.5523C27.5676 23.5523 27.2027 23.6368 26.8552 23.8056C26.4208 24.042 26.0734 24.4134 25.8822 24.8524C25.7606 25.1563 25.5695 26.068 25.5695 26.0849C25.3784 27.081 25.2741 28.7019 25.2741 30.4916C25.2741 32.1985 25.3784 33.7501 25.5347 34.7631C25.5521 34.78 25.7432 35.9112 25.9517 36.2996C26.334 37.0087 27.0811 37.4477 27.8803 37.4477H27.9498C28.471 37.4308 29.5656 36.9918 29.5656 36.9749C31.4073 36.232 35.0386 33.919 36.4981 32.3825L36.6023 32.2812C36.7934 32.0955 37.0367 31.8085 37.0888 31.741C37.3668 31.3864 37.5058 30.9474 37.5058 30.5101C37.5058 30.0188 37.3494 29.563 37.0541 29.1915C36.9846 29.124 36.7239 28.837 36.4807 28.6006C35.056 27.1148 31.3378 24.6836 29.3919 23.9407C29.0965 23.8242 28.3494 23.5692 27.9498 23.5523Z"
                    fill="#5F6064"
                  />
                  <path
                    d="M30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60V56C15.6406 56 4 44.3594 4 30C4 15.6406 15.6406 4 30 4V0Z"
                    fill="#FF6600"
                  />
                </svg>
                <span className="text-black text-[18px] font-semibold leading-[28.5px]">
                  Learn More
                </span>
              </div>
            </div>
          </div>
          {/* Video Section */}
          <div className="relative flex-1">
            <iframe
              width="501px"
              height="346px"
              src="https://www.youtube.com/embed?v=llxa64il1-8&list=RDKSVF1jpHXpI"
              title="Youtube Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-[10px]"
            ></iframe>
            {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-flex p-[34.8px] px-[36.8px] items-center  bg-[#F60] rounded-full">
              v
            </div> */}
            <div className="absolute -top-[30px] -left-16 bg-white p-2 rounded-md shadow-md">
              <span className="text-gray-600 text-sm">
                1,000,000 Happy Clients
              </span>
              <br />
              <span className="text-yellow-500 font-bold">4.9</span> (15k
              Reviews)
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUsBanner;
