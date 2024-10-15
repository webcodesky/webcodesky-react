import Container from "../../../Components/Ui/Container/Container";
import coverImage from "../../../assets/cover.png";

const Appointment = () => {
  return (
    <div
      className="bg-cover bg-center h-screen w-screen"
      style={{ backgroundImage: `url(${coverImage})` }}
    >
      <Container>
        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <p className="pt-10 mont-bold text-[16px]">Contact Us</p>
            <h1>Make an Appointment</h1>
            <div className="grid grid-cols-2 gap-5 mb-10  mt-10">
              <input
                type="text"
                placeholder="Full Name"
                className="w-[285px] h-[50px] p-[10px_21px] flex items-center rounded-[5px] border border-[#BDBDBD] bg-[#F9F9F9]"
              />
              <input
                type="mail"
                placeholder="example@gmail.com"
                className="w-[285px] h-[50px] p-[10px_21px] flex items-center rounded-[5px] border border-[#BDBDBD] bg-[#F9F9F9]"
              />
              <input
                type="text"
                id="please"
                placeholder="Please Select"
                className="w-[285px] h-[50px] p-[10px_21px] flex items-center rounded-[5px] border border-[#BDBDBD] bg-[#F9F9F9]"
              />
              <input
                type="mail"
                id="mail"
                placeholder="4:00 Available"
                className="w-[285px] h-[50px] p-[10px_21px] flex items-center rounded-[5px] border border-[#BDBDBD] bg-[#F9F9F9]"
              />
            </div>
            <div>
              <input
                type="text"
                id="message"
                placeholder="Message"
                className="w-[598px] h-[140px] p-[10px_21px] rounded-[5px] border border-[#BDBDBD] bg-[#F9F9F9]"
              />
            </div>
            <button className="btn mt-10">Book Appointment</button>
          </div>
          <div></div>
        </div>
      </Container>
    </div>
  );
};

export default Appointment;
