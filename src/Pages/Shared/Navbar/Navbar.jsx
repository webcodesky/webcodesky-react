import { useState } from "react";
import logo from "../../../assets/webcodesky.png";
import { Link } from "react-router-dom";
import Container from "../../../Components/Ui/Container/Container";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <div className="text-white md:w-[1216px] fixed z-10">
        <div className="flex md:gap-[198px] items-center h-16 ">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-600 ">
              <img
                className="rounded-md"
                src={logo}
                alt="logo"
                width={300}
                height={200}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-medium justify-center items-center">
            <Link to="/" className="text-[#23272E] hover:text-blue-600">
              Home
            </Link>
            <Link
              to="/services"
              className="text-[#23272E] font-medium hover:text-blue-600"
            >
              Services
            </Link>
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
              Blog
            </Link>
            <div className="flex gap-2">
              <Link to="/contact">
                <button className="flex py-[14px] px-[20px] justify-center items-center gap-[10px] rounded-[61px] border border-[rgba(35,39,46,0.3)] text-[#23272e] text-[16px] font-normal leading-[100%]">
                  Contact Us{" "}
                </button>
              </Link>

              <button className="w-[149px] h-[43px] flex-shrink-0 rounded-full border-[0.5px] border-[#d3d4d5] bg-[#f60] text-white text-[16px] font-normal leading-[100%]">
                <Link to="/getquote">Get a Quote</Link>
              </button>
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
          <div className="md:hidden">
            <Link
              to="/"
              className="block px-2 py-2 text-[#23272E] hover:bg-gray-100 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block px-2 py-2 text-[#23272E] hover:bg-gray-100 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
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
            <div className="flex flex-col gap-2 w-[50%]">
              <button className="border-[1px] rounded-3xl px-5 py-1 hover:bg-[#FF6600] flex">
                <Link
                  to="/contact"
                  className="block px-2 py-2 text-[#23272E]"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
              </button>
              <button className="border-[1px] rounded-3xl px-5 py-1 hover:bg-[#FF6600] flex">
                <Link
                  to="/contact"
                  className="block px-2 py-2 text-[#23272E]"
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
