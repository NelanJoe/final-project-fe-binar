import PropTypes from "prop-types";

import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { Helmet } from "react-helmet-async";

const BaseLayout = ({ children, title }) => {
  const path = window.location.pathname;
  const pathName = path.split("/").map((path) => {
    return path;
  });

  return (
    <>
      <Helmet>
        <title className="capitalize">
          {`${title || pathName}`} | Last King Academy
        </title>
      </Helmet>
      <Header />
      {children}
      <Footer />
    </>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default BaseLayout;
