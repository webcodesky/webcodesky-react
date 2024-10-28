import Container from "../../../Components/Ui/Container/Container";
import coverImage from "../../../assets/cover.png";

const Appointment = () => {
  return (
    <div
      className="bg-cover bg-center h-[700px] md:h-[600px]  w-screen"
      style={{ backgroundImage: `url(${coverImage})` }}
    >
      <Container>
        <div className="">
          <p className="pt-10 mont-bold text-[16px]">Contact Us</p>
          <h1 className="mt-5 md:mt-0">Make an Appointment</h1>
          <div className="grid justify-start">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10 mt-10">
              <input
                type="text"
                placeholder="Full Name"
                className="w-[50% h-[50px] p-[10px_21px] flex items-center rounded-[5px] border border-[#BDBDBD] bg-[#F9F9F9]"
              />
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-[50% h-[50px] p-[10px_21px] flex items-center rounded-[5px] border border-[#BDBDBD] bg-[#F9F9F9]"
              />
              <input
                type="text"
                id="please"
                placeholder="Please Select"
                className="w-[50% h-[50px] p-[10px_21px] flex items-center rounded-[5px] border border-[#BDBDBD] bg-[#F9F9F9]"
              />
              <input
                type="text"
                id="mail"
                placeholder="4:00 Available"
                className="w-[50% h-[50px] p-[10px_21px] flex items-center rounded-[5px] border border-[#BDBDBD] bg-[#F9F9F9]"
              />
            </div>

            <div>
              <input
                type="text"
                id="message"
                placeholder="Message"
                className=" w-[285px] md:w-[598px] h-[100px] md:h-[140px] p-[10px_21px] rounded-[5px] border border-[#BDBDBD] bg-[#F9F9F9]"
              />
            </div>
          </div>
          <button className="btn-sm md:btn mt-10">Book Appointment</button>
        </div>
      </Container>
    </div>
  );
};

export default Appointment;
