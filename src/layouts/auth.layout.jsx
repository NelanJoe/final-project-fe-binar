import PropTypes from "prop-types";

const AuthLayout = ({ children }) => {
  return (
    <main>
      <section>
        <img src="" alt="" />
      </section>
      <section>{children}</section>
    </main>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node,
};

export default AuthLayout;
