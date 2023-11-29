import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Tab, Tabs } from "@mui/material";
// import "../styles/Navbar.css";
// import Logo from "../assets/logo.png";

function Navbar() {
  //   const [openLinks, setOpenLinks] = useState(false);

  //   const toggleNavbar = () => {
  //     setOpenLinks(!openLinks);
  //   };
  return (
    <AppBar sx={{ backgroundColor: "#e6ecf5" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Tabs sx={{ color: "#fff" }}>
          <Tab label="יצירת קשר" component={Link} to="/contact" />
          <Tab label="הרצאה - התעוזה לשנות" />
          <Tab label="ממשבר להזדמנות - ראיונות אישיים" />
          <Tab label="הבלוג שלי" />
          <Tab label="אודות" />
          <Tab label="בית" component={Link} to="/" />
        </Tabs>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography
            variant="h6"
            sx={{
              color: "#555a5c",
              fontWeight: "bold",
              fontSize: 25,
              fontFamily: "Varela Round",
              letterSpacing: 2,
              textShadow: " 1px 1px rgba(0, 0, 0, 0.3)",
            }}
          >
            יפעת טל
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
