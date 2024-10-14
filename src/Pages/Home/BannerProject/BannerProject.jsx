// import img1 from '../../../assets/bannerImage/b1.png'
// import img2 from '../../../assets/bannerImage/b2.png'
import img3 from "../../../assets/bannerImage/b3.png";
import img4 from "../../../assets/bannerImage/b4.png";
import img5 from "../../../assets/bannerImage/b5.png";
import img6 from "../../../assets/bannerImage/b6.png";
import img7 from "../../../assets/bannerImage/b7.png";
import img8 from "../../../assets/bannerImage/b8.png";
import img9 from "../../../assets/bannerImage/b9.png";
import img10 from "../../../assets/bannerImage/b10.png";
import img11 from "../../../assets/bannerImage/b11.png";
import img12 from "../../../assets/bannerImage/b12.png";
// import img13 from "../../../assets/bannerImage/b13.png";
// import img14 from "../../../assets/bannerImage/b14.png";

const BannerProject = () => {
  return (
    <div className="relative max-sm:pt-[1350px]">
      <div className="container mx-auto ">
        <div className="relative flex flex-wrap justify-center mx-auto gap-4 ">
          <div className="flex flex-col gap-4">
            <div className="md:h-[297px] md:w-[236px] rounded-xl ">
              <img src={img3} alt="" />
            </div>
            <div className="md:h-[297px] md:w-[236px] rounded-xl ">
              <img src={img4} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-4 md:mt-[80px]">
            <div className="md:h-[297px] md:w-[236px] rounded-xl ">
              <img src={img5} alt="" />
            </div>
            <div className="md:h-[297px] md:w-[236px] rounded-xl ">
              <img src={img6} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-4 md:mt-[230px]">
            <div className="md:h-[297px] md:w-[236px] rounded-xl ">
              <img src={img7} alt="" />
            </div>
            <div className="md:h-[297px] md:w-[236px] rounded-xl ">
              <img src={img8} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-4 md:mt-[80px]">
            <div className="md:h-[297px] md:w-[236px] rounded-xl ">
              <img src={img9} alt="" />
            </div>
            <div className="md:h-[297px] md:w-[236px] rounded-xl ">
              <img src={img10} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="md:h-[297px] md:w-[236px] rounded-xl ">
              <img src={img11} alt="" />
            </div>
            <div className="md:h-[297px] md:w-[236px] rounded-xl ">
              <img src={img12} alt="" />
            </div>
          </div>
          <div className="absolute -top-[1300px] md:-top-[160px] md:-left-[110px] flex flex-col gap-4 md:gap-0">
            <div className="md:h-[297px] md:w-[236px] w-full rounded-xl">
              <img src={img4} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="md:h-[297px] md:w-[236px] w-full rounded-xl">
              <img src={img11} alt="" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="absolute -top-[650px] md:-top-[160px] md:-right-[110px] flex flex-col gap-4 md:gap-0">
            <div className="md:h-[297px] md:w-[236px] w-full rounded-xl">
              <img src={img3} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="md:h-[297px] md:w-[236px] w-full rounded-xl">
              <img src={img11} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerProject;
