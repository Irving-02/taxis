import { GET_DIRECTIONS_USER, types } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case types.REGISTRO_EXITOSO:
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("type_user", action.payload.client.type_user);
      return {
        ...state,
        autenticado: true,
        cargando: false,
        usuario: action.payload.client,
      };
    case types.LOGIN_EXITOSO:
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("type_user", action.payload.type_user);
      return {
        ...state,
        autenticado: true,
        cargando: false,
      };
    case types.RESET_PASSWORD:
    case types.OBTENER_USUARIO:
      return {
        ...state,
        autenticado: true,
        usuario: action.payload,
        cargando: false,
      };
    case types.USER_CHANGEPASSWORD:
      return {
        ...state,
        autenticado: true,
        cargando: false,
      };
    case types.USER_CHANGEPHOTO:
      return {
        ...state,
        autenticado: true,
        cargando: false,
        success: true,
      };
    case types.LOGIN_ERROR:
    case types.CERRAR_SESION:
      localStorage.removeItem("token");
      localStorage.removeItem("expires_at");
      localStorage.removeItem("type_user");
      return {
        ...state,
        token: null,
        usuario: null,
        autenticado: false,
        cargando: false,
      };
    default:
      return state;
  }
};
