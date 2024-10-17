import Banner from "../Banner/Banner";
import ChooseUs from "../ChooseUs/ChooseUs";
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
    </div>
  );
};

export default Home;
