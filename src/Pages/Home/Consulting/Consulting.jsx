import Container from "../../../Components/Ui/Container/Container";

const Consulting = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>
          {" "}
          <h1 className="pt-10 pb-2.5">Consulting Agency For Your Business</h1>
          <p className="mont pb-[45px] text-[12px] md:text-[14px]">
            the quick fox jumps over the lazy dog
          </p>
        </div>
        <div>
          <button className="btn-sm md:btn mb-10 md:mb-0 py-2">
            Contact Us
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Consulting;
