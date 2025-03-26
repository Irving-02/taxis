import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { Button, Grid2 as Grid, Paper, Typography } from "@mui/material";
import AgregarGasto from "./AgregarGasto";

const Expenses = () => {
  const [openGasto, setOpenGasto] = useState(false);

  const handleGuardarGasto = (data) => {
    console.log("Gasto guardado:", data);
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
          Gastos
        </Typography>
      </Paper>
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        <Grid
          item
          size={{ sx: 12, sm: 12, md: 12, lg: 12, xl: 12 }}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Button onClick={() => setOpenGasto(true)} variant='contained'>
            Agregar
          </Button>
        </Grid>
      </Grid>
      <AgregarGasto
        open={openGasto}
        onClose={() => setOpenGasto(false)}
        onSubmit={handleGuardarGasto}
      />
    </Layout>
  );
};

export default Expenses;
