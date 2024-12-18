import { FaStar } from "react-icons/fa";
import img3 from "../../../assets/popularCard/pop3.png";

const ServiceCard = () => {
  return (
    <div className="w-full md:w-[382px] md:h-[482px] border-2 bg-[#F5F5F5] rounded-lg shadow-2xl">
      <img src={img3} alt="" />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <span className="text-[24px] font-semibold leading-[27px]">
            Web Design
          </span>
          <span className="text-[#FF6600]">Top</span>
        </div>
        <div className="flex gap-3 items-center mt-2.5">
          <span className="text-[#FF6600]">
            <FaStar />
          </span>
          <span className="font-semibold text-[14px]">4.6 (65)</span>
        </div>
        <ul className="list-disc list-inside pl-2 space-y-1 leading-[20px] font-medium mt-2.5 text-[14px]">
          <li className="text-black">Fully Responsive Ecommerce Website</li>
          <li className="text-black">Mobile & User-friendly</li>
          <li className="text-black">
            Setup Different Shipping Methods & Tax Module
          </li>
          <li className="text-black">
            Add different functions depending on the client
          </li>
          <li className="text-black">E Bay, Amazon Affiliate system</li>
          <li className="text-black">
            Payment gateway integration and Order tracking
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
