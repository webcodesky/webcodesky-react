import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AboutHome from "../Pages/AboutUs/AboutHome/AboutHome";
import BlogPage from "../Pages/BlogPages/BlogPageHome/BlogPage";
import BlogDetails from "../Pages/BlogPages/BlogDetails/BlogDetails";
import Service from "../Pages/Service/Service";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import OurWorks from "../Pages/OurWorks/OurWorks";
import GetAQuote from "../Pages/GetAQuote/GetAQuote";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/getquote",
        element: <GetAQuote></GetAQuote>,
      },
      {
        path: "/about",
        element: <AboutHome></AboutHome>,
      },
      {
        path: "/blog",
        element: <BlogPage></BlogPage>,
      },

      {
        path: "/blog/:id",
        element: <BlogDetails></BlogDetails>,
        loader: ({ params }) =>
          fetch(`https://server.webcodesky.com/blog/${params.id}`),
      },
      {
        path: "/service",
        element: <Service></Service>,
      },
      {
        path: "/service-details",
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/works",
        element: <OurWorks></OurWorks>,
      },
    ],
  },
]);

export default router;
