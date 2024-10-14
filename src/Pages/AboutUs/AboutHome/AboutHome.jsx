import ContactUs from "../../ContactUs/ContactUs";
import PeopleSaying from "../../Home/PeopleSaying/PeopleSaying";
import PopularServices from "../../Home/PopularServices/PopularServices";
import AboutClientSatisfaction from "../AboutClientSetisfaction/AboutClientSatisfaction";
import AboutUsBanner from "../AboutUsBanner/AboutUsBanner";
import DoseItWork from "../DoseItWork/DoseItWork";

const AboutHome = () => {
  return (
    <>
      <AboutUsBanner />
      <AboutClientSatisfaction />
      <DoseItWork />
      <PopularServices />
      <PeopleSaying />
      <ContactUs />
    </>
  );
};

export default AboutHome;
