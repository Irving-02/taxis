import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import {
  TextField,
  Button,
  IconButton,
  Typography,
  Box,
  Container,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import AuthContext from "../../context/Auth/AuthContext";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { iniciarSesion } = useContext(AuthContext);
  const navigate = useNavigate(); // Instancia de useNavigate
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await iniciarSesion(data);
    navigate("/dashboard"); // Redirigir al Dashboard después del login exitoso
  };

  return (
    <Container
      maxWidth='auto'
      sx={{
        display: "flex",
        height: "100vh",
        bgcolor: "primary.main",
        padding: 2,
      }}
    >
      {/* Left Side */}
      <Box
        flex={1}
        display={{ xs: "none", md: "flex" }}
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        bgcolor='primary.main'
        color='white'
        p={4}
        sx={{
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20,
        }}
      >
        <Typography variant='h2' fontWeight='bold'>
          ¡Bienvenido!
        </Typography>
        <img
          src={require("../../assets/image/sport_car.png")}
          alt='Sport Car'
        />
      </Box>

      {/* Right Side */}
      <Box
        flex={1}
        component='form'
        onSubmit={handleSubmit(onSubmit)}
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        p={4}
        boxShadow={3}
        bgcolor='white'
        sx={{
          borderRadius: 40,
          zIndex: 999,
        }}
      >
        <img
          src={require("../../assets/image/drive_car.png")}
          alt='Drive Car'
        />
        <Typography
          variant='h4'
          fontWeight='bold'
          mb={2}
          fontFamily='monospace'
        >
          Iniciar Sesión
        </Typography>

        <Box width='100%' maxWidth={400}>
          <TextField
            fullWidth
            label='Correo Electrónico'
            type='email'
            variant='outlined'
            margin='normal'
            {...register("email", { required: "El correo es obligatorio" })}
            error={!!errors.email}
            helperText={errors.email?.message}
            sx={{ fontFamily: "monospace" }}
          />

          {/* Password Input */}
          <Box position='relative' display='flex' alignItems='center'>
            <TextField
              fullWidth
              label='Contraseña'
              type={showPassword ? "text" : "password"}
              variant='outlined'
              margin='normal'
              {...register("password", {
                required: "La contraseña es obligatoria",
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
              sx={{ fontFamily: "monospace" }}
            />
            <IconButton
              onClick={() => setShowPassword(!showPassword)}
              sx={{ position: "absolute", right: 10 }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </Box>

          {/* Sign Up Button */}
          <Button
            fullWidth
            type='submit'
            variant='contained'
            color='primary'
            sx={{ mt: 2, py: 1.5, fontFamily: "monospace" }}
          >
            Iniciar Sesión
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
