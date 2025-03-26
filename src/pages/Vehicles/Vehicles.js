import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { Grid2, Paper, Typography } from "@mui/material";
import TableVehicles from "../../components/Vehicles/TableVehicles";
import { Button } from "@mui/material";
import AddVehicles from "./AddVehicles";
import VehiclesContext from "../../context/Vehicles/VehiclesContext";
const Vehicles = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const { vehicles, getVehicles } = useContext(VehiclesContext);
  useEffect(() => {
    getVehicles();
  }, []);
  console.log(vehicles, "vehicles");

  return (
    <Layout>
      <Paper elevation={3} sx={{ borderRadius: 10 }}>
        <Typography variant='h4' fontFamily='monospace' align='center'>
          Vehículos
        </Typography>
      </Paper>
      <div
        style={{ marginTop: 8, display: "flex", justifyContent: "flex-end" }}
      >
        <Button variant='contained' color='primary' onClick={handleClickOpen}>
          Agregar Vehículo
        </Button>
      </div>
      <Grid2 size='auto' sx={{ mt: 4 }}>
        <TableVehicles data={vehicles} />
      </Grid2>
      <AddVehicles open={open} handleClose={handleClose} />
    </Layout>
  );
};

export default Vehicles;
