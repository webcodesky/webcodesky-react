import Appointment from "../Appointment/Appointment";
import Banner from "../Banner/Banner";
import ChooseUs from "../ChooseUs/ChooseUs";
import Consulting from "../Consulting/Consulting";
import MeetOurTeam from "../MeetOurTeam/MeetOurTeam";
import PeopleSaying from "../PeopleSaying/PeopleSaying";
import PopularServices from "../PopularServices/PopularServices";
import ServiceVideo from "../ServiceVideo/ServiceVideo";

const Home = () => {
  return (
    <div>
      <Banner />
      <PopularServices />
      <PeopleSaying />
      <ServiceVideo />
      <MeetOurTeam />
      <ChooseUs />
      <Appointment />
      <Consulting />
    </div>
  );
};

export default Home;
