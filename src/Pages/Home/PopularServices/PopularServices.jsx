import Container from "../../../Components/Ui/Container/Container";
import PopularServicesCard from "./PopularServicesCard";

const PopularServices = () => {
  return (
   <Container>
     <div className="sm:px-6 lg:px-8">
      <h1 className="text-center pt-[55px] pb-2.5 mont-bold">
        Our <span className="text-[#FF6600]">Popular</span> Services
      </h1>
      <p className="mont md:w-[470px] text-[#737373] text-center mx-auto">
        Problems trying to resolve the conflict between the two major realms of
        Classical physics: Newtonian mechanics{" "}
      </p>
      <PopularServicesCard />
    </div>
   </Container>
  );
};

export default PopularServices;
