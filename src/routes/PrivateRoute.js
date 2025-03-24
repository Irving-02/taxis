import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Home from "../pages/Home/Home";

const PrivateRoute = ({ autenticado }) => {
  return autenticado ? <Outlet /> : <Navigate to='/login' />;
};
PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default PrivateRoute;
