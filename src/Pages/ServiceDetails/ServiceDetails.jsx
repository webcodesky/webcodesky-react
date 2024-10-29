import { useLocation } from "react-router-dom";
import ServiceDetailsBanner from "./ServiceDetailsBanner/ServiceDetailsBanner";
import ServiceFeatures from "./ServiceFeatures/ServiceFeatures";
import Container from "../../Components/Ui/Container/Container";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import FAQAccordion from "./FAQ/FAQ";
import PeopleSaying from "../Home/PeopleSaying/PeopleSaying";

const ServiceDetails = () => {
  const location = useLocation();
  const { serviceDetails } = location.state || {};

  console.log(serviceDetails);

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
      </Container>
      <WhyChooseUs></WhyChooseUs>
      <Container>
        <FAQAccordion serviceDetails={serviceDetails}></FAQAccordion>
      </Container>
      <PeopleSaying />
    </div>
  );
};

export default ServiceDetails;
