import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import useScrollToTop from "../Hooks/useScrollToTop";

const Main = () => {
  // Call the hook at the top level of the component
  useScrollToTop();

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
