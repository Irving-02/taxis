import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import Login from "../components/Auth/Login";

const PublicRoute = ({ autenticado }) => {
  return autenticado ? <Navigate to='/' /> : <Login />;
};

PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default PublicRoute;
