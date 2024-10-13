import logo from "../../../assets/webcodesky.png";
import Container from "../../../Components/Ui/Container/Container";

const Footer = () => {
  return (
    <div className="bg-[#252B42]">
      <Container>
        <div className="md:flex py-[40px] justify-between">
          <div>
            <img src={logo} alt="" width={300} height={200} />
          </div>
          <div>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
        <div className="md:flex flex-row py-[70px] md:px-[350px] items-start gap-[30px] text-white">
          <div className="flex w-[148px] flex-col items-start">
            <h1 className="text-white font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px]">
              Company Info
            </h1>
          </div>
          <div className="md:flex w-[152px] flex-col items-start">
            <h1 className="text-white font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px]">
              Legal
            </h1>
          </div>
          <div className="md:flex w-[148px] flex-col items-start">
            <h1 className="text-white font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px]">
              Features
            </h1>
          </div>
          <div className="md:flex w-[152px] flex-col items-start">
            <h1 className="text-white font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px]">
              Resources
            </h1>
          </div>
          <div>
            <h1 className="text-white font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px]">
              Get In Touch
            </h1>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
