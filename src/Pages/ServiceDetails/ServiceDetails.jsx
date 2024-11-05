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

  return (
    <div>
      <Container>
        {!serviceDetails ? (
          <p>No service details available.</p>
        ) : (
          <>
            <ServiceDetailsBanner serviceDetails={serviceDetails} />
            <ServiceFeatures serviceDetails={serviceDetails} />
            <Facilities serviceDetails={serviceDetails} />
          </>
        )}
      </Container>
      {serviceDetails && (
        <>
          <WhyChooseUs serviceDetails={serviceDetails} />
          <Container>
            <FAQAccordion serviceDetails={serviceDetails} />
          </Container>
          <PeopleSaying />
        </>
      )}
    </div>
  );
};

export default ServiceDetails;
