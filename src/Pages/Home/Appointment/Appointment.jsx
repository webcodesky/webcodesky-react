import Container from "../../../Components/Ui/Container/Container";
import coverImage from "../../../assets/cover.png";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaAngleDown } from "react-icons/fa6";
import Swal from "sweetalert2";

const Appointment = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState("3:00 Available");
  const dropdownRef = useRef(null);
  const times = [
    "4:00 Available",
    "5:00 Available",
    "6:00 Available",
    "7:00 Available",
    "8:00 Available",
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j8uekaq",
        "template_ziokrl8",
        form.current,
        "iQlCL90_LpH9dCEgv"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thanks for reminding me",
            showConfirmButton: false,
            timer: 2000,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      className="bg-cover bg-center h-[700px] md:h-[600px]  w-screen"
      style={{ backgroundImage: `url(${coverImage})` }}
    >
      <Container>
        <div className="">
          <form ref={form} onSubmit={sendEmail}>
            <p className="pt-10 mont-bold text-[16px]">Contact Us</p>
            <h2 className="mt-5 md:mt-0">Get Free Discussion</h2>
            <div className="grid justify-start">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10 mt-10">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Full Name"
                  className="w-[50% h-[50px] p-[10px_21px] flex items-center rounded-[5px] border border-[#BDBDBD] bg-[#F9F9F9]"
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="example@gmail.com"
                  className="w-[50% h-[50px] p-[10px_21px] flex items-center rounded-[5px] border border-[#BDBDBD] bg-[#F9F9F9]"
                />
                <input
                  type="text"
                  id="please"
                  name="plase"
                  placeholder="Please Select"
                  className="w-[50% h-[50px] p-[10px_21px] flex items-center rounded-[5px] border border-[#BDBDBD] bg-[#F9F9F9]"
                />

                <div ref={dropdownRef} className="relative w-full h-[50px]">
                  <input
                    type="text"
                    name="time"
                    value={selectedTime}
                    onClick={() => setIsOpen(!isOpen)}
                    readOnly
                    className="w-full h-full p-[10px_21px] rounded-[5px] border border-[#BDBDBD] bg-[#F9F9F9] cursor-pointer"
                  />
                  <span className="absolute top-5 right-4 text-[14px]">
                    {" "}
                    <FaAngleDown />
                  </span>
                  {isOpen && (
                    <ul className="absolute w-full bg-white border border-[#BDBDBD] rounded-[5px] shadow mt-1">
                      {times.map((time) => (
                        <li
                          key={time}
                          onClick={() => {
                            setSelectedTime(time);
                            setIsOpen(false);
                          }}
                          className="p-3 hover:bg-gray-100 cursor-pointer"
                        >
                          {time}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div>
                <input
                  type="text"
                  name="message"
                  id="message"
                  placeholder="Message"
                  className=" w-[285px] md:w-[598px] h-[100px] md:h-[140px] p-[10px_21px] rounded-[5px] border border-[#BDBDBD] bg-[#F9F9F9]"
                />
              </div>
            </div>
            <input
              className="btn-sm md:btn mt-10 py-2"
              type="submit"
              value="Book Appointment"
            />
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Appointment;
