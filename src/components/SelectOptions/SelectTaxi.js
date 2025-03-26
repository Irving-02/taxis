import React, { Fragment } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import Select from "react-select";
import VehiclesContext from "../../context/Vehicles/VehiclesContext";
export default function SelectTaxi(props) {
  const { vehicles, getVehicles } = useContext(VehiclesContext);
  useEffect(() => {
    getVehicles();
  }, []);
  const selectStyles = {
    menu: (base) => ({
      ...base,
      zIndex: 100,
    }),
  };
  const detectarCambiosTaxi = (value) => {
    props.detectarCambiosTaxi(value);
  };
  const nuevoArreglo = vehicles.map((vehicle) => {
    const vehicleInfo = ` #${vehicle.eco} - ${vehicle.placa}`;
    return { value: vehicle.id, label: vehicleInfo };
  });
  return (
    <Fragment>
      <Select
        fullwith
        styles={selectStyles}
        onChange={(value) => detectarCambiosTaxi(value)}
        //className="basic-single"
        classNamePrefix='select'
        name='taxi-select'
        placeholder='Selecciona la unidad'
        options={nuevoArreglo}
      />
    </Fragment>
  );
}
