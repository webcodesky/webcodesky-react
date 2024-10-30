import { useLocation } from "react-router-dom";
import ServiceDetailsBanner from "./ServiceDetailsBanner/ServiceDetailsBanner";
import ServiceFeatures from "./ServiceFeatures/ServiceFeatures";
import Container from "../../Components/Ui/Container/Container";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import FAQAccordion from "./FAQ/FAQ";
import PeopleSaying from "../Home/PeopleSaying/PeopleSaying";
import Facilities from "./Facilities/Facilities";
import useScrollToTop from "../../Hooks/useScrollToTop";

const ServiceDetails = () => {
  useScrollToTop();
  const location = useLocation();
  const { serviceDetails } = location.state || {};

  // Check if data is available
  if (!serviceDetails) {
    return <p>No service details available.</p>;
  }

  return (
    <div>
      <Container>
        <ServiceDetailsBanner
          serviceDetails={serviceDetails}
        ></ServiceDetailsBanner>
        <ServiceFeatures serviceDetails={serviceDetails}></ServiceFeatures>
        <Facilities serviceDetails={serviceDetails}></Facilities>
      </Container>
      <WhyChooseUs serviceDetails={serviceDetails}></WhyChooseUs>
      <Container>
        <FAQAccordion serviceDetails={serviceDetails}></FAQAccordion>
      </Container>
      <PeopleSaying />
    </div>
  );
};

export default ServiceDetails;
