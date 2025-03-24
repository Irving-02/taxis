import React, { useEffect, useState } from "react";
import $ from "jquery";
import "datatables.net-bs5";
import "datatables.net-responsive-bs5";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";

const TableVehicles = ({ data }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data.length === 0) return; // Evitar inicializar DataTables con datos vacíos

    setLoading(false); // Marcar que los datos han sido cargados

    setTimeout(() => {
      if (!$.fn.DataTable.isDataTable("#myTable")) {
        $("#myTable").DataTable({
          responsive: true,
          paging: true,
          searching: true,
          ordering: true,
          info: true,
          autoWidth: false,
          language: {
            lengthMenu: "Mostrar _MENU_ registros por página",
            zeroRecords: "No se encontraron resultados",
            info: "Mostrando _START_ a _END_ de _TOTAL_ registros",
            infoEmpty: "Mostrando 0 a 0 de 0 registros",
            infoFiltered: "(filtrado de _MAX_ registros totales)",
            search: "Buscar:",
            paginate: {
              first: "Primero",
              last: "Último",
              next: "Siguiente",
              previous: "Anterior",
            },
          },
        });
      }
    }, 100);

    return () => {
      if ($.fn.DataTable.isDataTable("#myTable")) {
        $("#myTable").DataTable().destroy();
      }
    };
  }, [data]); // Se ejecuta solo cuando cambian los datos

  return (
    <div style={{ width: "100%", padding: "20px" }}>
      {loading ? (
        <div className='text-center'>
          <div className='spinner-border text-primary' role='status'>
            <span className='visually-hidden'>Cargando...</span>
          </div>
        </div>
      ) : (
        <table id='myTable' className='table table-striped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Titular</th>
              <th>Teléfono</th>
              <th>ECO</th>
              <th>Placas</th>
              <th>Tipo</th>
              <th>Verificación</th>
              <th>Año</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((vehicle) => (
              <tr key={vehicle.id}>
                <td>{vehicle.id}</td>
                <td>{vehicle.titular}</td>
                <td>{vehicle.telefono}</td>
                <td>{vehicle.eco}</td>
                <td>{vehicle.placa}</td>
                <td>{vehicle.tipo}</td>
                <td>{vehicle.verificacion}</td>
                <td>{vehicle.anio}</td>
                <td>
                  <button className='btn btn-primary'>Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TableVehicles;
