import { Link } from "react-router-dom";
import Container from "../../../Components/Ui/Container/Container";

const Consulting = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>
          {" "}
          <h2 className="pt-10 pb-2.5">Consulting Agency For Your Business</h2>
          <p className="mont pb-[45px]">
            the quick fox jumps over the lazy dog
          </p>
        </div>
        <div>
          <Link to="/contact">
            <button className="btn-sm md:btn mb-10 md:mb-0 py-2">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Consulting;
