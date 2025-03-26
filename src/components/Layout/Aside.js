import React from "react";
import {
  Drawer,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HomeIcon from "@mui/icons-material/Home";
import TaxiIcon from "@mui/icons-material/LocalTaxi";
import PaymentIcon from "@mui/icons-material/Payment";
import MoneyIcon from "@mui/icons-material/AttachMoney";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const menuItems = [
  { text: "Inicio", icon: <HomeIcon />, route: "/" },
  { text: "Unidades", icon: <TaxiIcon />, route: "/vehicles" },
  { text: "Cobros", icon: <PaymentIcon />, route: "/payments" },
  { text: "Gastos", icon: <MoneyIcon />, route: "/expenses" },
];

const Aside = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  return (
    <Drawer
      variant='permanent'
      sx={{
        width: isOpen ? drawerWidth : 56,
        flexShrink: 0,
        marginTop: 56,
        whiteSpace: "nowrap",
        transition: "width 0.3s",
        "& .MuiDrawer-paper": {
          width: isOpen ? drawerWidth : 56,
          transition: "width 0.3s",
        },
      }}
      open={isOpen}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "10px",
          position: "absolute",
          top: 50,
          left: isOpen ? drawerWidth - 50 : 6, // Adjust position based on drawer width
          right: 0,
        }}
      >
        <IconButton onClick={toggleSidebar}>
          <ChevronLeftIcon sx={{ color: "black" }} />
        </IconButton>
      </div>
      <Divider />
      <List sx={{ marginTop: 10 }}>
        {menuItems.map(({ text, icon, route }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => navigate(route)}>
              <ListItemIcon>{icon}</ListItemIcon>
              {isOpen && <ListItemText primary={text} />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Aside;
