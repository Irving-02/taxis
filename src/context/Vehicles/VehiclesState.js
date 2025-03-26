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
    total_carros: 0,
    total_taxis: 0,
    total_tolerados: 0,
    total_verificados: 0,
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
      const { data } = await MethodPost("/taxis", vehicle);
      dispatch({
        type: ADD_VEHICLE,
        payload: data.taxi,
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
  const get_total_carros = () => {
    let url = "/total_carros";
    MethodGet(url)
      .then((res) => {
        dispatch({
          type: "TOTAL_CARROS",
          payload: res.data,
        });
      })
      .catch((error) => {
        console.error(
          "❌ Error obteniendo total de carros:",
          error.response?.data || error.message
        );
      });
  };
  const get_total_taxis = () => {
    let url = "/total_taxis";
    MethodGet(url)
      .then((res) => {
        dispatch({
          type: "TOTAL_TAXIS",
          payload: res.data,
        });
      })
      .catch((error) => {
        console.error(
          "❌ Error obteniendo total de taxis:",
          error.response?.data || error.message
        );
      });
  };
  const get_total_tolerados = () => {
    let url = "/total_tolerados";
    MethodGet(url)
      .then((res) => {
        dispatch({
          type: "TOTAL_TOLERADOS",
          payload: res.data,
        });
      })
      .catch((error) => {
        console.error(
          "❌ Error obteniendo total de tolerados:",
          error.response?.data || error.message
        );
      });
  };
  const get_total_verificados = () => {
    let url = "/total_verificados";
    MethodGet(url)
      .then((res) => {
        dispatch({
          type: "TOTAL_VERIFICADOS",
          payload: res.data,
        });
      })
      .catch((error) => {
        console.error(
          "❌ Error obteniendo total de verificados:",
          error.response?.data || error.message
        );
      });
  };
  return (
    <VehiclesContext.Provider
      value={{
        vehicles: state.vehicles,
        vehicle: state.vehicle,
        loading: state.loading,
        error: state.error,
        total_carros: state.total_carros,
        total_taxis: state.total_taxis,
        total_tolerados: state.total_tolerados,
        total_verificados: state.total_verificados,
        getVehicles,
        addVehicle,
        updateVehicle,
        deleteVehicle,
        get_total_carros,
        get_total_taxis,
        get_total_tolerados,
        get_total_verificados,
      }}
    >
      {children}
    </VehiclesContext.Provider>
  );
};

export default VehiclesState;
