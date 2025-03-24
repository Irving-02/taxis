import React, { useCallback, useReducer } from "react";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import MethodGet, { MethodPost, MethodPut } from "../../config/Service";
import headerConfig from "../../config/imageHeaders";
import Swal from "sweetalert2";

/**Importar componente token headers */
import tokenAuth from "../../config/TokenAuth";

import { SHOW_ERRORS_API, types } from "../../types";

const AuthState = (props) => {
  // State inicial
  const initialState = {
    token: localStorage.getItem("token"),
    autenticado: !!localStorage.getItem("token"),
    usuario: {},
    cargando: false,
    success: false,
    directions: [],
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // Función para obtener el usuario autenticado
  const usuarioAutenticado = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      tokenAuth(token); // Asegura que el token se adjunta a todas las peticiones
    } else {
      console.log("⚠️ No hay token en localStorage");
      return;
    }

    try {
      console.log("🔍 Verificando usuario en /clientAuth...");
      const { data } = await MethodGet("/clientAuth");

      console.log("✅ Usuario autenticado");

      dispatch({
        type: types.OBTENER_USUARIO,
        payload: data,
      });
    } catch (error) {
      console.error(
        "❌ Error obteniendo usuario:",
        error.response?.data || error.message
      );

      dispatch({
        type: types.LOGIN_ERROR,
      });
    }
  };
  // Función para registrar al usuario
  const registerUser = async (data) => {
    const url = "/distribucion/auth/register";
    try {
      const { data: response } = await MethodPost(url, data);

      // Guardar token en localStorage
      localStorage.setItem("token", response.token);

      // Establecer token en el header
      tokenAuth(response.token);

      dispatch({
        type: types.REGISTRO_EXITOSO,
        payload: response,
      });

      Swal.fire({
        title: "¡Registro exitoso!",
        text: "Te has registrado correctamente.",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });

      // Obtener datos del usuario autenticado
      usuarioAutenticado();
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.response?.data?.message || "Ocurrió un error.",
        icon: "error",
        showConfirmButton: false,
      });
    }
  };

  // Función para iniciar sesión
  const iniciarSesion = (datos) => {
    let url = "/login";
    MethodPost(url, datos)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        tokenAuth(res.data.token);
        dispatch({
          type: types.LOGIN_EXITOSO,
          payload: res.data,
        });
        usuarioAutenticado();
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          text: error.response.data.message,
          icon: "error",
        });
      });
  };
  //cuando el usuario Ccambia de contraseña
  const resetPassword = (datos) => {
    let url = "/reset-password";
    MethodPost(url, datos)
      .then((res) => {
        Swal.fire({
          title: "Contraseña!",
          text: "Modificada Correctamente",
          icon: "success",
          timer: 1000,
          showConfirmButton: false,
        });
        dispatch({
          type: types.USER_CHANGEPASSWORD,
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          text: error.response.data.message,
          icon: "error",
        });
      });
  };

  // Función para cerrar sesión
  const cerrarSesion = () => {
    localStorage.removeItem("token");
    dispatch({
      type: types.CERRAR_SESION,
    });
  };

  const eliminarCuenta = (id) => {
    Swal.fire({
      title: "Eliminar mi cuenta",
      allowOutsideClick: false,
      html: `
      <label>Ingresa el texto <b>Eliminar mi cuenta</b></label>
      <input type="text" id="delete" class="swal2-input" placeholder="Eliminar mi cuenta">`,
      confirmButtonText: "Confirmar",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      focusConfirm: false,
      preConfirm: () => {
        var delete_account = Swal.getPopup().querySelector("#delete").value;
        if (!delete_account) {
          Swal.showValidationMessage(
            `Por favor ingresa ingresa el texto para confirmar`
          );
        } else if (delete_account !== "Eliminar mi cuenta") {
          Swal.showValidationMessage(
            `El texto ingresado debe ser igual a Eliminar mi cuenta`
          );
        }
        return { delete_account: delete_account };
      },
    }).then((result) => {
      if (result.value) {
        // console.log(result.value);
        // delete_account = result.value.delete_account;
        let url = `/cliente/eliminar/${id}`;
        const formData = new FormData();
        formData.append("argument", result.value.delete_account);
        MethodPost(url, formData)
          .then((res) => {
            Swal.fire({
              icon: "success",
              title: `Eliminado `,
              text: "Su cuenta se ha borrado correctamente!",
              timer: 1500,
              showConfirmButton: false,
            });
            cerrarSesion();
            // dispatch({
            //   type: INCREASE_STOCK_PRODUCT,
            //   payload: res.data,
            // });
          })
          .catch((error) => {
            Swal.fire({
              Title: "Error",
              icon: "error",
              text: error.response.data.message,
              timer: 1500,
              showConfirmButton: false,
            });
          });
      }
    });
  };
  const saveFiscalData = (data) => {
    let url = `/distribucion/taxData/${data.id}`;
    MethodPost(url, data)
      .then((res) => {
        dispatch({
          type: types.SAVE_FISCAL_DATA,
          payload: res.data,
        });
        Swal.fire({
          title: "Datos actualizados",
          text: "la información se guardo correctamente",
          timer: 2500,
          icon: "success",
          showConfirmButton: false,
        });
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  const getFiscalData = useCallback(async (id) => {
    const url = `/distribucion/ShowTax/${id}`;
    try {
      const { data } = await MethodGet(url);
      return data;
    } catch (error) {
      console.error(error.response?.data || error.message);
      return null;
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        cargando: state.cargando,
        success: state.success,
        directions: state.directions,
        registerUser,
        iniciarSesion,
        cerrarSesion,
        usuarioAutenticado,
        eliminarCuenta,
        resetPassword,
        saveFiscalData,
        getFiscalData,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
