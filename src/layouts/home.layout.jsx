import PropTypes from "prop-types";

import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

const HomeLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

HomeLayout.propTypes = {
  children: PropTypes.node,
};

export default HomeLayout;
