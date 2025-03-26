import {
  ACTUALIZAR_PAGO,
  ALL_PAGOS,
  CREAR_PAGO,
  ELIMINAR_PAGO,
  SUMAR_PAGOS_MESUAL,
  SUMAR_PAGOS_SEMANAL,
} from "../../types";

const PagosReducer = (state, action) => {
  switch (action.type) {
    case ALL_PAGOS:
      return {
        ...state,
        pagos: action.payload,
      };
    case CREAR_PAGO:
      return {
        ...state,
        pagos: [...state.pagos, action.payload],
      };
    case ACTUALIZAR_PAGO:
      return {
        ...state,
        pagos: state.pagos.map((pago) =>
          pago.id === action.payload.id ? action.payload : pago
        ),
      };
    case ELIMINAR_PAGO:
      return {
        ...state,
        pagos: state.pagos.filter((pago) => pago.id !== action.payload),
      };
    case SUMAR_PAGOS_MESUAL:
      return {
        ...state,
        sumar_pagos_mensual: action.payload,
      };
    case SUMAR_PAGOS_SEMANAL:
      return {
        ...state,
        sumar_pagos_mesual: action.payload,
      };
    default:
      return state;
  }
};

export default PagosReducer;
