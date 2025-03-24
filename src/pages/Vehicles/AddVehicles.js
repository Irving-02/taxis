import React from "react";
import { useForm, Controller } from "react-hook-form";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid2,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='down' ref={ref} {...props} />;
});

const schema = yup.object().shape({
  titular: yup.string().required("El titular es obligatorio"),
  telefono: yup
    .string()
    .matches(/^\d{10}$/, "El teléfono debe tener 10 dígitos")
    .required("El teléfono es obligatorio"),
  eco: yup.string().required("El N° Eco es obligatorio"),
  placa: yup.string().required("La placa es obligatoria"),
  serie: yup.string().required("El N° Serie es obligatorio"),
  anio: yup
    .number()
    .min(1900, "Año no válido")
    .max(new Date().getFullYear(), "Año no válido")
    .required("El año es obligatorio"),
  verificado: yup.string().required("Este campo es obligatorio"),
  tipo: yup.string().required("Este campo es obligatorio"),
});

export default function FullScreenDialog({ open, handleClose, saveVehicle }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      titular: "",
      telefono: "",
      eco: "",
      placa: "",
      serie: "",
      anio: "",
      verificado: "Si",
      tipo: "Taxi",
    },
  });

  const onSubmit = (data) => {
    saveVehicle(data);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} TransitionComponent={Transition}>
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton
            edge='start'
            color='inherit'
            onClick={handleClose}
            aria-label='close'
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant='h6' component='div'>
            Registrar nueva unidad
          </Typography>
        </Toolbar>
      </AppBar>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid2 container spacing={2} sx={{ padding: "20px" }}>
          <Grid2 item size={{ xs: 12, sm: 6 }}>
            <Controller
              name='titular'
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label='Titular'
                  fullWidth
                  error={!!errors.titular}
                  helperText={errors.titular?.message}
                />
              )}
            />
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 6 }}>
            <Controller
              name='telefono'
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label='Teléfono de contacto'
                  fullWidth
                  error={!!errors.telefono}
                  helperText={errors.telefono?.message}
                />
              )}
            />
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 6 }}>
            <Controller
              name='eco'
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label='N° Eco'
                  fullWidth
                  error={!!errors.eco}
                  helperText={errors.eco?.message}
                />
              )}
            />
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 6 }}>
            <Controller
              name='placa'
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label='Placa'
                  fullWidth
                  error={!!errors.placa}
                  helperText={errors.placa?.message}
                />
              )}
            />
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 6 }}>
            <Controller
              name='serie'
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label='N° Serie'
                  fullWidth
                  error={!!errors.serie}
                  helperText={errors.serie?.message}
                />
              )}
            />
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 6 }}>
            <Controller
              name='anio'
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label='Año'
                  fullWidth
                  error={!!errors.anio}
                  helperText={errors.anio?.message}
                />
              )}
            />
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 6 }}>
            <Controller
              name='verificado'
              control={control}
              render={({ field }) => (
                <FormControl>
                  <FormLabel>¿Está verificado?</FormLabel>
                  <RadioGroup {...field} row>
                    <FormControlLabel
                      value='Si'
                      control={<Radio />}
                      label='Si'
                    />
                    <FormControlLabel
                      value='No'
                      control={<Radio />}
                      label='No'
                    />
                  </RadioGroup>
                </FormControl>
              )}
            />
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 6 }}>
            <Controller
              name='tipo'
              control={control}
              render={({ field }) => (
                <FormControl>
                  <FormLabel>¿Tipo de vehículo?</FormLabel>
                  <RadioGroup {...field} row>
                    <FormControlLabel
                      value='Taxi'
                      control={<Radio />}
                      label='Taxi'
                    />
                    <FormControlLabel
                      value='Tolerado'
                      control={<Radio />}
                      label='Tolerado'
                    />
                  </RadioGroup>
                </FormControl>
              )}
            />
          </Grid2>
          <Grid2
            size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              variant='contained'
              fullWidth
              size='large'
              onClick={handleSubmit(onSubmit)}
            >
              Guardar
            </Button>
          </Grid2>
        </Grid2>
      </form>
    </Dialog>
  );
}
