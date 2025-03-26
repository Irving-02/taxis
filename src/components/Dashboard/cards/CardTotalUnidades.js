import React, { useContext, useEffect } from "react";
import { formattedDate } from "../../../utils/Today";
import { Box, Paper, Stack, Typography } from "@mui/material";
import CarIcon from "../../icons/CarIcon";
import VehiclesContext from "../../../context/Vehicles/VehiclesContext";
const CardTotalUnidades = () => {
  const { total_carros, get_total_carros } = useContext(VehiclesContext);
  useEffect(() => {
    get_total_carros();
  }, []);
  return (
    <Paper
      elevation={3}
      sx={{
        padding: 1,
        borderRadius: 2,
        backgroundColor: "#f5f5f5",
        maxWidth: 400,
        margin: "0 auto",
      }}
    >
      {/* Icono de la tarjeta */}
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        sx={{
          position: "relative",
          height: 120,
          backgroundColor: "#b0bec5",
          borderRadius: 2,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: -2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CarIcon width={190} />
        </Box>
      </Box>

      {/* Encabezado */}
      <Box sx={{ textAlign: "center", marginTop: 7 }}>
        <Typography
          variant='h6'
          sx={{ fontWeight: "bold", color: "#424242", mt: 3 }}
        >
          Unidades registradas
        </Typography>
        <Typography
          variant='subtitle2'
          sx={{ color: "#757575", marginTop: 0.5 }}
        >
          {formattedDate}
        </Typography>
      </Box>

      {/* Información de ventas */}
      <Stack
        direction='row'
        justifyContent='center'
        alignItems='center'
        sx={{
          backgroundColor: "#b0bec5",
          color: "#fff",
          padding: 1.5,
          borderRadius: 1,
          marginTop: 2,
        }}
      >
        <Typography variant='h4' sx={{ fontWeight: "bold", color: "#000000" }}>
          {total_carros ? total_carros.total : 0}
        </Typography>
      </Stack>
    </Paper>
  );
};

export default CardTotalUnidades;
