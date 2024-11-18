import "../ServiceFeatures/ServiceFeatures.css";
import apiIntegration from "../../../assets/serviceDetails/API-Integration.png";

const ServiceFeatures = ({ serviceDetails }) => {
  const services = (serviceDetails && serviceDetails[0]) || {};

  const features = services.featuresWeOffer || [];
  return (
    <div className="md:pb-20 md:pt-20">
      <p className="poppins font-bold text-[13px] uppercase text-[#F64B4B] text-center">
        Features We Offer
      </p>
      <h2 className="text-center text-[#161C2D] sm:px-40 md:px-48 pt-5">
        Key Features for Fast, Scalable, Dynamic Web Applications
      </h2>
      {/* Features we offer */}
      <div className="features-wrapper flex md:flex-row-reverse flex-col-reverse justify-around md:gap-10 pt-16">
        <div className="content max-w-[375px] flex flex-col gap-5 sm:mb-20">
          {features.slice(0, 3).map((feature, index) => (
            <div key={index}>
              <div className="sub-title poppins font-bold text-[21px]">
                {feature.title}
              </div>
              <p className="poppins text-[19px]">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="img-div px-10">
          <img src={apiIntegration} alt="userFriendly" />
          <div className="img-div-animation-div"></div>
        </div>
        <div className="content max-w-[375px] flex flex-col gap-5">
          {features.slice(3, 6).map((feature, index) => (
            <div key={index}>
              <div className="sub-title poppins font-bold text-[21px]">
                {feature.title}
              </div>
              <p className="poppins text-[19px]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceFeatures;
