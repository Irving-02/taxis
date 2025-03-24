import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../context/Auth/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <p>Cargando...</p>;

  return user ? children : <Navigate to='/login' />;
}
