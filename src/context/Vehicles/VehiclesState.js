import React from "react";
import VehiclesReducer from "./VehiclesReducer";
import VehiclesContext from "./VehiclesContext";
import { useReducer } from "react";
import MethodGet, {
  MethodPost,
  MethodPut,
  MethodDelete,
} from "../../config/Service";
import {
  ALL_VEHICLES,
  ADD_VEHICLE,
  UPDATE_VEHICLE,
  DELETE_VEHICLE,
  VEHICLES_ERROR,
} from "../../types";
import tokenAuth from "../../config/TokenAuth";
const VehiclesState = ({ children }) => {
  const initialState = {
    vehicles: [],
    vehicle: {},
    loading: false,
    error: null,
  };
  const [state, dispatch] = useReducer(VehiclesReducer, initialState);

  const getVehicles = () => {
    let url = "/taxis/";
    MethodGet(url)
      .then((response) => {
        console.log("🚗 Vehículos recibidos:", response.data); // Verifica que no llegue vacío
        dispatch({
          type: ALL_VEHICLES,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.error(
          "❌ Error obteniendo vehículos:",
          error.response?.data || error.message
        );
      });
  };
  const addVehicle = async (vehicle) => {
    try {
      const { data } = await MethodPost("/vehicles", vehicle);
      dispatch({
        type: ADD_VEHICLE,
        payload: data,
      });
    } catch (error) {
      console.error(
        "❌ Error añadiendo vehículo:",
        error.response?.data || error.message
      );
      dispatch({
        type: VEHICLES_ERROR,
      });
    }
  };
  const updateVehicle = async (vehicle) => {
    try {
      const { data } = await MethodPut(`/vehicles/${vehicle.id}`, vehicle);
      dispatch({
        type: UPDATE_VEHICLE,
        payload: data,
      });
    } catch (error) {
      console.error(
        "❌ Error actualizando vehículo:",
        error.response?.data || error.message
      );
      dispatch({
        type: VEHICLES_ERROR,
      });
    }
  };
  const deleteVehicle = async (id) => {
    try {
      await MethodDelete(`/vehicles/${id}`);
      dispatch({
        type: DELETE_VEHICLE,
        payload: id,
      });
    } catch (error) {
      console.error(
        "❌ Error eliminando vehículo:",
        error.response?.data || error.message
      );
      dispatch({
        type: VEHICLES_ERROR,
      });
    }
  };
  return (
    <VehiclesContext.Provider
      value={{
        vehicles: state.vehicles,
        vehicle: state.vehicle,
        loading: state.loading,
        error: state.error,
        getVehicles,
        addVehicle,
        updateVehicle,
        deleteVehicle,
      }}
    >
      {children}
    </VehiclesContext.Provider>
  );
};

export default VehiclesState;
