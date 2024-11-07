import Container from "../../../Components/Ui/Container/Container";
import PopularServicesCard from "./PopularServicesCard";

const PopularServices = () => {
  return (
    <Container>
      <div>
        <h1 className="text-center pt-[55px] pb-2.5 mont-bold">
          Our <span className="text-[#FF6600]">Popular</span> Services
        </h1>
        <p className="mont w-[290px] text-center md:w-[390px] mx-auto">
          We deliver cutting-edge, fully responsive websites and apps to propel
          your business{" "}
        </p>
        <PopularServicesCard />
      </div>
    </Container>
  );
};

export default PopularServices;
