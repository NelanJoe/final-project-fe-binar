import PropTypes from "prop-types";
import Logo from "@/assets/images/logo.png";
import { Helmet } from "react-helmet-async";

const AuthLayout = ({ children, title }) => {
  const path = window.location.pathname;
  const pathName = path.split("/").slice(1); 

  const dynamicTitle = title || pathName.join(" | ");

  const cleanTitle = dynamicTitle.replace(/-/g, " ");

  const capitalizedTitle = cleanTitle.replace(/\b[a-z]/g, (match) =>
    match.toUpperCase()
  );
  return (
    <>
      <Helmet>
        <title>{capitalizedTitle}</title>
      </Helmet>
      <section className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="flex items-center justify-center h-24 bg-dark-blue lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="logo"
            src={Logo}
            className="object-cover w-[280px] me-4 lg:w-[380px]"
          />
        </aside>
        {children}
      </section>
    </>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default AuthLayout;
