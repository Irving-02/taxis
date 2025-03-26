import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Paper,
  Box,
  IconButton,
} from "@mui/material";
import CheckIcon from "../icons/CheckIcon";
import ErrorIcon from "../icons/ErrorIcon";
import EditIcon from "../icons/EditIcon";
import TrashIcon from "../icons/TrashIcon";

const TableVehicles = ({ data }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState("");

  // Filtrar los datos en función del término de búsqueda
  const filteredData = data.filter(
    (vehicle) =>
      vehicle.titular.toLowerCase().includes(search.toLowerCase()) ||
      vehicle.telefono.toLowerCase().includes(search.toLowerCase()) ||
      vehicle.eco.toLowerCase().includes(search.toLowerCase()) ||
      vehicle.placa.toLowerCase().includes(search.toLowerCase()) ||
      vehicle.tipo.toLowerCase().includes(search.toLowerCase()) ||
      vehicle.verificacion.toLowerCase().includes(search.toLowerCase()) ||
      vehicle.anio.toString().includes(search.toLowerCase())
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", borderRadius: 5 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: 20,
          padding: "10px",
        }}
      >
        <TextField
          variant='outlined'
          label='Buscar'
          fullWidth
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ maxWidth: "300px" }} // Ajustado
        />
      </div>

      <TableContainer sx={{ maxHeight: "auto" }}>
        <Table stickyHeader aria-label='Tabla de vehículos'>
          <TableHead>
            <TableRow>
              <TableCell align='center'>ID</TableCell>
              <TableCell align='center'>Titular</TableCell>
              <TableCell align='center'>Teléfono</TableCell>
              <TableCell align='center'>ECO</TableCell>
              <TableCell align='center'>Placas</TableCell>
              <TableCell align='center'>Tipo</TableCell>
              <TableCell align='center'>Verificación</TableCell>
              <TableCell align='center'>Año</TableCell>
              <TableCell align='center'>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((vehicle) => (
                <TableRow hover role='checkbox' tabIndex={-1} key={vehicle.id}>
                  <TableCell align='center'>{vehicle.id}</TableCell>
                  <TableCell align='center'>{vehicle.titular}</TableCell>
                  <TableCell align='center'>{vehicle.telefono}</TableCell>
                  <TableCell align='center'>{vehicle.eco}</TableCell>
                  <TableCell align='center'>{vehicle.placa}</TableCell>
                  <TableCell align='center'>{vehicle.tipo}</TableCell>
                  <TableCell align='center'>
                    {vehicle.verificacion == "Si" ? (
                      <>
                        <CheckIcon width={30} />
                      </>
                    ) : (
                      <>
                        <ErrorIcon width={30} />
                      </>
                    )}
                  </TableCell>
                  <TableCell align='center'>{vehicle.anio}</TableCell>
                  <TableCell align='center'>
                    <>
                      <IconButton
                        sx={{
                          display: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <EditIcon width={30} />
                      </IconButton>
                      <IconButton>
                        <TrashIcon width={30} />
                      </IconButton>
                    </>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[10, 20, 50, 100]}
        component='div'
        count={filteredData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default TableVehicles;
