import React, { useReducer } from "react";
import GastosReducer from "./GastosReducer";
import GastosContext from "./GastosContext";
import MethodGet, { MethodDelete, MethodPost } from "../../config/Service";
import {
  ALL_GASTOS,
  CREAR_GASTO,
  ELIMINAR_GASTO,
  SUMAR_GASTOS_MENSUAL,
  SUMAR_GASTOS_SEMANAL,
} from "../../types";

const GastosState = ({ children }) => {
  const initialState = {
    gastos: [],
    loading: false,
    error: null,
    suma_gastos_semanal: 0,
    suma_gastos_mensual: 0,
  };
  const [state, dispatch] = useReducer(GastosReducer, initialState);

  const getGastos = () => {
    let url = "/gastos";
    MethodGet(url)
      .then((res) => {
        dispatch({
          type: ALL_GASTOS,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const crearGasto = (data) => {
    let url = "/gastos";
    MethodPost(url, data)
      .then((res) => {
        dispatch({
          type: CREAR_GASTO,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log(error, "error al crear pago");
      });
  };

  const eliminarGasto = () => {
    let url = "/gastos";
    MethodDelete(url)
      .then((res) => {
        dispatch({
          type: ELIMINAR_GASTO,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log(error, "error al eliminar el pago");
      });
  };

  const sumarGastoSemanal = () => {
    let url = "/gastos/semanal";
    MethodGet(url)
      .then((res) => {
        dispatch({
          type: SUMAR_GASTOS_SEMANAL,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log(error, "error al obtener la suma semanal");
      });
  };

  const sumarGastoMensual = () => {
    let url = "/gastos/mensual";
    MethodGet(url)
      .then((res) => {
        dispatch({
          type: SUMAR_GASTOS_MENSUAL,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log(error, "error al obtener la suma mensual");
      });
  };

  return (
    <GastosContext.Provider
      value={{
        gastos: state.gastos,
        loading: state.loading,
        suma_gastos_mensual: state.suma_gastos_mensual,
        suma_gastos_semanal: state.suma_gastos_semanal,
        sumarGastoMensual,
        sumarGastoSemanal,
        eliminarGasto,
        crearGasto,
        getGastos,
      }}
    >
      {children}
    </GastosContext.Provider>
  );
};

export default GastosState;
