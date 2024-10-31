import PopularServicesCard from "./PopularServicesCard";

const PopularServices = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-center pt-[55px] pb-2.5 mont-bold">
        Our <span className="text-[#FF6600]">Popular</span> Services
      </h1>
      <p className="mont md:w-[470px] text-[#737373] text-center mx-auto">
                                                We Offer cutting-edge, fully responsive websites and apps to propel your business, combining innovation and technology for exceptional growth and lasting success
      </p>
      <PopularServicesCard />
    </div>
  );
};

export default PopularServices;
