import img1 from "../../../assets/popularCard/pop1.png";
import { FaStar } from "react-icons/fa";
const PopularServicesCard = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="w-[382px] h-[482px]">
        <img src={img1} alt="" />
        <div className="p-4">
          <div className="flex justify-between items-center">
            <span>Ecommece Website</span>
            <span className="text-[#FF6600]">Top</span>
          </div>
          <div className="flex gap-3 items-center mt-2.5">
            <span className="text-[#FF6600]">
              <FaStar />
            </span>
            <span>4.7 (30)</span>
          </div>
          <ul className="list-disc list-inside pl-4 space-y-1 leading-[20px] font-medium mt-2.5 text-[14px]">
            <li className="text-black">Fully Responsive Ecommerce Website</li>
            <li className="text-black">Mobile & User-friendly</li>
            <li className="text-black">
              Setup Different Shipping Methods & Tax Module
            </li>
            <li className="text-black">
              Add different functions depends on the client 
            </li>
            <li className="text-black">E Bay, Amazon Affiliate system </li>
            <li className="text-black">
              Payment gateway integration and Order tracking
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PopularServicesCard;
