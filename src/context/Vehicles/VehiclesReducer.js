import {
  ALL_VEHICLES,
  GET_VEHICLE,
  ADD_VEHICLE,
  UPDATE_VEHICLE,
  DELETE_VEHICLE,
  TOTAL_CARROS,
  TOTAL_TAXIS,
  TOTAL_TOLERADOS,
  TOTAL_VERIFICADOS,
} from "../../types";

const VehiclesReducer = (state, action) => {
  switch (action.type) {
    case ALL_VEHICLES:
      return {
        ...state,
        vehicles: action.payload,
      };
    case GET_VEHICLE:
      return {
        ...state,
        vehicle: action.payload,
      };
    case ADD_VEHICLE:
      return {
        ...state,
        vehicles: [...state.vehicles, action.payload],
      };
    case UPDATE_VEHICLE:
      return {
        ...state,
        vehicles: state.vehicles.map((vehicle) =>
          vehicle.id === action.payload.id ? action.payload : vehicle
        ),
      };
    case DELETE_VEHICLE:
      return {
        ...state,
        vehicles: state.vehicles.filter(
          (vehicle) => vehicle.id !== action.payload
        ),
      };
    case TOTAL_CARROS:
      return {
        ...state,
        total_carros: action.payload,
      };
    case TOTAL_TAXIS:
      return {
        ...state,
        total_taxis: action.payload,
      };
    case TOTAL_TOLERADOS:
      return {
        ...state,
        total_tolerados: action.payload,
      };
    case TOTAL_VERIFICADOS:
      return {
        ...state,
        total_verificados: action.payload,
      };
    default:
      return state;
  }
};

export default VehiclesReducer;
