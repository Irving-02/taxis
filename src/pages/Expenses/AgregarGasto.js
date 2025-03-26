import React, { useContext, useState } from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";
import GastosContext from "../../context/GastosContext/GastosContext";
const AgregarGasto = ({ open, onClose }) => {
  const { crearGasto } = useContext(GastosContext);
  const [monto, setMonto] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [comprobante, setComprobante] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!monto.trim() || !descripcion.trim()) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    const formData = new FormData();
    formData.append("monto", monto);
    formData.append("descripcion", descripcion);
    if (comprobante) formData.append("comprobante", comprobante);

    crearGasto(formData); // Llamar la función para crear el gasto
    onClose(); // Cerrar el modal después de enviar
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        <Typography variant='h6' mb={2}>
          Registrar Gasto
        </Typography>
        <form onSubmit={handleSubmit}>
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
          <Button type='submit' variant='contained' color='primary' fullWidth>
            Guardar
          </Button>
        </form>
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
