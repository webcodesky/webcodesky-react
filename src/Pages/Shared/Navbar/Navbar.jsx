import { useEffect, useRef, useState } from "react";
import logo from "../../../assets/webcodesky.png";
import { Link, useNavigate } from "react-router-dom";
import Container from "../../../Components/Ui/Container/Container";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const navigate = useNavigate();

  // const [serviceDetails, setServiceDetails] = useState(null);
  // console.log(serviceDetails);

  // Function to fetch service details
  const fetchServiceDetails = async (service) => {
    try {
      const response = await fetch(
        `http://localhost:5000/service-details/${service}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      // setServiceDetails(data);

      // Navigate to the service details page with state
      navigate("/service-details", { state: { serviceDetails: data } });
    } catch (error) {
      console.error("Error fetching service details:", error);
    }
  };

  return (
    <Container>
      <div className="text-white  fixed z-10 bg-[#fff] rounded-3xl">
        <div className="flex justify-between items-center h-16 w-full px-4 md:gap-[198px] max-sm:w-full gap-5">
          {/* Logo */}
          <div className="">
            <Link to="/" className="text-2xl font-bold text-blue-600 ">
              <img
                className="rounded-md"
                src={logo}
                alt="logo"
                width={208}
                height={89}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-medium justify-center items-center">
            <Link to="/" className="text-[#23272E] hover:text-blue-600">
              Home
            </Link>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="text-[#23272E] hover:text-blue-600 font-medium flex justify-center items-center gap-2"
              >
                Services <RiArrowDropDownLine />
              </button>

              {isDropdownOpen && (
                <div className="absolute mt-2 w-48 bg-white border rounded shadow-lg">
                  <a
                    onClick={() => {
                      fetchServiceDetails("EcommerceWebsite");
                      toggleDropdown();
                    }}
                    role="button"
                    tabIndex={0}
                    className="block px-4 py-2 text-sm text-[#23272E] hover:bg-blue-600 hover:text-white"
                  >
                    Ecommerce Website
                  </a>
                  <a
                    onClick={() => {
                      fetchServiceDetails("WordPressWebsite");
                      toggleDropdown();
                    }}
                    role="button"
                    tabIndex={0}
                    className="block px-4 py-2 text-sm text-[#23272E] hover:bg-blue-600 hover:text-white"
                  >
                    WordPress Website
                  </a>
                  <a
                    onClick={() => {
                      fetchServiceDetails("WebDesign");
                      toggleDropdown();
                    }}
                    role="button"
                    tabIndex={0}
                    className="block px-4 py-2 text-sm text-[#23272E] hover:bg-blue-600 hover:text-white"
                  >
                    Web Design
                  </a>
                </div>
              )}
            </div>
            <Link
              to="/about"
              className="text-[#23272E] font-medium hover:text-blue-600"
            >
              About Us
            </Link>
            <Link
              to="/works"
              className="text-[#23272E] font-medium hover:text-blue-600"
            >
              Our Works
            </Link>
            <Link
              to="/blog"
              className="text-[#23272E] font-medium hover:text-blue-600"
            >
              Blogs
            </Link>
            <div className="flex gap-2">
              <Link to="/contact">
                <button className="flex py-[14px] px-[20px] justify-center items-center gap-[10px] rounded-[61px] border border-[rgba(35,39,46,0.3)] text-[#23272e] text-[16px] font-normal leading-[100%]">
                  Contact Us{" "}
                </button>
              </Link>
              <Link to="/getquote">
                <button className="w-[149px] h-[43px] flex-shrink-0 rounded-full border-[0.5px] border-[#d3d4d5] bg-[#f60] text-white text-[16px] font-normal leading-[100%]">
                  Get a Quote
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#23272E] hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-200 rounded-lg p-3">
            <Link
              to="/"
              className="block px-2 py-2 text-[#23272E] hover:bg-gray-100 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="text-[#23272E] hover:text-blue-600 font-medium flex justify-center items-center gap-2"
              >
                Services <RiArrowDropDownLine />
              </button>

              {isDropdownOpen && (
                <div className="absolute mt-2 w-48 bg-white border rounded shadow-lg">
                  <a
                    onClick={() => {
                      fetchServiceDetails("EcommerceWebsite");
                      toggleDropdown();
                    }}
                    role="button"
                    tabIndex={0}
                    className="block px-4 py-2 text-sm text-[#23272E] hover:bg-blue-600 hover:text-white"
                  >
                    Ecommerce Website
                  </a>
                  <a
                    onClick={() => {
                      fetchServiceDetails("WordPressWebsite");
                      toggleDropdown();
                    }}
                    role="button"
                    tabIndex={0}
                    className="block px-4 py-2 text-sm text-[#23272E] hover:bg-blue-600 hover:text-white"
                  >
                    WordPress Website
                  </a>
                  <a
                    onClick={() => {
                      fetchServiceDetails("WebDesign");
                      toggleDropdown();
                    }}
                    role="button"
                    tabIndex={0}
                    className="block px-4 py-2 text-sm text-[#23272E] hover:bg-blue-600 hover:text-white"
                  >
                    Web Design
                  </a>
                </div>
              )}
            </div>
            <Link
              to="/about"
              className="block px-2 py-2 text-[#23272E] hover:bg-gray-100 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/works"
              className="block px-2 py-2 text-[#23272E] hover:bg-gray-100 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Our Works
            </Link>
            <Link
              to="/blog"
              className="block px-2 py-2 text-[#23272E] hover:bg-gray-100 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <div className="flex flex-col gap-2 w-auto">
              <button className="btn-xs">
                <Link
                  to="/contact"
                  className="text-[#23272E]"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
              </button>
              <button className="btn-xs">
                <Link
                  to="/contact"
                  className=" text-[#23272E]"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </button>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Navbar;
