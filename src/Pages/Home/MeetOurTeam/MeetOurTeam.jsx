import { ImFacebook2 } from "react-icons/im";
import Container from "../../../Components/Ui/Container/Container";
import mahmud from "../../../assets/teamMember/Mahmudhasan.png";
import tuhin from "../../../assets/teamMember/tahmidtuhin.webp";
import shahid from "../../../assets/teamMember/shahid .png";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const MeetOurTeam = () => {
  return (
    <Container>
      <div className=" pt-5 pb-5 md:py-20">
        <h1 className="text-[#252B42] text-center">Meet Our Team</h1>
        <p className="mx-auto pt-2.5  text-center w-[250px] md:w-[430px] lg:w-[430px] md:leading-[24px]">
          Our dynamic team of creative minds, tech innovators, and strategic leaders is dedicated to transforming your ideas into groundbreaking digital solutions.
        </p>

        <div className="pt-5 md:pt-10">
          <div className=" flex flex-col md:flex-row gap-5 md:gap-[30px] justify-center items-center">
            <div className="flex flex-col items-center w-[250px] h-[370px] rounded-t-xl border border-[#EEE] bg-white p-5">
              <img
                className="rounded-t-xl w-full h-[240px] md:h-[210px] bg-slate-700"
                src={mahmud}
                alt=""
              />
              <div className="pt-5 pb-5 flex flex-col justify-center items-center">
                <h2 className="text-[#252B42] text-center text-[14px] md:text-[16px] lg:text-[16px] font-bold leading-[24px] tracking-[0.1px]">
                  Mahmud Hasan Alif
                </h2>
                <h3 className="text-[#747272] text-center text-[14px] font-semibold leading-[24px] tracking-[0.2px] py-2">
                  CO Founder
                </h3>
                <div className="flex gap-[15px] text-[#604CC3]">
                  <Link>
                    <ImFacebook2 />
                  </Link>
                  <Link>
                    <FaInstagram />
                  </Link>
                  <Link>
                    <FaTwitter />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center w-[250px] h-[370px] rounded-t-xl border border-[#EEE] bg-white p-5">
              <img
                className="rounded-t-xl w-full h-[240px] md:h-[210px] bg-slate-700"
                src={tuhin}
                alt=""
              />
              <div className="pt-5 pb-5 flex flex-col justify-center items-center">
                <h2 className="text-[#252B42] text-center text-[14px] md:text-[16px] lg:text-[16px] font-bold leading-[24px] tracking-[0.1px]">
                  Al Tahmiduzzaman Tuhin
                </h2>
                <h3 className="text-[#747272] text-center text-[14px] font-semibold leading-[24px] tracking-[0.2px] py-2">
                  CO Founder
                </h3>
                <div className="flex gap-[15px] text-[#604CC3]">
                  <Link>
                    <ImFacebook2 />
                  </Link>
                  <Link>
                    <FaInstagram />
                  </Link>
                  <Link>
                    <FaTwitter />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center w-[250px] h-[370px] rounded-t-xl border border-[#EEE] bg-white p-5 ">
              <img
                className="rounded-t-xl w-full h-[240px] md:h-[210px] bg-slate-700"
                src={shahid}
                alt=""
              />
              <div className="pt-5 pb-5 flex flex-col justify-center items-center">
                <h2 className="text-[#252B42] text-center text-[14px] md:text-[16px] lg:text-[16px] font-bold leading-[24px] tracking-[0.1px]">
                  MD. Shahid Hasan
                </h2>
                <h3 className="text-[#747272] text-center text-[14px] font-semibold leading-[24px] tracking-[0.2px] py-2">
                  CEO
                </h3>
                <div className="flex gap-[15px] text-[#604CC3]">
                  <Link>
                    <ImFacebook2 />
                  </Link>
                  <Link>
                    <FaInstagram />
                  </Link>
                  <Link>
                    <FaTwitter />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center block md:hidden pt-4">
            <button className=" justify-center items-center flex-shrink-0 bg-orange-500 text-white text-center px-4 py-1 font-normal leading-[32px] tracking-[-0.6px] rounded-[8px] ">
              See More Member
            </button>
          </div>
          <div className="flex justify-center mt-10 md:hidden">
            <button className="hidden md:inline-block bg-orange-500 text-white px-4 py-1 font-normal leading-[32px] tracking-[-0.6px] rounded-[8px]">
              See More Member
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MeetOurTeam;
