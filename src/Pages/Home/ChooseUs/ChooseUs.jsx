import Container from "../../../Components/Ui/Container/Container";
import img1 from "../../../assets/Chooseicn1.png";
import img2 from "../../../assets/Chooseicn2.png";
import img3 from "../../../assets/Chooseicn3.png";

const ChooseUs = () => {
  return (
    <Container>
      <div className="md:pt-[74px] pb-10 text-center">
        <h1 className="">
          WHY <span className="text-[#F60]">CHOOSE</span> US
        </h1>
        <p className="mont text-[#747272] text-[16px] md:text-[16px] mt-4 mb-10 mx-auto w-full max-w-[600px]">
          Discover why businesses trust us for innovative solutions that drive
          real, lasting success.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-5 justify-center pb-10 sm:pb-16 md:pb-0">
        <div className="md:w-[328px] w-full h-fit bg-[rgba(96,76,195,0.3)] border border-[#A9D6FF] rounded-[10px] md:mb-[74px]">
          {/* Icon and title */}
          <div className="flex justify-center gap-[15px] px-5 md:px-[50px] py-5 md:py-[30px] items-center  rounded-t-[10px] ">
            <div className="flex w-[72px] h-[72px] justify-center items-center [23px_20px_22.647px_20px] rounded-[200px] bg-white">
              <img src={img1} alt="" />
            </div>
            <div className="mont-bold text-[16px] font-bold leading-[24px] tracking-[0.1px]">
              Eye-Catchy Designs
            </div>
          </div>

          {/* Card Content */}
          <div className="p-6 rounded-t-[10px] h-full  bg-white space-y-3">
            <ul className="text-[#747272] text-[14px] font-semibold leading-[24px] space-y-1 mb-5">
              <li>- Unique, custom layouts that capture attention.</li>
              <li>- Engaging visuals that enhance user experience.</li>
              <li>- Seamless blend of design and functionality.</li>
              <li>- Brand-aligned aesthetics for a strong identity.</li>
              <li>- User-friendly designs that encourage interaction.</li>
            </ul>
           
          </div>
        </div>
        <div className="md:w-[328px] w-full h-fit bg-[rgba(96,76,195,0.3)] border border-[#A9D6FF] rounded-[10px] md:mb-[74px]">
          {/* Icon and title */}
          <div className="flex justify-center gap-[15px] px-5 md:px-[50px] py-5 md:py-[30px] items-center  rounded-t-[10px] ">
            <div className="flex w-[72px] h-[72px] justify-center items-center p-[20px] rounded-full bg-white">
              <img src={img2} alt="" />
            </div>
            <div className="mont-bold text-[16px] font-bold leading-[24px] tracking-[0.1px]">
              Responsive Websites
            </div>
          </div>

          {/* Card Content */}
          <div className="p-6 rounded-t-[10px] h-full bg-white space-y-3">
            <ul className="text-[#747272] text-[14px] font-semibold leading-[24px] space-y-1 mb-5">
              <li>- Fully optimized for mobile, tablet, and desktop.</li>
              <li>- Fluid layouts that adjust to all screen sizes.</li>
              <li>- Fast loading times on all devices.</li>
              <li>- Consistent performance across different browsers.</li>
              <li>- Ensures a smooth user experience on any device.</li>
            </ul>
           
          </div>
        </div>
        <div className="md:w-[328px] w-full h-fit bg-[rgba(96,76,195,0.3)] border border-[#A9D6FF] rounded-[10px] md:mb-[74px]">
          {/* Icon and title */}
          <div className="flex justify-center gap-[15px] px-5 md:px-[50px] py-5 md:py-[30px] items-center  rounded-t-[10px] ">
            <div className="flex w-[72px] h-[72px] justify-center items-center p-[20px] rounded-full bg-white">
              <img src={img3} alt="" />
            </div>
            <div className="mont-bold text-[16px] font-bold leading-[24px] tracking-[0.1px]">
              SEO-Optimized Solutions
            </div>
          </div>

          {/* Card Content */}
          <div className="p-6 rounded-t-[10px] h-full bg-white space-y-3">
            <ul className="text-[#747272] text-[14px] font-semibold leading-[24px] space-y-1 mb-5">
              <li>- Clean, optimized code for better search engine ranking.</li>
              <li>- Mobile-first designs to boost SEO performance.</li>
              <li>- Fast page speeds for higher search rankings.</li>
              <li>- SEO-friendly content structure for improved visibility.</li>
              <li>- Integration of SEO tools for ongoing optimization.</li>
            </ul>
           
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ChooseUs;
