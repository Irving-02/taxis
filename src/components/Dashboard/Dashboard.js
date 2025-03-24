import { useContext } from "react";
import AuthContext from "../../context/Auth/AuthContext";

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-3xl font-bold'>Bienvenido, {user?.name}</h1>
      <button
        onClick={logout}
        className='bg-red-500 text-white p-2 mt-4 rounded'
      >
        Cerrar Sesión
      </button>
    </div>
  );
}
