import React, { useContext, useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import PagosContext from "../../context/PagosContext/PagosContext";
import SelectTaxi from "../../components/SelectOptions/SelectTaxi";
const AgregarCobro = ({ open, onClose }) => {
  const [monto, setMonto] = useState("");
  const [fecha, setFecha] = useState("");
  const [tipo, setTipo] = useState("pago_administracion");
  const [taxi, setTaxi] = useState(null);
  const { crearPago } = useContext(PagosContext);
  const detectarCambiosTaxi = (value) => {
    setTaxi(value.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!monto.trim() || !fecha.trim()) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    const data = { monto, fecha, tipo };
    crearPago(data); // Llamar la función para crear el cobro
    onClose(); // Cerrar el modal después de enviar
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        <Typography variant='h6' mb={2}>
          Registrar Cobro
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
            label='Fecha'
            type='date'
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            sx={{ mb: 2 }}
          />
          <div style={{ marginBottom: "20px" }}>
            <SelectTaxi detectarCambiosTaxi={detectarCambiosTaxi} />
          </div>

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

export default AgregarCobro;
