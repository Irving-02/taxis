import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { Paper, Typography, Grid2 as Grid, Button } from "@mui/material";
import AgregarCobro from "./AgregarCobro";

const Cobros = () => {
  const [openCobro, setOpenCobro] = useState(false);
  const handleGuardarCobro = (data) => {
    console.log("Cobro guardado:", data);
  };
  return (
    <Layout>
      <Paper sx={{ boxShadow: 3, borderRadius: 5 }}>
        <Typography
          textAlign='center'
          fontFamily='monospace'
          fontWeight='bold'
          variant='h4'
        >
          Cobros
        </Typography>
      </Paper>
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        <Grid
          item
          size={{ sx: 12, sm: 12, md: 12, lg: 12, xl: 12 }}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Button onClick={() => setOpenCobro(true)} variant='contained'>
            Agregar
          </Button>
        </Grid>
      </Grid>
      <AgregarCobro
        open={openCobro}
        onClose={() => setOpenCobro(false)}
        onSubmit={handleGuardarCobro}
      />
    </Layout>
  );
};

export default Cobros;
