import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";

const AgregarCobro = ({ open, onClose, onSubmit }) => {
  const [monto, setMonto] = useState("");
  const [fecha, setFecha] = useState("");
  const [tipo, setTipo] = useState("pago_administracion");

  const handleSubmit = () => {
    if (!monto || !fecha) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    const data = { monto, fecha, tipo };
    onSubmit(data);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ ...modalStyle }}>
        <Typography variant='h6' mb={2}>
          Registrar Cobro
        </Typography>
        <TextField
          label='Monto'
          type='number'
          fullWidth
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          label='Fecha'
          type='date'
          fullWidth
          InputLabelProps={{ shrink: true }}
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          label='Tipo'
          select
          fullWidth
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          sx={{ mb: 2 }}
        >
          <MenuItem value='pago_administracion'>Pago Administración</MenuItem>
          <MenuItem value='multa'>Multa</MenuItem>
        </TextField>
        <Button variant='contained' color='primary' onClick={handleSubmit}>
          Guardar
        </Button>
      </Box>
    </Modal>
  );
};

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

export default AgregarCobro;
