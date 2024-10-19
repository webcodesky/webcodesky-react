import Container from "../../../Components/Ui/Container/Container";
import cardImg from "../../../assets/image 1.png";
import profileImg from "../../../assets/blog Profile img.png";
import { MdOutlineArrowBack, MdOutlineArrowForward } from "react-icons/md";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const BlogPost = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4; //

  console.log(blogs);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "https://webcodesky-server-nine.vercel.app/blogs"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const totalPages = Math.ceil(blogs.length / postsPerPage); // Calculate total pages

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <p
          key={i}
          className={`p-2 md:p-3 w-[32px] md:w-[40px] h-[32px] md:h-[40px] flex justify-center items-center ${
            i === currentPage ? "bg-[#7F56D9] text-[#ffffff]" : "text-[#667085]"
          } rounded-[8px] cursor-pointer`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </p>
      );
    }
    return pages;
  };

  // Calculate current blogs to display based on current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <Container>
      <div className="max-sm:pt-10 md:py-[55px]">
        <div className=" mx-auto flex flex-col md:flex-row md:gap-[47px] gap-5 ">
          {/* Card Section (75% width) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Card 1 */}
            {currentPosts.map((blog) => (
              <Link to={`/blog-details/${blog._id}`} key={blog._id}>
                <div className="w-full md:w-[359px] rounded-[15px] bg-[#F5F5F5] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex-shrink-0 p-4 h-auto md:h-[525px] ">
                  <div>
                    {/* Main Image */}
                    <img
                      src={cardImg}
                      alt=""
                      className="w-full h-auto rounded-[15px]"
                    />
                  </div>

                  {/* Profile section */}
                  <div className="flex items-center pt-[20px] gap-2">
                    <img
                      src={profileImg}
                      alt=""
                      className="w-[40px] h-[40px] rounded-full"
                    />
                    <p className="text-[#292929] text-[14px] font-light leading-normal">
                      {blog.author.name}
                    </p>
                    <p className="text-[#757575] text-[14px] font-light leading-normal">
                      4 days ago
                    </p>
                  </div>

                  {/* Title */}
                  <h2 className="text-[#191919] text-[18px] md:text-[22px] font-normal leading-normal pt-[12px]">
                    {blog.article.title}
                  </h2>

                  {/* Description */}
                  <p className="text-[#292929] text-[14px] font-light leading-normal py-[13px]">
                    {blog.article.description}
                  </p>

                  {/* Card footer */}
                  <div className="flex gap-[20px] flex-wrap">
                    {/* Tags Section */}
                    <div className="flex gap-3">
                      <p className="text-[#292929] text-[13px] font-light leading-normal w-[65px] h-[24px] flex-shrink-0 rounded-[10px] bg-[#F2F2F2] flex justify-center items-center">
                        Portfolio
                      </p>
                      <p className="text-[#757575] text-[13px] font-light leading-normal">
                        3 min read
                      </p>
                      <p className="text-[#757575] text-[13px] font-light leading-normal">
                        Selected for you
                      </p>
                    </div>

                    {/* Icons Section */}
                    <div className="flex gap-3">
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="23"
                          height="24"
                          viewBox="0 0 23 24"
                          fill="none"
                        >
                          <path
                            d="M20.9833 6.46166C20.9833 7.86382 20.4596 9.20856 19.5274 10.2C18.5952 11.1915 17.3309 11.7485 16.0125 11.7485C14.6942 11.7485 13.4299 11.1915 12.4977 10.2C11.5655 9.20856 11.0418 7.86382 11.0418 6.46166C11.0418 5.0595 11.5655 3.71477 12.4977 2.72329C13.4299 1.73181 14.6942 1.1748 16.0125 1.1748C17.3309 1.1748 18.5952 1.73181 19.5274 2.72329C20.4596 3.71477 20.9833 5.0595 20.9833 6.46166ZM16.5648 4.11195C16.5648 3.95615 16.5066 3.80674 16.4031 3.69657C16.2995 3.58641 16.159 3.52452 16.0125 3.52452C15.866 3.52452 15.7256 3.58641 15.622 3.69657C15.5184 3.80674 15.4602 3.95615 15.4602 4.11195V5.87423H13.8033C13.6568 5.87423 13.5163 5.93612 13.4128 6.04629C13.3092 6.15645 13.251 6.30587 13.251 6.46166C13.251 6.61746 13.3092 6.76687 13.4128 6.87704C13.5163 6.9872 13.6568 7.04909 13.8033 7.04909H15.4602V8.81138C15.4602 8.96717 15.5184 9.11659 15.622 9.22675C15.7256 9.33692 15.866 9.39881 16.0125 9.39881C16.159 9.39881 16.2995 9.33692 16.4031 9.22675C16.5066 9.11659 16.5648 8.96717 16.5648 8.81138V7.04909H18.2218C18.3682 7.04909 18.5087 6.9872 18.6123 6.87704C18.7159 6.76687 18.7741 6.61746 18.7741 6.46166C18.7741 6.30587 18.7159 6.15645 18.6123 6.04629C18.5087 5.93612 18.3682 5.87423 18.2218 5.87423H16.5648V4.11195ZM16.5648 19.4062V12.8975C16.9386 12.8616 17.3084 12.7888 17.6694 12.6802V20.56C17.6694 20.6683 17.6411 20.7744 17.5879 20.8667C17.5346 20.959 17.4584 21.0339 17.3676 21.083C17.2768 21.1321 17.1751 21.1536 17.0736 21.145C16.9721 21.1365 16.8748 21.0983 16.7924 21.0346L11.0418 16.5866L5.29113 21.0346C5.20876 21.0983 5.11144 21.1365 5.00993 21.145C4.90842 21.1536 4.80666 21.1321 4.7159 21.083C4.62515 21.0339 4.54892 20.959 4.49566 20.8667C4.44239 20.7744 4.41415 20.6683 4.41406 20.56V5.28681C4.41406 4.50783 4.70501 3.76075 5.2229 3.20993C5.74079 2.65911 6.4432 2.34966 7.1756 2.34966H11.3256C11.0443 2.71207 10.801 3.10601 10.5999 3.52452H7.1756C6.73616 3.52452 6.31471 3.71019 6.00398 4.04068C5.69325 4.37117 5.51868 4.81942 5.51868 5.28681V19.4062L10.717 15.3859C10.8114 15.3129 10.9251 15.2736 11.0418 15.2736C11.1584 15.2736 11.2721 15.3129 11.3665 15.3859L16.5648 19.4062Z"
                            fill="black"
                          />
                        </svg>
                      </p>
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="23"
                          height="24"
                          viewBox="0 0 23 24"
                          fill="none"
                        >
                          <path
                            d="M4.27428 13.9516C3.72497 13.9516 3.19817 13.7195 2.80975 13.3064C2.42134 12.8933 2.20313 12.333 2.20312 11.7488C2.20313 11.1645 2.42134 10.6042 2.80975 10.1911C3.19817 9.77798 3.72497 9.5459 4.27428 9.5459C4.82358 9.5459 5.35039 9.77798 5.73881 10.1911C6.12722 10.6042 6.34543 11.1645 6.34543 11.7488C6.34543 12.333 6.12722 12.8933 5.73881 13.3064C5.35039 13.7195 4.82358 13.9516 4.27428 13.9516ZM11.1781 13.9516C10.6288 13.9516 10.102 13.7195 9.7136 13.3064C9.32518 12.8933 9.10697 12.333 9.10697 11.7488C9.10697 11.1645 9.32518 10.6042 9.7136 10.1911C10.102 9.77798 10.6288 9.5459 11.1781 9.5459C11.7274 9.5459 12.2542 9.77798 12.6427 10.1911C13.0311 10.6042 13.2493 11.1645 13.2493 11.7488C13.2493 12.333 13.0311 12.8933 12.6427 13.3064C12.2542 13.7195 11.7274 13.9516 11.1781 13.9516ZM18.0818 13.9516C17.5325 13.9516 17.0057 13.7195 16.6173 13.3064C16.2289 12.8933 16.0107 12.333 16.0107 11.7488C16.0107 11.1645 16.2289 10.6042 16.6173 10.1911C17.0057 9.77798 17.5325 9.5459 18.0818 9.5459C18.6311 9.5459 19.1579 9.77798 19.5463 10.1911C19.9347 10.6042 20.1529 11.1645 20.1529 11.7488C20.1529 12.333 19.9347 12.8933 19.5463 13.3064C19.1579 13.7195 18.6311 13.9516 18.0818 13.9516Z"
                            fill="black"
                          />
                        </svg>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Other Topic Section (25% width) */}
          <div className="w-full md:w-[444px] bg-[#F5F5F5] rounded-[15px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-4 max-h-[600px] overflow-auto">
            <h2 className="text-[#252B42] text-[32px] md:text-[40px] font-bold leading-[40px] md:leading-[57px] tracking-[0.2px] ps-[10px] md:ps-[15px]">
              Recent <span className="text-[#F60]">Post</span>
            </h2>

            {/* Post 1 */}
            <div className="rounded-[10px] bg-[rgba(255,255,255,0.7)] mb-3">
              <div className="flex gap-[12px] md:gap-[18px] items-center">
                <img
                  className="w-[65px] h-[60px] md:w-[88px] md:h-[85px] flex-shrink-0 ms-3 md:ms-5"
                  src={cardImg}
                  alt=""
                />
                <div className="flex flex-col justify-center pb-[12px] md:pb-[16px]">
                  <h2 className="text-[#191919] text-[18px] md:text-[22px] font-normal leading-normal pt-[10px] md:pt-[12px]">
                    Your portfolio is stopping you from getting that job
                  </h2>
                  <div className="flex gap-4">
                    <p className="text-[#292929] text-[11px] md:text-[13px] font-light leading-normal w-[55px] md:w-[65px] h-[20px] md:h-[24px] flex-shrink-0 rounded-[10px] bg-[#F2F2F2] flex justify-center items-center">
                      Portfolio
                    </p>
                    <p className="text-[#757575] text-[11px] md:text-[13px] font-light leading-normal">
                      3 min read
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Repeat same structure for other posts */}
            <div className="rounded-[10px] bg-[rgba(255,255,255,0.7)] mb-3">
              <div className="flex gap-[12px] md:gap-[18px] items-center">
                <img
                  className="w-[65px] h-[60px] md:w-[88px] md:h-[85px] flex-shrink-0 ms-3 md:ms-5"
                  src={cardImg}
                  alt=""
                />
                <div className="flex flex-col justify-center pb-[12px] md:pb-[16px]">
                  <h2 className="text-[#191919] text-[18px] md:text-[22px] font-normal leading-normal pt-[10px] md:pt-[12px]">
                    Your portfolio is stopping you from getting that job
                  </h2>
                  <div className="flex gap-4">
                    <p className="text-[#292929] text-[11px] md:text-[13px] font-light leading-normal w-[55px] md:w-[65px] h-[20px] md:h-[24px] flex-shrink-0 rounded-[10px] bg-[#F2F2F2] flex justify-center items-center">
                      Portfolio
                    </p>
                    <p className="text-[#757575] text-[11px] md:text-[13px] font-light leading-normal">
                      3 min read
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Post 3 */}
            <div className="rounded-[10px] bg-[rgba(255,255,255,0.7)] mb-3">
              <div className="flex gap-[12px] md:gap-[18px] items-center">
                <img
                  className="w-[65px] h-[60px] md:w-[88px] md:h-[85px] flex-shrink-0 ms-3 md:ms-5"
                  src={cardImg}
                  alt=""
                />
                <div className="flex flex-col justify-center pb-[12px] md:pb-[16px]">
                  <h2 className="text-[#191919] text-[18px] md:text-[22px] font-normal leading-normal pt-[10px] md:pt-[12px]">
                    Your portfolio is stopping you from getting that job
                  </h2>
                  <div className="flex gap-4">
                    <p className="text-[#292929] text-[11px] md:text-[13px] font-light leading-normal w-[55px] md:w-[65px] h-[20px] md:h-[24px] flex-shrink-0 rounded-[10px] bg-[#F2F2F2] flex justify-center items-center">
                      Portfolio
                    </p>
                    <p className="text-[#757575] text-[11px] md:text-[13px] font-light leading-normal">
                      3 min read
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Post 4 */}
            <div className="rounded-[10px] bg-[rgba(255,255,255,0.7)] mb-3">
              <div className="flex gap-[12px] md:gap-[18px] items-center">
                <img
                  className="w-[65px] h-[60px] md:w-[88px] md:h-[85px] flex-shrink-0 ms-3 md:ms-5"
                  src={cardImg}
                  alt=""
                />
                <div className="flex flex-col justify-center pb-[12px] md:pb-[16px]">
                  <h2 className="text-[#191919] text-[18px] md:text-[22px] font-normal leading-normal pt-[10px] md:pt-[12px]">
                    Your portfolio is stopping you from getting that job
                  </h2>
                  <div className="flex gap-4">
                    <p className="text-[#292929] text-[11px] md:text-[13px] font-light leading-normal w-[55px] md:w-[65px] h-[20px] md:h-[24px] flex-shrink-0 rounded-[10px] bg-[#F2F2F2] flex justify-center items-center">
                      Portfolio
                    </p>
                    <p className="text-[#757575] text-[11px] md:text-[13px] font-light leading-normal">
                      3 min read
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Post 5 */}
            <div className="rounded-[10px] bg-[rgba(255,255,255,0.7)] mb-3">
              <div className="flex gap-[12px] md:gap-[18px] items-center">
                <img
                  className="w-[65px] h-[60px] md:w-[88px] md:h-[85px] flex-shrink-0 ms-3 md:ms-5"
                  src={cardImg}
                  alt=""
                />
                <div className="flex flex-col justify-center pb-[12px] md:pb-[16px]">
                  <h2 className="text-[#191919] text-[18px] md:text-[22px] font-normal leading-normal pt-[10px] md:pt-[12px]">
                    Your portfolio is stopping you from getting that job
                  </h2>
                  <div className="flex gap-4">
                    <p className="text-[#292929] text-[11px] md:text-[13px] font-light leading-normal w-[55px] md:w-[65px] h-[20px] md:h-[24px] flex-shrink-0 rounded-[10px] bg-[#F2F2F2] flex justify-center items-center">
                      Portfolio
                    </p>
                    <p className="text-[#757575] text-[11px] md:text-[13px] font-light leading-normal">
                      3 min read
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* pagination */}
      <div className="flex max-sm:flex-col md:flex-row justify-between md:pb-[105px] items-center max-sm:pt-10 max-sm:pb-10">
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          className="text-[#667085] text-[18px] md:text-[24px] font-medium leading-[20px] flex gap-2 justify-center items-center pb-4 md:pb-0"
          disabled={currentPage === 1}
        >
          <MdOutlineArrowBack />
          <h3 className="hidden md:block">Previous</h3>
        </button>

        {/* Pagination Numbers */}
        <div className="flex text-[#667085] text-[18px] md:text-[24px] font-medium leading-[20px] gap-1">
          {renderPageNumbers()}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="text-[#667085] text-[18px] md:text-[24px] font-medium leading-[20px] flex gap-2 justify-center items-center pt-4 md:pt-0"
          disabled={currentPage === totalPages}
        >
          <h3 className="hidden md:block">Next</h3>
          <MdOutlineArrowForward />
        </button>
      </div>
    </Container>
  );
};

export default BlogPost;
