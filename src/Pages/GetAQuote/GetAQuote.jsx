import emailjs from "@emailjs/browser";
import Container from "../../Components/Ui/Container/Container";
import { useRef } from "react";
import Swal from "sweetalert2";

const GetAQuote = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7vjzf6n",
        "template_ypb4iod",
        form.current,
        "7Ww2gQY6DMlyTpApN"
      )
      .then(
        () => {
          // Extract form data to send to the server
          const formData = new FormData(form.current);
          const savedUser = {
            name: formData.get("user_name"),
            email: formData.get("user_email"),
            phone: formData.get("user_phone"),
            subject: formData.get("subject"),
            message: formData.get("message"),
          };

          // Sending the saved user data to the server
          fetch("https://server.webcodesky.com/contact-users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(savedUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                // After data is successfully saved, show only one alert
                Swal.fire({
                  icon: "success",
                  title: "Email Sent Successfully!",
                  //   text: "Your message has been sent and data has been saved.",
                  showClass: {
                    popup:
                      "animate__animated animate__fadeInUp animate__faster",
                  },
                  hideClass: {
                    popup:
                      "animate__animated animate__fadeOutDown animate__faster",
                  },
                });
              }
            });

          // Reset the form after submission
          form.current.reset();
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `Something went wrong: ${error.text}`,
            showClass: {
              popup: "animate__animated animate__fadeInUp animate__faster",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutDown animate__faster",
            },
          });
        }
      );
  };

  return (
    <>
      <div className="bg-[#F5F5F5] max-sm:pt-[100px]">
        <Container>
          <h1 className="text-[#F60] text-center text-[48px] md:text-[96px] font-bold leading-none tracking-[-1.92px] md:tracking-[-3.84px] md:pt-[120px]">
            Get A{" "}
            <span className="text-black text-[48px] md:text-[96px] font-bold leading-none tracking-[-1.92px] md:tracking-[-3.84px]">
              Quote
            </span>
          </h1>
          <p className="text-[#747272] text-[16px] md:text-[20px] font-medium leading-[24px] md:leading-[28px] tracking-[0.2px] text-center pt-[20px] md:pt-[30px] pb-[40px] md:pb-[73px]">
            We’ll Design your website with ReactJs,{" "}
            <span className="text-[#747272] text-[16px] md:text-[20px] font-bold">
              Super Fast, Responsive
            </span>
          </p>
          <div className="flex flex-col md:flex-row gap-[30px] md:gap-[60px] justify-center p-4">
            <div className="flex gap-4">
              <span className="text-[#FF6600] w-[50.886px] h-[54px] flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="51"
                  height="54"
                  viewBox="0 0 51 54"
                  fill="none"
                >
                  <ellipse
                    cx="25.4428"
                    cy="27"
                    rx="25.4428"
                    ry="27"
                    fill="white"
                  />
                  <path
                    d="M29.5488 30.2045L27.7824 32.5479C25.0464 30.8418 22.7663 28.4225 21.1584 25.5192L23.3662 23.6447C23.8986 23.1928 24.0767 22.4166 23.7997 21.7556L21.7869 16.9465C21.4887 16.2339 20.7483 15.8552 20.0372 16.0515L16.2063 17.1054C15.4662 17.3102 14.9876 18.0703 15.0925 18.8743C16.4745 29.3133 24.2061 37.518 34.0433 38.9848C34.8009 39.0959 35.517 38.5881 35.7103 37.8029L36.7033 33.7366C36.8876 32.9823 36.5309 32.1971 35.86 31.8804L31.3291 29.7471C30.7066 29.4529 29.9755 29.6408 29.5488 30.2045Z"
                    fill="#FF6600"
                  />
                </svg>
              </span>
              <div>
                <h1 className="text-[#161C2D] text-[20px] md:text-[24px] font-bold leading-[28px] md:leading-[34px] tracking-[-0.5px]">
                  Call Us
                </h1>
                <p className="text-[#161C2D] text-[18px] md:text-[21px] font-medium leading-[26px] md:leading-[32px] tracking-[-0.5px] opacity-70">
                  +880 1860-861105
                </p>
                {/* <p className="text-[#161C2D] text-[18px] md:text-[21px] font-medium leading-[26px] md:leading-[32px] tracking-[-0.5px] opacity-70">
                  +1-940-394-2948
                </p> */}
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-[#FF6600] w-[50.886px] h-[54px] flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="51"
                  height="54"
                  viewBox="0 0 51 54"
                  fill="none"
                >
                  <ellipse
                    cx="25.5268"
                    cy="27"
                    rx="25.4428"
                    ry="27"
                    fill="white"
                  />
                  <path
                    d="M34.4798 17H17.5179C16.2168 17 15.1621 18.1233 15.1621 19.5091V21.5163C15.1621 21.7 15.2562 21.869 15.4076 21.9569L25.7732 27.9787C25.9138 28.0604 26.0839 28.0604 26.2245 27.9787L36.5901 21.9569C36.7415 21.869 36.8356 21.7 36.8356 21.5163V19.5091C36.8356 18.1233 35.7809 17 34.4798 17Z"
                    fill="#FF6600"
                  />
                  <path
                    d="M26.6759 29.2346C26.2544 29.4749 25.7452 29.4749 25.3237 29.2346L15.1729 23.4399L15.1621 23.4473V33.8539C15.1621 35.2159 16.2168 36.3199 17.5179 36.3199H34.4798C35.7809 36.3199 36.8356 35.2159 36.8356 33.8539V23.4473L36.8248 23.4404L26.6759 29.2346Z"
                    fill="#FF6600"
                  />
                </svg>
              </span>
              <div>
                <h1 className="text-[#161C2D] text-[20px] md:text-[24px] font-bold leading-[28px] md:leading-[34px] tracking-[-0.5px]">
                  Email us
                </h1>
                <p className="text-[#161C2D] text-[18px] md:text-[21px] font-medium leading-[26px] md:leading-[32px] tracking-[-0.5px] opacity-70">
                  webcodesky1@gmail.com
                </p>
                {/* <p className="text-[#161C2D] text-[18px] md:text-[21px] font-medium leading-[26px] md:leading-[32px] tracking-[-0.5px] opacity-70">
                  contact@brainwave.io
                </p> */}
              </div>
            </div>
            {/* <div className="flex gap-4">
              <span className="text-[#FF6600] w-[50.886px] h-[54px] flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="54"
                  viewBox="0 0 52 54"
                  fill="none"
                >
                  <ellipse
                    cx="25.6108"
                    cy="27"
                    rx="25.4428"
                    ry="27"
                    fill="white"
                  />
                  <path
                    d="M18.0723 23.8111C18.0723 18.6088 21.9054 15.5 25.6109 15.5C29.3163 15.5 33.1495 18.6088 33.1495 23.8111C33.1495 29.3282 26.2197 37.0316 25.9244 37.3568C25.8415 37.4487 25.7284 37.5 25.6109 37.5C25.4934 37.5 25.3803 37.4487 25.2974 37.3568C25.002 37.0316 18.0723 29.3282 18.0723 23.8111ZM22.95 23.811C22.95 25.4288 24.1433 26.7444 25.6107 26.7444C27.078 26.7444 28.2714 25.4288 28.2714 23.811C28.2714 22.1933 27.078 20.8777 25.6107 20.8777C24.1433 20.8777 22.95 22.1933 22.95 23.811Z"
                    fill="#FF6600"
                  />
                </svg>
              </span>
              <div>
                <h1 className="text-[#161C2D] text-[20px] md:text-[24px] font-bold leading-[28px] md:leading-[34px] tracking-[-0.5px]">
                  Visit us
                </h1>
                <p className="text-[#161C2D] text-[18px] md:text-[21px] font-medium leading-[26px] md:leading-[32px] tracking-[-0.5px] opacity-70">
                  34 Madison Street,
                </p>
                <p className="text-[#161C2D] text-[18px] md:text-[21px] font-medium leading-[26px] md:leading-[32px] tracking-[-0.5px] opacity-70">
                  NY, USA 10005
                </p>
              </div>
            </div> */}
          </div>
          {/* contact form  */}
          <div className="py-[40px] flex justify-center">
            <div className="w-full max-w-[1062px] flex-shrink-0 rounded-[10px] bg-[#FFF]">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col w-full p-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {/* First & Last Name */}
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      First & Last Name
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      id="name"
                      placeholder="i.e. John Doe"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      id="email"
                      placeholder="i.e. john@mail.com"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="phone"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="user_phone"
                      id="phone"
                      placeholder="i.e. +1-234-567-7890"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="subject"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="i.e. I need help"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required
                    />
                  </div>
                </div>

                {/* Message - Full Width */}
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Type your message"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"
                    required
                  />
                </div>

                {/* Button - Left Aligned */}
                <div className="flex justify-start pb-[36px]">
                  <button
                    type="submit"
                    value="send"
                    className="flex w-full max-w-[203.789px] h-[59px] justify-center items-center flex-shrink-0 bg-[#FF6600] text-white text-center font-poppins text-[17px] font-bold leading-[32px] tracking-[-0.6px] shadow-[0px_34px_33px_-23px_rgba(22,28,45,0.13)] rounded-[8px] transition duration-300 ease-in-out hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Container>
        <div className="hidden md:block">
          <p className="rounded-[25px] bg-gradient-to-b from-[#FFF6EA] to-[rgba(255, 232, 199, 0.50)] h-[330px] md:-mt-[170px]"></p>
        </div>
      </div>
    </>
  );
};

export default GetAQuote;
