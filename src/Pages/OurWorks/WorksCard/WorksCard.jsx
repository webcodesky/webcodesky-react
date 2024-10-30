import { Link } from "react-router-dom";

const WorksCard = ({ category }) => {
  const { title, img_link, live_site_link } = category || {};

  return (
    <>
      <div className="relative w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg group">
        {/* Image */}
        <img
          src={img_link}
          alt={title}
          className="w-full h-48 object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />

        {/* Red Overlay and Button */}
        <div className="absolute inset-0 bg-[#f60] bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 gap-3">
          <a
            href={live_site_link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-red-600 font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-gray-200 transition-colors"
          >
            Demo
          </a>
          <Link
            to="/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-red-600 font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-gray-200 transition-colors"
          >
            Get One
          </Link>
        </div>

        {/* Content */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 z-10">
          {/* Title */}
          <h2 className="text-white text-lg font-semibold pb-3">{title}</h2>

          {/* Description */}
        </div>
      </div>
    </>
  );
};

export default WorksCard;
