import PopularServicesCard from "./PopularServicesCard";

const PopularServices = () => {
  return (
    <div>
      <h1 className="text-center pt-[55px] pb-2.5 mont-bold">
        Our <span className="text-[#FF6600]">Popular</span> Services
      </h1>
      <p className="mont w-[470px] text-center mx-auto">
        Problems trying to resolve the conflict between the two major realms of
        Classical physics: Newtonian mechanics{" "}
      </p>
      <PopularServicesCard />
    </div>
  );
};

export default PopularServices;
