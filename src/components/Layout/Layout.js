import React, { useState } from "react";
import Header from "./Header";
import Aside from "./Aside";
import { Box } from "@mui/material";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <>
      <Header />
      <Box sx={{ display: "flex" }}>
        <Aside
          isOpen={isSidebarOpen}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        <Box
          sx={{
            flexGrow: 1,
            transition: "margin 0.3s",
            marginLeft: isSidebarOpen ? "25px" : "0",
            padding: "20px",
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Layout;
