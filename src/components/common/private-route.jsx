import PropTypes from "prop-types";
import { Outlet, Navigate } from "react-router-dom";

import { useGetProfileQuery } from "@/stores";

const PrivateRoute = ({ children }) => {
  const { isSuccess, isError, error } = useGetProfileQuery();

  let content;

  if (isSuccess) {
    content = <Outlet /> ? <Outlet /> : children;
  }

  if (isError) {
    if (error?.status === 403) {
      return <Navigate to="/login" replace={true} />;
    } else {
      localStorage.removeItem("token");
      return <Navigate to="/" replace={true} />;
    }
  }

  return content;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
