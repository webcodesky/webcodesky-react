import { ImFacebook2 } from "react-icons/im";
import Container from "../../../Components/Ui/Container/Container";
import teamMember from "../../../assets/teamMember/meet-our-team.png";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const MeetOurTeam = () => {
  return (
    <Container>
      <div className=" py-10 md:py-20">
        <h1 className="text-[#252B42] text-center text-[32px] md:text-[40px] font-bold leading-[57px] tracking-[0.2px]">
          Meet Our Team
        </h1>
        <p className=" pt-2.5 text-[#737373] text-center text-[14px] font-medium leading-[20px] tracking-[0.2px]">
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: Newtonian mechanics
        </p>

        <div className="pt-5 md:pt-10">
          <div className="pb-10 md:pr-[92px] md:text-right"></div>
          <div className=" flex flex-col md:flex-row md:gap-[30px] justify-center items-center">
            <div className="flex flex-col items-center w-[328px] border border-[#EEE] bg-white">
              <img src={teamMember} alt="" />
              <div className="py-10 flex flex-col justify-center items-center">
                <h2 className="text-[#252B42] text-center text-[16px] font-bold leading-[24px] tracking-[0.1px]">
                  Mahmud Hasan Alif
                </h2>
                <h3 className="text-[#737373] text-center text-[14px] font-semibold leading-[24px] tracking-[0.2px] py-2">
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
            <div className="flex flex-col items-center w-[328px] border border-[#EEE] bg-white">
              <img src={teamMember} alt="" />
              <div className="py-10 flex flex-col justify-center items-center">
                <h2 className="text-[#252B42] text-center text-[16px] font-bold leading-[24px] tracking-[0.1px]">
                  Al Tahmiduzzaman Tuhin
                </h2>
                <h3 className="text-[#737373] text-center text-[14px] font-semibold leading-[24px] tracking-[0.2px] py-2">
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
            <div className="flex flex-col items-center w-[328px] border border-[#EEE] bg-white">
              <img src={teamMember} alt="" />
              <div className="py-10 flex flex-col justify-center items-center">
                <h2 className="text-[#252B42] text-center text-[16px] font-bold leading-[24px] tracking-[0.1px]">
                  MD. Shahid Hasan
                </h2>
                <h3 className="text-[#737373] text-center text-[14px] font-semibold leading-[24px] tracking-[0.2px] py-2">
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
          <div className="flex justify-center mt-10">
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
