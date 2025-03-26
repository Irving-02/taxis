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
  IconButton,
} from "@mui/material";
import EditIcon from "../icons/EditIcon";
import TrashIcon from "../icons/TrashIcon";
import { FormatDate } from "../../utils/FormatDate";
const TableCobros = ({ data }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState("");

  // Filtrar los datos en función del término de búsqueda
  const filteredData = data.filter(
    (pago) =>
      pago.concepto.toLowerCase().includes(search.toLowerCase()) ||
      pago.tipo.toLowerCase().includes(search.toLowerCase()) ||
      pago.taxi.eco.toLowerCase().includes(search.toLowerCase()) ||
      pago.monto.toLowerCase().includes(search.toLowerCase()) ||
      pago.created_at.toLowerCase().includes(search.toLowerCase())
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
              <TableCell align='center'>Concepto</TableCell>
              <TableCell align='center'>tipo</TableCell>
              <TableCell align='center'>Monto</TableCell>
              <TableCell align='center'>Unidad</TableCell>
              <TableCell align='center'>Fecha</TableCell>
              <TableCell align='center'>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((pago) => (
                <TableRow hover role='checkbox' tabIndex={-1} key={pago.id}>
                  <TableCell align='center'>{pago.id}</TableCell>
                  <TableCell align='center'>{pago.concepto}</TableCell>
                  <TableCell align='center'>{pago.tipo}</TableCell>
                  <TableCell align='center'>{pago.monto}</TableCell>
                  <TableCell align='center'>
                    {"#"} {pago ? pago.taxi.eco : "N/A"}
                  </TableCell>
                  <TableCell align='center'>
                    {FormatDate(pago.created_at)}
                  </TableCell>
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

export default TableCobros;
