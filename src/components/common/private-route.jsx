import PropTypes from "prop-types";
import { Outlet, Navigate } from "react-router-dom";

import { useGetProfileQuery } from "@/stores";

const PrivateRoute = ({ children }) => {
  const { isSuccess, isError } = useGetProfileQuery();

  let content;

  if (isSuccess) {
    content = <Outlet /> ? <Outlet /> : children;
  }

  if (isError) {
    return <Navigate to="/login" replace={true} />;
  }

  return content;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
