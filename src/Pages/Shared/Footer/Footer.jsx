import { Link } from "react-router-dom";
import logo from "../../../assets/logo/webcodesky-logo-orange-white.png";
import Container from "../../../Components/Ui/Container/Container";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#252B42]">
      <Container>
        <div className="flex flex-col max-sm:justify-center max-sm:items-center md:flex-row py-[40px] justify-between items-center ">
          <div className="">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              <img className="rounded-md" src={logo} alt="logo" width={100} />
            </Link>
          </div>
          <div className="flex gap-[20px] md:px-10 max-sm:pt-10 max-sm:justify-center max-sm:items-center">
            <Link to={'https://www.facebook.com/WebCodeSky'}>
              <ImFacebook2 className="text-[#335BF5] w-[24px] h-[24px]" />
            </Link>
            <Link to={'#'}>
              <FaInstagram className="text-[#E51F5A] w-[24px] h-[24px]" />
            </Link>
            <Link to={'#'}>
              <FaTwitter className="text-[#21A6DF] w-[24px] h-[24px]" />
            </Link>
            <Link to={'#'}>
              <FaYoutube className="text-[#E42F08] w-[24px] h-[24px]" />
            </Link>
          </div>
        </div>

        {/* line  */}
        <hr className="w-full h-[1px] bg-[#604CC3]" />
        {/* footer option */}
        <div className="md:flex flex-row py-[50px] md:py-[70px] items-start gap-[30px] text-white">
          <div className="flex md:w-[148px] flex-col items-start md:gap-y-2.5">
            <h1 className="text-white font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] ">
              Company Info
            </h1>
            <p className="text-[#BDBDBD] text-[14px] font-semibold leading-[24px] tracking-[0.2px]">
              About Us
            </p>
            <p className="text-[#BDBDBD] text-[14px] font-semibold leading-[24px] tracking-[0.2px]">
              Carrier
            </p>
            <p className="text-[#BDBDBD] text-[14px] font-semibold leading-[24px] tracking-[0.2px]">
              We are hiring
            </p>
            <p className="text-[#BDBDBD] text-[14px] font-semibold leading-[24px] tracking-[0.2px]">
              Blog
            </p>
          </div>
          <div className="flex md:w-[152px] flex-col items-start md:gap-y-2.5">
            <h1 className="text-white font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] max-sm:pt-10">
              Legal
            </h1>
            <p className="text-[#BDBDBD] text-[14px] font-semibold leading-[24px] tracking-[0.2px]">
              About Us
            </p>
            <p className="text-[#BDBDBD] text-[14px] font-semibold leading-[24px] tracking-[0.2px]">
              Carrier
            </p>
            <p className="text-[#BDBDBD] text-[14px] font-semibold leading-[24px] tracking-[0.2px]">
              We are hiring
            </p>
            <p className="text-[#BDBDBD] text-[14px] font-semibold leading-[24px] tracking-[0.2px]">
              Blog
            </p>
          </div>
          <div className="md:flex md:w-[148px] flex-col items-start md:gap-y-2.5">
            <h1 className="text-white font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] max-sm:pt-10">
              Features
            </h1>
            <p className="text-[#BDBDBD] text-[14px] font-semibold leading-[24px] tracking-[0.2px]">
              Business Marketing
            </p>
            <p className="text-[#BDBDBD] text-[14px] font-semibold leading-[24px] tracking-[0.2px]">
              User Analytic
            </p>
            <p className="text-[#BDBDBD] text-[14px] font-semibold leading-[24px] tracking-[0.2px]">
              Live Chat
            </p>
            <p className="text-[#BDBDBD] text-[14px] font-semibold leading-[24px] tracking-[0.2px]">
              Unlimited Support
            </p>
          </div>
          <div className="md:flex md:w-[152px] flex-col items-start md:gap-y-2.5">
            <h1 className="text-white font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] max-sm:pt-10">
              Resources
            </h1>
            <p className="text-[#BDBDBD] text-[14px] font-semibold leading-[24px] tracking-[0.2px]">
              IOS & Android
            </p>
            <p className="text-[#BDBDBD] text-[14px] font-semibold leading-[24px] tracking-[0.2px]">
              Watch a Demo
            </p>
            <p className="text-[#BDBDBD] text-[14px] font-semibold leading-[24px] tracking-[0.2px]">
              Customers
            </p>
            <p className="text-[#BDBDBD] text-[14px] font-semibold leading-[24px] tracking-[0.2px]">
              API
            </p>
          </div>
          <div>
            <h1 className="text-white font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] pb-5 max-sm:pt-10">
              Get In Touch
            </h1>
            <div className="md:w-[320px] w-full flex relative">
              <input
                placeholder="Your Email"
                className="flex w-full max-sm:h-[45px] py-[15px] px-[20px] pr-[120px] md:pr-[224px] items-center rounded-[5px] border border-[#E6E6E6] bg-[#F9F9F9] text-[#BDBDBD] text-[14px] font-normal leading-[28px] tracking-[0.2px]"
              />
              <button className="flex w-[100px] hover:bg-black text-white h-[45px] md:w-[117px] md:h-[59px] justify-center items-center flex-shrink-0 rounded-r-[5px] border border-[#E6E6E6] bg-[#F60] absolute right-0">
                Subscribe
              </button>
            </div>

            <p className="text-[#BDBDBD] text-[14px] font-semibold leading-[24px] tracking-[0.2px] pt-2.5">
              Subscribe to get updates
            </p>
          </div>
        </div>
      </Container>
      <div className="bg-[#604cc34d]">
        <Container>
          <p className="text-[#FFF] text-[11px] md:text-[16px] font-medium md:font-semibold leading-[18px] md:leading-[24px] md:tracking-[0.2px] py-[15px] md:py-[25px]">
            Made With Love By WebCodeSky All Right Reserved
          </p>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
