import PropTypes from "prop-types";
import Logo from "@/assets/images/logo.png";

const AuthLayout = ({ children }) => {
  return (
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
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node,
};

export default AuthLayout;
