import React, { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AuthContext from "../context/Auth/AuthContext";
import TaxisRoutes from "./TaxisRoutes";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Login from "../components/Auth/Login";

export default function AppRouter() {
  const { autenticado, usuarioAutenticado, cargando } = useContext(AuthContext);

  useEffect(() => {
    usuarioAutenticado();
  }, []);

  if (cargando) {
    return <h1>Cargando...</h1>;
  }

  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route element={<PublicRoute autenticado={autenticado} />}>
          <Route path='/login' element={<Login />} />
        </Route>

        {/* Rutas privadas */}
        <Route element={<PrivateRoute autenticado={autenticado} />}>
          <Route path='/*' element={<TaxisRoutes />} />
        </Route>

        {/* Redirección por defecto */}
        <Route
          path='*'
          element={<Navigate to={autenticado ? "/" : "/login"} />}
        />
      </Routes>
    </Router>
  );
}
