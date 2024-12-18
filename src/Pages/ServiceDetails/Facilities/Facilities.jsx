import userFriendly from "../../../assets/serviceDetails/userFriendly.png";
const Facilities = ({ serviceDetails }) => {
  const services = (serviceDetails && serviceDetails[0]) || {};

  const facilities = services.facilitiesWeProvide || [];
  return (
    <div>
      <p className="poppins font-bold text-[13px] uppercase text-[#F64B4B] text-center pt-10">
        Facilities We Provide
      </p>
      <h1 className="text-center md:text-[36px] text-[24px] font-bold md:leading-[48px] leading-[32px] tracking-[-1.2px] text-[#161C2D] md:px-56 pt-5">
        Comprehensive Facilities for Seamless Development and Ongoing Support
      </h1>
      {/* Facilities we provide */}
      <div className="flex md:flex-row flex-col-reverse justify-around md:pt-[75px] pt-10">
        <div>
          <img src={userFriendly} alt="userFriendly" />
        </div>
        <div className="content max-w-[375px] flex flex-col gap-5">
          {facilities.map((facility, index) => (
            <div key={index}>
              <div className="sub-title poppins font-bold text-[21px]">
                {facility.title}
              </div>
              <p className="poppins text-[19px]">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facilities;
