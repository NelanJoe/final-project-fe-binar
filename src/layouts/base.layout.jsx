import PropTypes from "prop-types";

import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

const BaseLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.node,
};

export default BaseLayout;
