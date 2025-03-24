import {
  ALL_VEHICLES,
  GET_VEHICLE,
  ADD_VEHICLE,
  UPDATE_VEHICLE,
  DELETE_VEHICLE,
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
    default:
      return state;
  }
};

export default VehiclesReducer;
