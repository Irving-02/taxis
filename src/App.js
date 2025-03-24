import React from "react";
import AppRouter from "./routes/AppRouter";
import AuthState from "./context/Auth/AuthState";
import VehiclesState from "./context/Vehicles/VehiclesState";
import tokenAuth from "./config/TokenAuth";
function App() {
  const token = localStorage.getItem("token");

  if (token) {
    tokenAuth(token);
    console.log("✅ Token configurado en Axios al iniciar la app:", token);
  } else {
    console.error("❌ No se encontró un token en localStorage.");
  }
  return (
    <>
      <AuthState>
        <VehiclesState>
          <AppRouter />
        </VehiclesState>
      </AuthState>
    </>
  );
}

export default App;
