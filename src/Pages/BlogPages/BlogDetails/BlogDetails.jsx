import Container from "../../../Components/Ui/Container/Container";
import blogDetailsImg from "../../../assets/cardImg/image 1.png";
// import cardImg from "../../../assets/cardImg/image 1.png";
import blogImg from "../../../assets/blog-details-img.png";
import blogMessageImg from "../../../assets/message-img.png";
import blogFlowerImg from "../../../assets/flower.png";
import { useLoaderData } from "react-router-dom";
import RecentPost from "../RecentPost/RecentPost";

const BlogDetails = () => {
  const blogDetails = useLoaderData();
  //   console.log(blogDetails);

  if (!blogDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="md:pt-[210px] pt-[90px]  bg-[#F5F5F5] ">
        <Container>
          <div className="pb-[80px] md:pb-[102px] ">
            <div className="md:flex md:gap-[109px]">
              <div className="md:w-1/2">
                <h1 className="text-[#191919] text-[28px] md:text-[40px] font-semibold leading-tight">
                  {blogDetails.article.title}
                </h1>
                <p className="text-[#737373] text-[16px] md:text-[20px] font-medium leading-[1.5] tracking-[0.2px] pt-3 pb-4 md:pt-5 md:pb-7">
                  {blogDetails.article.description}
                </p>

                <div className="flex gap-2 items-center">
                  <p className="text-[#292929] text-[13px] font-light leading-normal w-[65px] h-[24px] flex-shrink-0 rounded-full bg-white flex justify-center items-center">
                    Portfolio
                  </p>
                  <p className="text-[#757575] text-[13px] font-light leading-normal">
                    {blogDetails.article.read_time}
                  </p>
                  <span className="flex items-center">
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
                  </span>
                </div>
              </div>
              <div className="md:w-1/2 max-sm:pt-5">
                <img
                  className="flex justify-center items-center"
                  src={blogDetailsImg}
                  alt=""
                />
              </div>
              {/* <div className="md:w-1/2 flex justify-center">
                <img
                  className="object-cover w-full h-auto"
                  src={blogDetailsImg}
                  alt="Blog Details"
                />
              </div> */}
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-[#fff]">
        <Container>
          {/* blog details */}
          <div className="md:pt-14 md:pb-[100px] max-sm:pb-20">
            <div className=" flex flex-col md:flex-row md:gap-[65px] gap-5">
              <div className="md:w-[724px] max-sm:pb-10">
                <p className="text-[#292929] text-[20px] font-light leading-[24px] text-justify pt-2">
                  An intense way to learn about the process and practice your
                  designs skills — My 1st hackathon Hackathons have been on my
                  mind since I heard it was a good way to gain experience as a
                  junior UX designer. As my portfolio. An intense way to learn
                  about the process and practice your designs skills — My 1st
                  hackathon Hackathons have been on my mind since I heard it was
                  a good way to gain experience as a junior UX designer.{" "}
                </p>
                <img className="pt-[18px] pb-[24px]" src={blogImg} alt="" />
                <p className="text-[#292929] text-[20px] font-light leading-[24px] text-justify">
                  An intense way to learn about the process and practice your
                  designs skills — My 1st hackathon Hackathons have been on my
                  mind since I heard it was a good way to gain experience as a
                  junior UX designer. As my portfolio. An intense way to learn
                  about the process and practice your designs skills — My 1st
                  hackathon Hackathons have been on my mind since I heard it was
                  a good way to gain experience as a junior UX designer.{" "}
                </p>
                <div className="py-10 md:px-[43px] flex flex-col justify-center items-center md:flex-row md:gap-3 ">
                  <div>
                    <img className="" src={blogMessageImg} alt="" />
                  </div>
                  <div>
                    <h1 className="text-[#000] text-[24px] font-[600] leading-[28.5px] pb-[10px]">
                      Subscribe to Get update
                    </h1>
                    <input
                      className="md:w-[407px] md:h-[56px] flex-shrink-0 rounded-[49px] border border-[rgba(0,0,0,0.18)] bg-[#FFF] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] ps-4 text-[20px] font-normal text-black"
                      type="text"
                      placeholder="Your E-mail here..."
                    />

                    <div className="pt-[16px]">
                      <button className="text-white text-[18px] font-medium leading-[28.5px] px-[22px] py-[12px] rounded-[10px] bg-[#F60]">
                        Subscribe Our Newsletter
                      </button>
                    </div>
                  </div>
                </div>
                <p className="text-[#292929] text-[20px] font-light leading-[24px] pb-[13px] text-justify">
                  An intense way to learn about the process and practice your
                  designs skills — My 1st hackathon Hackathons have been on my
                  mind since I heard it was a good way to gain experience as a
                  junior UX designer. As my portfolio. An intense way to learn
                  about the process and practice your designs skills — My 1st
                  hackathon Hackathons have been on my mind since I heard it was
                  a good way to gain experience as a junior UX designer.
                </p>
                <div className="md:flex md:gap-[22px] md:py-[13px]">
                  <div className="md:w-[60%]">
                    <p className="text-[#292929] text-[20px] font-light leading-[24px] md:py-[14px] text-justify">
                      An intense way to learn about the process and practice
                      your designs skills — My 1st hackathon Hackathons have
                      been on my mind since I heard it was a good way to gain
                      experience as a junior UX designer. As my portfolio. An
                      intense way to learn about the process and practice your
                      designs skills — My 1st hackathon Hackathons have been on
                      my mind since I heard it was a good way to gain experience
                      as a junior UX designer.{" "}
                    </p>
                  </div>
                  <div>
                    <img className="max-sm:py-5" src={blogFlowerImg} alt="" />
                  </div>
                </div>
                <p className="text-[#292929] text-[20px] font-light leading-[24px] text-justify">
                  An intense way to learn about the process and practice your
                  designs skills — My 1st hackathon Hackathons have been on my
                  mind since I heard it was a good way to gain experience as a
                  junior UX designer. As my portfolio. An intense way to learn
                  about the process and practice your designs skills — My 1st
                  hackathon Hackathons have been on my mind since I heard it was
                  a good way to gain experience as a junior UX designer.{" "}
                </p>
              </div>

              {/* Other Topic Section  */}
              <RecentPost></RecentPost>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default BlogDetails;

// import Container from "../../../Components/Ui/Container/Container";
// import blogDetailsImg from "../../../assets/image 1.png";
// import cardImg from "../../../assets/image 1.png";
// import blogImg from "../../../assets/blog-details-img.png";
// import blogMessageImg from "../../../assets/message-img.png";
// import blogFlowerImg from "../../../assets/flower.png";

// const BlogDetails = () => {
//   return (
//     <>
//       <div className="md:pt-[210px] pt-[150px] bg-[#F5F5F5]">
//         <Container>
//           <div className="pb-[80px] md:pb-[102px]">
//             <div className="md:flex md:gap-[109px] flex-col md:flex-row">
//               <div className="md:w-1/2 w-full">
//                 <h1 className="text-[#191919] text-[32px] md:text-[40px] font-semibold leading-none">
//                   Your portfolio is stopping you from getting that job
//                 </h1>
//                 <p className="text-[#737373] text-[18px] md:text-[20px] font-medium leading-[20px] tracking-[0.2px] md:pt-5 md:pb-7">
//                   Provide Top-Notch Web solutions over the world.
//                 </p>
//                 <div className="flex gap-[10px] flex-wrap">
//                   <p className="text-[#292929] text-[13px] font-light leading-normal w-auto h-[24px] flex-shrink-0 rounded-[10px] bg-[white] flex justify-center items-center">
//                     Portfolio
//                   </p>
//                   <p className="text-[#757575] text-[13px] font-light leading-normal">
//                     3 min read
//                   </p>
//                   <p>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="23"
//                       height="24"
//                       viewBox="0 0 23 24"
//                       fill="none"
//                     >
//                       <path
//                         d="M20.9833 6.46166C20.9833 7.86382 20.4596 9.20856 19.5274 10.2C18.5952 11.1915 17.3309 11.7485 16.0125 11.7485C14.6942 11.7485 13.4299 11.1915 12.4977 10.2C11.5655 9.20856 11.0418 7.86382 11.0418 6.46166C11.0418 5.0595 11.5655 3.71477 12.4977 2.72329C13.4299 1.73181 14.6942 1.1748 16.0125 1.1748C17.3309 1.1748 18.5952 1.73181 19.5274 2.72329C20.4596 3.71477 20.9833 5.0595 20.9833 6.46166ZM16.5648 4.11195C16.5648 3.95615 16.5066 3.80674 16.4031 3.69657C16.2995 3.58641 16.159 3.52452 16.0125 3.52452C15.866 3.52452 15.7256 3.58641 15.622 3.69657C15.5184 3.80674 15.4602 3.95615 15.4602 4.11195V5.87423H13.8033C13.6568 5.87423 13.5163 5.93612 13.4128 6.04629C13.3092 6.15645 13.251 6.30587 13.251 6.46166C13.251 6.61746 13.3092 6.76687 13.4128 6.87704C13.5163 6.9872 13.6568 7.04909 13.8033 7.04909H15.4602V8.81138C15.4602 8.96717 15.5184 9.11659 15.622 9.22675C15.7256 9.33692 15.866 9.39881 16.0125 9.39881C16.159 9.39881 16.2995 9.33692 16.4031 9.22675C16.5066 9.11659 16.5648 8.96717 16.5648 8.81138V7.04909H18.2218C18.3682 7.04909 18.5087 6.9872 18.6123 6.87704C18.7159 6.76687 18.7741 6.61746 18.7741 6.46166C18.7741 6.30587 18.7159 6.15645 18.6123 6.04629C18.5087 5.93612 18.3682 5.87423 18.2218 5.87423H16.5648V4.11195ZM16.5648 19.4062V12.8975C16.9386 12.8616 17.3084 12.7888 17.6694 12.6802V20.56C17.6694 20.6683 17.6411 20.7744 17.5879 20.8667C17.5346 20.959 17.4584 21.0339 17.3676 21.083C17.2768 21.1321 17.1751 21.1536 17.0736 21.145C16.9721 21.1365 16.8748 21.0983 16.7924 21.0346L11.0418 16.5866L5.29113 21.0346C5.20876 21.0983 5.11144 21.1365 5.00993 21.145C4.90842 21.1536 4.80666 21.1321 4.7159 21.083C4.62515 21.0339 4.54892 20.959 4.49566 20.8667C4.44239 20.7744 4.41415 20.6683 4.41406 20.56V5.28681C4.41406 4.50783 4.70501 3.76075 5.2229 3.20993C5.74079 2.65911 6.4432 2.34966 7.1756 2.34966H11.3256C11.0443 2.71207 10.801 3.10601 10.5999 3.52452H7.1756C6.73616 3.52452 6.31471 3.71019 6.00398 4.04068C5.69325 4.37117 5.51868 4.81942 5.51868 5.28681V19.4062L10.717 15.3859C10.8114 15.3129 10.9251 15.2736 11.0418 15.2736C11.1584 15.2736 11.2721 15.3129 11.3665 15.3859L16.5648 19.4062Z"
//                         fill="black"
//                       />
//                     </svg>
//                   </p>
//                 </div>
//               </div>
//               <div className="md:w-1/2 w-full flex justify-center items-center">
//                 <img src={blogDetailsImg} alt="" className="max-w-full" />
//               </div>
//             </div>
//           </div>
//         </Container>
//       </div>
//       <div className="bg-[#F5F5F5] md:pb-12 pb-8">
//         <Container>
//           <div className="flex flex-col md:flex-row md:gap-[38px] gap-4 justify-between">
//             <div className="md:w-[60%] w-full">
//               <img
//                 src={blogImg}
//                 alt=""
//                 className="md:max-w-[80%] max-w-full mx-auto"
//               />
//               <p className="text-[#737373] text-[14px] font-medium leading-[20px] text-center md:pt-5 pt-4">
//                 Provide Top-Notch Web solutions over the world.
//               </p>
//               <p className="text-[#292929] text-[16px] font-medium leading-[24px] text-center pt-4">
//                 When a client looks at your portfolio, they are looking for
//                 something that is going to grab their attention.
//               </p>
//               <p className="text-[#292929] text-[16px] font-medium leading-[24px] text-center pt-4">
//                 As a result, they will evaluate how creative you are based on
//                 your previous projects. They will also consider if you have done
//                 similar work in the past and how it is presented.
//               </p>
//               <p className="text-[#292929] text-[16px] font-medium leading-[24px] text-center pt-4">
//                 You can give them a link to your GitHub account, but it is best
//                 to include your best work on a portfolio site. This way, you can
//                 show what you can do and how your work fits into the big
//                 picture.
//               </p>
//               <p className="text-[#292929] text-[16px] font-medium leading-[24px] text-center pt-4">
//                 Moreover, some clients prefer to work with someone who has a
//                 more established history of working with others, so if you have
//                 done any collaboration projects, it is a great idea to include
//                 them.
//               </p>
//               <img
//                 src={blogFlowerImg}
//                 alt=""
//                 className="md:max-w-[60%] max-w-full mx-auto pt-6"
//               />
//               <p className="text-[#292929] text-[16px] font-medium leading-[24px] text-center pt-4">
//                 This is going to make your portfolio more appealing and prove
//                 that you have been working in this field for a while. Clients
//                 will appreciate the fact that you have done work for others
//                 before and that you have succeeded.
//               </p>
//             </div>
//             <div className="md:w-[40%] w-full flex flex-col items-center">
//               <div className="md:w-[70%] w-full md:h-[650px] h-[300px] border border-[#D1D1D1] bg-[#FFFFFF] md:p-[38px] p-3 rounded-2xl flex flex-col justify-between">
//                 <h1 className="text-[#191919] text-[20px] font-semibold">
//                   Related
//                 </h1>
//                 <div className="flex gap-[15px] overflow-x-auto">
//                   <img
//                     src={cardImg}
//                     alt=""
//                     className="w-[120px] h-[120px] rounded-md"
//                   />
//                   <img
//                     src={cardImg}
//                     alt=""
//                     className="w-[120px] h-[120px] rounded-md"
//                   />
//                   <img
//                     src={cardImg}
//                     alt=""
//                     className="w-[120px] h-[120px] rounded-md"
//                   />
//                   <img
//                     src={cardImg}
//                     alt=""
//                     className="w-[120px] h-[120px] rounded-md"
//                   />
//                 </div>
//               </div>
//               <div className="md:w-[70%] w-full md:h-[200px] h-[300px] border border-[#D1D1D1] bg-[#FFFFFF] md:p-[38px] p-3 rounded-2xl md:mt-5 mt-6 flex flex-col justify-between">
//                 <div className="flex gap-[15px]">
//                   <img
//                     src={blogMessageImg}
//                     alt=""
//                     className="w-[45px] h-[45px]"
//                   />
//                   <div className="flex flex-col">
//                     <h1 className="text-[#191919] text-[18px] font-semibold leading-none">
//                       Lets Talk
//                     </h1>
//                     <p className="text-[#737373] text-[14px] font-medium leading-normal">
//                       Have an interesting project?
//                     </p>
//                   </div>
//                 </div>
//                 <button className="bg-[#0077FF] text-[white] py-2 rounded-md hover:bg-[#0056b3] transition-colors duration-200">
//                   Get in Touch
//                 </button>
//               </div>
//             </div>
//           </div>
//         </Container>
//       </div>
//     </>
//   );
// };

// export default BlogDetails;
