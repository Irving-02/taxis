import React, { useContext } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Badge,
  Avatar,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import AuthContext from "../../context/Auth/AuthContext";
import HomeIcon from "../icons/HomeIcon";
import TaxiIcon from "../icons/TaxiIcon";
import PaymentIcon from "../icons/PaymentIcon";
import MoneyIcon from "../icons/MoneyIcon";
import { Link } from "react-router-dom";
const menuItems = [
  { text: "Inicio", icon: <HomeIcon width={40} />, route: "/" },
  { text: "Unidades", icon: <TaxiIcon width={40} />, route: "/vehicles" },
  { text: "Cobros", icon: <PaymentIcon width={40} />, route: "/payments" },
  { text: "Gastos", icon: <MoneyIcon width={40} />, route: "/expenses" },
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { usuario } = useContext(AuthContext);
  return (
    <>
      <IconButton
        onClick={toggleSidebar}
        sx={{
          position: "absolute",
          top: 20,
          left: 20,
          color: "white",
          zIndex: 1300,
        }}
      >
        <Menu />
      </IconButton>
      <Drawer
        variant='persistent'
        open={isOpen}
        sx={{
          width: isOpen ? 250 : 0,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: 250,
            background: "#1465C0",
            color: "white",
            padding: "20px 10px",
            transition: "width 0.3s ease-in-out",
            overflowX: "hidden",
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,
          },
        }}
      >
        <Box textAlign='center' mb={2}>
          <Typography variant='h6' fontWeight='bold'>
            !Hola!
          </Typography>
          <Avatar
            sx={{
              bgcolor: "#ffffff30",
              margin: "10px auto",
              width: 60,
              height: 60,
            }}
          />
          <Typography variant='subtitle1'>
            {usuario ? usuario.name : ""}
          </Typography>
        </Box>
        <List>
          {menuItems.map((item, index) => (
            <Link
              key={index} // Agregamos key aquí
              to={item.route}
              style={{ textDecoration: "none", color: "white" }}
            >
              <ListItem button>
                <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
                {item.count !== undefined && (
                  <Badge
                    badgeContent={item.count}
                    color='secondary'
                    sx={{
                      "& .MuiBadge-badge": { backgroundColor: "#ffffff50" },
                    }}
                  />
                )}
              </ListItem>
            </Link>
          ))}
        </List>
        <Box
          sx={{
            position: "absolute",
            bottom: 100,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <img
            src={require("../../assets/image/drive_man_woman.png")}
            alt='driver'
            width={80}
          />
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
