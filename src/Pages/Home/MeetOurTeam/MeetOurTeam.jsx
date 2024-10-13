import { ImFacebook2 } from "react-icons/im";
import Container from "../../../Components/Ui/Container/Container";
import teamMember from "../../../assets/teamMember/meet-our-team.png";
import { FaInstagram, FaTwitter } from "react-icons/fa";

const MeetOurTeam = () => {
  return (
    <Container>
      <div>
        <h1 className="text-[#252B42] text-center text-[40px] font-bold leading-[57px] tracking-[0.2px]">
          Meet Our Team
        </h1>
        <p className=" pt-2.5 text-[#737373] text-center text-[14px] font-medium leading-[20px] tracking-[0.2px]">
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: Newtonian mechanics
        </p>
        <div className="pt-10 md:pt-20 ">
          <div className="flex flex-col items-center w-[328px] border border-[#EEE] bg-white">
            <img src={teamMember} alt="" />
            <div>
              <h1>Mahmud Hasan Alif</h1>
              <h2>CO Founder</h2>
              <div className="flex gap-[15px] ">
                <ImFacebook2 />
                <FaInstagram />
                <FaTwitter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MeetOurTeam;
