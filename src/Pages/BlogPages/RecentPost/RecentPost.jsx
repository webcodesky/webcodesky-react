import { useEffect, useState } from "react";
import cardImg from "../../../assets/cardImg/image 1.png";
import { Link } from "react-router-dom";

const RecentPost = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  //   console.log(blogs);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://server.webcodesky.com/blogs");
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    fetchBlogs();
  }, []);

  const recentPosts = blogs.slice(-4).reverse();
  // console.log(recentPosts);
  return (
    <div className="w-full md:w-[444px] bg-[#F5F5F5] rounded-[15px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-4 max-h-[550px] overflow-y-hidden">
      <h2 className="text-[#252B42] text-[32px] md:text-[40px] font-bold leading-[40px] md:leading-[57px] tracking-[0.2px] ps-[10px] md:ps-[15px]">
        Recent <span className="text-[#F60]">Post</span>
      </h2>

      {/* Post 1 */}
      {loading ? (
        <div className="flex justify-center items-center py-10">
          <span className="loading loading-ball loading-xs"></span>
          <span className="loading loading-ball loading-sm"></span>
          <span className="loading loading-ball loading-md"></span>
          <span className="loading loading-ball loading-lg"></span>
        </div>
      ) : (
        <div className="rounded-[10px] bg-[rgba(255,255,255,0.7)] mb-3">
          {recentPosts.slice(0, 3).map((post, index) => (
            <Link to={`/blog-details/${post._id}`} key={index}>
              <div
                key={index}
                className="flex gap-[12px] md:gap-[18px] items-center"
              >
                <img
                  className="w-[65px] h-[60px] md:w-[88px] md:h-[85px] flex-shrink-0 ms-3 md:ms-5"
                  src={cardImg}
                  alt=""
                />
                <div className="flex flex-col justify-center pb-[12px] md:pb-[16px]">
                  <h2 className="text-[#191919] text-[18px] md:text-[22px] font-normal leading-normal pt-[10px] md:pt-[12px]">
                    {post.article.title}
                  </h2>
                  <div className="flex gap-4">
                    <p className="text-[#292929] text-[11px] md:text-[13px] font-light leading-normal w-[55px] md:w-[65px] h-[20px] md:h-[24px] flex-shrink-0 rounded-[10px] bg-[#F2F2F2] flex justify-center items-center">
                      Portfolio
                    </p>
                    <p className="text-[#757575] text-[11px] md:text-[13px] font-light leading-normal">
                      {post.article.read_time}
                    </p>
                    <p className="text-[#757575] text-[11px] md:text-[13px] font-light leading-normal">
                      {post.author.post_date}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentPost;
