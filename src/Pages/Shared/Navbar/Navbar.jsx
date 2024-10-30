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
        <div className="flex justify-between items-center h-16 w-full px-4  md:gap-10 lg:gap-[198px] max-sm:w-full gap-5">
          {/* Logo */}
          <div className="">
            <Link to="/" className="text-2xl font-bold text-[#f60] ">
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
          <div className="hidden md:hidden lg:flex md:space-x-3 lg:space-x-6 text-[14px] md:text-[12px] lg:text-[16px] font-medium justify-center items-center">
            <Link to="/" className="text-[#23272E] hover:text-[#f60]">
              Home
            </Link>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="text-[#23272E] hover:text-[#f60] font-medium flex justify-center items-center gap-2"
              >
                Services <RiArrowDropDownLine />
              </button>

              {isDropdownOpen && (
                <div className="absolute mt-2 w-48 bg-white border rounded shadow-lg">
                  <a
                    onClick={() => {
                      fetchServiceDetails("ReactDevelopment");
                      toggleDropdown();
                    }}
                    role="button"
                    tabIndex={0}
                    className="block px-4 py-2 text-sm text-[#23272E] hover:bg-[#f60] hover:text-white"
                  >
                    React Development
                  </a>
                  <a
                    onClick={() => {
                      fetchServiceDetails("WordPressWebsite");
                      toggleDropdown();
                    }}
                    role="button"
                    tabIndex={0}
                    className="block px-4 py-2 text-sm text-[#23272E] hover:bg-[#f60] hover:text-white"
                  >
                    WordPress Website
                  </a>
                  <a
                    onClick={() => {
                      fetchServiceDetails("BusinessWebsite");
                      toggleDropdown();
                    }}
                    role="button"
                    tabIndex={0}
                    className="block px-4 py-2 text-sm text-[#23272E] hover:bg-[#f60] hover:text-white"
                  >
                    Business Website
                  </a>
                  <a
                    onClick={() => {
                      fetchServiceDetails("FrontendDevelopment");
                      toggleDropdown();
                    }}
                    role="button"
                    tabIndex={0}
                    className="block px-4 py-2 text-sm text-[#23272E] hover:bg-[#f60] hover:text-white"
                  >
                    Frontend Development
                  </a>
                  <a
                    onClick={() => {
                      fetchServiceDetails("FullStackDevelopment");
                      toggleDropdown();
                    }}
                    role="button"
                    tabIndex={0}
                    className="block px-4 py-2 text-sm text-[#23272E] hover:bg-[#f60] hover:text-white"
                  >
                    FullStack Development
                  </a>
                  <a
                    onClick={() => {
                      fetchServiceDetails("EcommerceWebsite");
                      toggleDropdown();
                    }}
                    role="button"
                    tabIndex={0}
                    className="block px-4 py-2 text-sm text-[#23272E] hover:bg-[#f60] hover:text-white"
                  >
                    Ecommerce Website
                  </a>
                </div>
              )}
            </div>
            <Link
              to="/about"
              className="text-[#23272E] font-medium hover:text-[#f60]"
            >
              About Us
            </Link>
            <Link
              to="/works"
              className="text-[#23272E] font-medium hover:text-[#f60]"
            >
              Our Works
            </Link>
            <Link
              to="/blog"
              className="text-[#23272E] font-medium hover:text-[#f60]"
            >
              Blogs
            </Link>
            <div className="flex gap-2">
              <Link to="/contact">
                <button className="dm-sans flex md:py-2 md:px-3 lg:py-[14px] lg:px-[20px] justify-center items-center gap-[10px] rounded-[61px] border border-[rgba(35,39,46,0.3)] text-[#23272e] text-[14px] md:text-[12px] lg:text-[16px]  leading-[100%]">
                  Contact Us{" "}
                </button>
              </Link>
              <Link to="/getquote">
                <button className="dm-sans flex md:py-2 md:px-3 lg:py-[14px] lg:px-[20px] justify-center items-center gap-[10px] rounded-[61px] border border-[#d3d4d5] bg-[#f60] text-white text-[14px] md:text-[12px] lg:text-[16px]  leading-[100%]">
                  Get a Quote{" "}
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="flex md:visible lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#23272E] hover:text-[#f60] focus:outline-none focus:text-[#f60]"
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
          <div className="md:visible lg:hidden bg-gray-200 rounded-lg p-3">
            <Link
              to="/"
              className="block px-2 py-2 text-[#23272E] hover:bg-gray-100 hover:text-[#f60]"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="text-[#23272E] hover:text-[#f60] font-medium flex justify-center items-center gap-2"
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
                    className="block px-4 py-2 text-sm text-[#23272E] hover:bg-[#f60] hover:text-white"
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
                    className="block px-4 py-2 text-sm text-[#23272E] hover:bg-[#f60] hover:text-white"
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
                    className="block px-4 py-2 text-sm text-[#23272E] hover:bg-[#f60] hover:text-white"
                  >
                    Web Design
                  </a>
                </div>
              )}
            </div>
            <Link
              to="/about"
              className="block px-2 py-2 text-[#23272E] hover:bg-gray-100 hover:text-[#f60]"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/works"
              className="block px-2 py-2 text-[#23272E] hover:bg-gray-100 hover:text-[#f60]"
              onClick={() => setIsOpen(false)}
            >
              Our Works
            </Link>
            <Link
              to="/blog"
              className="block px-2 py-2 text-[#23272E] hover:bg-gray-100 hover:text-[#f60]"
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
