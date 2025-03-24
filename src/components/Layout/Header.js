import React, { useContext } from "react";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import DoorIcon from "../icons/DoorIcon";
import AuthContext from "../../context/Auth/AuthContext";
const Header = () => {
  const { cerrarSesion } = useContext(AuthContext);
  return (
    <AppBar
      position='static'
      sx={{
        background: "#1465C0",
        padding: "10px",
        borderBottomRightRadius: "30px",
        borderBottomLeftRadius: "30px",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "end" }}>
        <IconButton color='inherit' onClick={() => cerrarSesion()}>
          <DoorIcon width={60} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
