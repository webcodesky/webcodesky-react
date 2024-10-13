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
// import img13 from '../../../assets/bannerImage/b13.png'
// import img14 from '../../../assets/bannerImage/b14.png'

const BannerProject = () => {
  return (
    <div className="relative">
      <div className="container mx-auto ">
        <div className="relative flex justify-center mx-auto gap-4 ">
          <div className="flex flex-col gap-4">
            <div className="h-[297px] w-[236px] rounded-xl ">
              <img src={img3} alt="" />
            </div>
            <div className="h-[297px] w-[236px] rounded-xl ">
              <img src={img4} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-[80px]">
          <div className="h-[297px] w-[236px] rounded-xl ">
              <img src={img5} alt="" />
            </div>
            <div className="h-[297px] w-[236px] rounded-xl ">
              <img src={img6} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-[230px]">
          <div className="h-[297px] w-[236px] rounded-xl ">
              <img src={img7} alt="" />
            </div>
            <div className="h-[297px] w-[236px] rounded-xl ">
              <img src={img8} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-[80px]">
          <div className="h-[297px] w-[236px] rounded-xl ">
              <img src={img9} alt="" />
            </div>
            <div className="h-[297px] w-[236px] rounded-xl ">
              <img src={img10} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
          <div className="h-[297px] w-[236px] rounded-xl ">
              <img src={img11} alt="" />
            </div>
            <div className="h-[297px] w-[236px] rounded-xl ">
              <img src={img12} alt="" />
            </div>
          </div>
          {/* <div className=" absolute -top-[320px] -left-[235px] flex flex-col gap-4">
              <div className="bg-red-500 h-[297px] w-[236px] rounded-xl "></div>
              <div className="bg-red-300 h-[297px] w-[236px] rounded-xl"></div>
            </div>
            <div className=" absolute -top-[320px] -right-[235px] flex flex-col gap-4 ">
              <div className="bg-red-500 h-[297px] w-[236px] rounded-xl "></div>
              <div className="bg-red-300 h-[297px] w-[236px] rounded-xl"></div>
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default BannerProject;
