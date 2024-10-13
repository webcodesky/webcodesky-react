import Container from "../../../Components/Ui/Container/Container";

const PeopleSaying = () => {
  return (
    <div className="bg-[#FFF6EA]">
      <Container>
        <div className="flex gap-[80px] pt-[120px] pb-[82px]">
          <div className="flex-[1]">
            <h1>
              What Are People Saying{" "}
              <span className="text-[#FF6600]">About Us</span>{" "}
            </h1>
            <p className="mont pt-[30px] pb-[32px] text-[#CCCCCC]">
              We are very happy if you are satisfied with our service and
              products, let's read pure reviews from customers who bought our
              products.
            </p>
            <p>
              <span className="text-[48px] font-bold leading-[64px]">02</span>
              <span className="text-[#CCCCCC]">/ 05</span>
            </p>
          </div>
          <div className="flex-[2] bg-slate-600">hhh</div>
        </div>
      </Container>
    </div>
  );
};

export default PeopleSaying;
