import React, { useReducer } from "react";
import PagosContext from "./PagosContext";
import PagosReducer from "./PagosReducer";
import MethodGet, { MethodDelete, MethodPost } from "../../config/Service";
import {
  ALL_PAGOS,
  CREAR_PAGO,
  ELIMINAR_PAGO,
  SUMAR_PAGOS_MESUAL,
  SUMAR_PAGOS_SEMANAL,
} from "../../types";
const PagosState = ({ children }) => {
  const initialState = {
    pagos: [],
    loading: false,
    error: null,
    suma_pagos_semanal: 0,
    suma_pagos_mensual: 0,
  };
  const [state, dispatch] = useReducer(PagosReducer, initialState);

  const getPagos = () => {
    let url = "/pagos";
    MethodGet(url)
      .then((res) => {
        dispatch({
          type: ALL_PAGOS,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const crearPagos = (data) => {
    let url = "/pagos";
    MethodPost(url, data)
      .then((res) => {
        dispatch({
          type: CREAR_PAGO,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log(error, "error al crear pago");
      });
  };

  const eliminarPago = () => {
    let url = "/pagos";
    MethodDelete(url)
      .then((res) => {
        dispatch({
          type: ELIMINAR_PAGO,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log(error, "error al eliminar el pago");
      });
  };

  const sumarPagosSemanal = () => {
    let url = "/pagos/semanal";
    MethodGet(url)
      .then((res) => {
        dispatch({
          type: SUMAR_PAGOS_SEMANAL,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log(error, "error al obtener la suma semanal");
      });
  };

  const sumarPagosMensual = () => {
    let url = "/pagos/mensual";
    MethodGet(url)
      .then((res) => {
        dispatch({
          type: SUMAR_PAGOS_MESUAL,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log(error, "error al obtener la suma mensual");
      });
  };

  return (
    <PagosContext.Provider
      value={{
        pagos: state.pagos,
        loading: state.loading,
        suma_pagos_mensual: state.suma_pagos_mensual,
        suma_pagos_semanal: state.suma_pagos_semanal,
        sumarPagosMensual,
        sumarPagosSemanal,
        eliminarPago,
        crearPagos,
        getPagos,
      }}
    >
      {children}
    </PagosContext.Provider>
  );
};

export default PagosState;
