import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";

const AgregarGasto = ({ open, onClose, onSubmit }) => {
  const [monto, setMonto] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [comprobante, setComprobante] = useState(null);

  const handleSubmit = () => {
    if (!monto || !descripcion) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    const formData = new FormData();
    formData.append("monto", monto);
    formData.append("descripcion", descripcion);
    if (comprobante) formData.append("comprobante", comprobante);

    onSubmit(formData);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ ...modalStyle }}>
        <Typography variant='h6' mb={2}>
          Registrar Gasto
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
          label='Descripción'
          fullWidth
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          sx={{ mb: 2 }}
        />
        <input
          type='file'
          onChange={(e) => setComprobante(e.target.files[0])}
          accept='image/*, application/pdf'
          style={{ marginBottom: "16px" }}
        />
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

export default AgregarGasto;
