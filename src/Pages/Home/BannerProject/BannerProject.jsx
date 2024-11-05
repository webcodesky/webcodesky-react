import "./BannerProject.css";

const BannerProject = () => {
  return (
    <div className="relative max-sm:pt-[25px] md:pt-[10px]">
      <div className="container mx-auto px-4">
        <div className="relative flex flex-wrap justify-center gap-4">
          {/* Always visible (initial 4 cards on mobile) */}
          <div className="flex flex-col gap-4">
            <div className="box box1 h-[380px] w-[270px] md:h-[180px] lg:h-[250px] md:w-[123px] lg:w-[194px] 2xl:h-[297px] 2xl:w-[232px] rounded-xl"></div>
            <div className="box box2 h-[380px] w-[270px] md:h-[180px] lg:h-[250px] md:w-[123px] lg:w-[194px] 2xl:h-[297px] 2xl:w-[232px] rounded-xl"></div>
          </div>

          <div className="flex flex-col gap-4 md:mt-[80px]">
            <div className="box box3 h-[380px] w-[270px] md:h-[180px] lg:h-[250px] md:w-[123px] lg:w-[194px] 2xl:h-[297px] 2xl:w-[232px] rounded-xl"></div>
            <div className="box box4 h-[380px] w-[270px] md:h-[180px] lg:h-[250px] md:w-[123px] lg:w-[194px] 2xl:h-[297px] 2xl:w-[232px] rounded-xl"></div>
          </div>

          {/* Conditionally visible on mobile when "Show All" is clicked */}
          <div className="flex flex-col gap-4 md:mt-[230px]">
            <div className="box box5 h-[380px] w-[270px] md:h-[180px] lg:h-[250px] md:w-[123px] lg:w-[194px] 2xl:h-[297px] 2xl:w-[232px] rounded-xl"></div>
            <div className="box box6 h-[380px] w-[270px] md:h-[180px] lg:h-[250px] md:w-[123px] lg:w-[194px] 2xl:h-[297px] 2xl:w-[232px] rounded-xl"></div>
          </div>

          <div className="flex flex-col gap-4 md:mt-[80px]">
            <div className="box box7 h-[380px] w-[270px] md:h-[180px] lg:h-[250px] md:w-[123px] lg:w-[194px] 2xl:h-[297px] 2xl:w-[232px] rounded-xl"></div>
            <div className="box box8 h-[380px] w-[270px] md:h-[180px] lg:h-[250px] md:w-[123px] lg:w-[194px] 2xl:h-[297px] 2xl:w-[232px] rounded-xl"></div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="box box9 h-[380px] w-[270px] md:h-[180px] lg:h-[250px] md:w-[123px] lg:w-[194px] 2xl:h-[297px] 2xl:w-[232px] rounded-xl"></div>
            <div className="box box10 h-[380px] w-[270px] md:h-[180px] lg:h-[250px] md:w-[123px] lg:w-[194px] 2xl:h-[297px] 2xl:w-[232px] rounded-xl"></div>
          </div>

          {/* Absolute positioned images for larger devices */}
          <div className="absolute -top-[1300px] md:-top-[160px] md:-left-[110px] hidden lg:flex flex-col gap-4">
            <div className="box box11 md:h-[180px] lg:h-[250px] md:w-[123px] lg:w-[194px] 2xl:h-[297px] 2xl:w-[232px] w-full rounded-xl">
              {/* <img src={img4} alt="" className="w-full h-full object-cover" /> */}
            </div>
            <div className="box box12 md:h-[180px] lg:h-[250px] md:w-[123px] lg:w-[194px] 2xl:h-[297px] 2xl:w-[232px] w-full rounded-xl">
              {/* <img src={img11} alt="" className="w-full h-full object-cover" /> */}
            </div>
          </div>

          <div className="absolute -top-[650px] md:-top-[160px] md:-right-[110px] hidden lg:flex flex-col gap-4">
            <div className="box box13 md:h-[180px] lg:h-[250px] md:w-[123px] lg:w-[194px] 2xl:h-[297px] 2xl:w-[232px] w-full rounded-xl">
              {/* <img src={img3} alt="" className="w-full h-full object-cover" /> */}
            </div>
            <div className="box box14 md:h-[180px] lg:h-[250px] md:w-[123px] lg:w-[194px] 2xl:h-[297px] 2xl:w-[232px] w-full rounded-xl">
              {/* <img src={img11} alt="" className="w-full h-full object-cover" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerProject;
