import Banner from "../Banner/Banner";
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
      <ServiceVideo></ServiceVideo>
      <MeetOurTeam></MeetOurTeam>
    </div>
  );
};

export default Home;
