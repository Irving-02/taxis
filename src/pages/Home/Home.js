import { Button, Card } from "@mui/material";
import React, { useContext } from "react";
import AuthContext from "../../context/Auth/AuthContext";
import Layout from "../../components/Layout/Layout";
import Grid from "@mui/material/Grid2";
import CardTotalUnidades from "../../components/Dashboard/cards/CardTotalUnidades";
import CardTotalTaxis from "../../components/Dashboard/cards/CardTotalTaxis";
import CardTotalTolerados from "../../components/Dashboard/cards/CardTotaTolerados";
import CardTotalVerificados from "../../components/Dashboard/cards/CardTotalVerificados";
import CardTotalSinVerificar from "../../components/Dashboard/cards/CardTotalSinVerificar";
const Home = () => {
  const { usuario } = useContext(AuthContext);

  return (
    <Layout>
      <div>
        <h1 style={{ color: "black" }}>
          Bienvenido {usuario ? usuario.name : ""}{" "}
        </h1>
      </div>
      <Grid container spacing={2}>
        <Grid item size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 3 }}>
          <CardTotalUnidades />
        </Grid>
        <Grid item size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 3 }}>
          <CardTotalTaxis />
        </Grid>
        <Grid item size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 3 }}>
          <CardTotalTolerados />
        </Grid>
        <Grid item size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 3 }}>
          <CardTotalVerificados />
        </Grid>
        {/* <Grid item size={3} md={6} lg={4}>
          <CardTotalSinVerificar />
        </Grid> */}
      </Grid>
    </Layout>
  );
};

export default Home;
