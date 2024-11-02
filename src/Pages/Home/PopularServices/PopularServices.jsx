import Container from "../../../Components/Ui/Container/Container";
import PopularServicesCard from "./PopularServicesCard";

const PopularServices = () => {
  return (
   <Container>
     <div>
      <h1 className="text-center pt-[55px] pb-2.5 mont-bold">
        Our <span className="text-[#FF6600]">Popular</span> Services
      </h1>
      <p className="mont w-[290px] md:w-[350px] lg:w-[360px] text-[12px] md:text-[14px] text-[#737373] text-center mx-auto">
        We deliver cutting-edge, fully responsive websites and apps to propel your business{" "}
      </p>
      <PopularServicesCard />
    </div>
   </Container>
  );
};

export default PopularServices;
