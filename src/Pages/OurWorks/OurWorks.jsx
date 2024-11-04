import { useEffect, useState } from "react";
import Container from "../../Components/Ui/Container/Container";
import WorksCard from "./WorksCard/WorksCard";

const OurWorks = () => {
  const [categorys, setCategory] = useState([]);

  //   console.log(categorys);

  const [activeTab, setActiveTab] = useState("FullWebsite");

  useEffect(() => {
    fetch(`https://server.webcodesky.com/works/${activeTab}`)
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
        // console.log(data);
      });
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  // Tab labels and corresponding content

  return (
    <>
      <div className="pt-[100px] md:pt-[120px] bg-[#F5F5F5]">
        <Container>
          <div>
            {/* Title */}
            <h1 className="text-black text-[32px] sm:text-[48px] md:text-[64px] font-bold tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-2.56px] leading-tight text-center">
              Our <span className="text-[#F60]">Works</span>
            </h1>

            {/* Description */}
            <p className="text-[#747272] text-center px-[10px] md:px-[140px] lg:px-[340px] pt-2 pb-8 md:pb-[120px]">
              Provide Top-notch Web solution over the world.
            </p>
          </div>
        </Container>
      </div>
      <Container>
        {/* Tab Navigation */}
        <div className="flex gap-10 pt-5 pb-5 justify-center border-b-2 border-gray-200 relative">
          <button
            onClick={() => handleTabClick("FullWebsite")}
            className="text-black font-bold text-[16px] pb-2"
          >
            Full Website
          </button>
          <button
            onClick={() => handleTabClick("LandingPage")}
            className="text-black font-bold text-[16px] pb-2"
          >
            Landing Page
          </button>
          <button
            onClick={() => handleTabClick("Portfolio")}
            className="text-black font-bold text-[16px] pb-2"
          >
            Portfolio
          </button>

          {/* Underline for active tab */}
          <div
            className={`absolute bottom-0 h-[2px] bg-[#f60] transition-all duration-300`}
            style={{
              width: "100px",
              left:
                activeTab === "FullWebsite"
                  ? "calc(48% - 150px)"
                  : activeTab === "LandingPage"
                  ? "calc(51% - 50px)"
                  : "calc(54% + 50px)",
            }}
          ></div>
        </div>

        {/* Tab Content */}
        <div className="mt-10 text-gray-800 text-center">
          <p className="transition-opacity duration-500 ease-in-out opacity-100 grid grid-cols-1 md:grid-cols-3 gap-4">
            {categorys.map((category) => (
              <WorksCard key={category._id} category={category}></WorksCard>
            ))}
          </p>
        </div>

        <hr className="text-orange-400 mt-8" />
      </Container>
    </>
  );
};

export default OurWorks;
