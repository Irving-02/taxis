import {
  ACTUALIZAR_GASTO,
  ALL_GASTOS,
  CREAR_GASTO,
  ELIMINAR_GASTO,
  SUMAR_GASTOS_MENSUAL,
  SUMAR_GASTOS_SEMANAL,
} from "../../types";

const GastosReducer = (state, action) => {
  switch (action.type) {
    case ALL_GASTOS:
      return {
        ...state,
        gastos: action.payload,
      };
    case CREAR_GASTO:
      return {
        ...state,
        gastos: [...state.gastos, action.payload],
      };
    case ACTUALIZAR_GASTO:
      return {
        ...state,
        gastos: state.gastos.map((gasto) =>
          gasto.id === action.payload.id ? action.payload : gasto
        ),
      };
    case ELIMINAR_GASTO:
      return {
        ...state,
        gastos: state.gastos.filter((gasto) => gasto.id !== action.payload),
      };
    case SUMAR_GASTOS_MENSUAL:
      return {
        ...state,
        sumar_gastos_mensual: action.payload,
      };
    case SUMAR_GASTOS_SEMANAL:
      return {
        ...state,
        sumar_gastos_mesual: action.payload,
      };
    default:
      return state;
  }
};

export default GastosReducer;
