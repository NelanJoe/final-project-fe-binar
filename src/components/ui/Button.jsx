import PropTypes from "prop-types";

const Button = ({ onClick, children, ...otherProps }) => {
  return (
    <button onClick={onClick} {...otherProps}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
