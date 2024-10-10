import { Link, useRouteError } from "react-router-dom";
import photo from "../../assets/errorImage.webp";

const ErrorPage = () => {
  const { error } = useRouteError();
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <img src={photo} alt="" />
        <div className="max-w-md text-center">
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            {error?.message}
          </p>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded bg-[#FF6600] text-white"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
