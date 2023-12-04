import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Tab, Tabs, Box } from "@mui/material";
// import "../styles/Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  //   const [openLinks, setOpenLinks] = useState(false);

  //   const toggleNavbar = () => {
  //     setOpenLinks(!openLinks);
  //   };
  const [value, setValue] = useState(0);

  const handleTabs = (e, val) => {
    setValue(val);
  };
  const pages = [
    { label: "בית", path: "/" },
    { label: "אודות", path: "/about" },
    { label: "הבלוג שלי", path: "/blog" },
    { label: "ממשבר להזדמנות-ראיונות אישיים", path: "/interviewes" },
    { label: "הרצאה-התעוזה לשנות", path: "/lecture" },
    { label: "יצירת קשר", path: "/contact" },
  ];

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#e6ecf5", direction: "rtl" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <img alt="logo" src={logo} style={{ height: "70px" }} />
        <Typography
          variant="h6"
          sx={{
            color: "#555a5c",
            fontWeight: "bold",
            fontSize: 25,
            fontFamily: "Varela Round",
            letterSpacing: 1,
            textShadow: " 1px 1px rgba(0, 0, 0, 0.3)",
          }}
        >
          יפעת טל
        </Typography>
        <Box sx={{ marginRight: "auto" }}>
          <Tabs
            value={value}
            onChange={handleTabs}
            sx={{ color: "#fff" }}
            TabIndicatorProps={{
              style: { display: "none" },
            }}
          >
            {pages.map((page, index) => (
              <Tab
                key={page.label}
                label={page.label}
                component={Link}
                to={page.path}
                sx={{
                  "&.Mui-selected": {
                    color: "#357adb",
                  },
                }}
              />
            ))}
            {/* <Tab label="בית" component={Link} to="/" />
            <Tab label="אודות" component={Link} to="/about" />
            <Tab label="הבלוג שלי" component={Link} to="/blog" />
            <Tab
              label="ממשבר להזדמנות - ראיונות אישיים"
              component={Link}
              to="/interviewes"
            />
            <Tab label="הרצאה - התעוזה לשנות" component={Link} to="/lecture" />
            <Tab label="יצירת קשר" component={Link} to="/contact" /> */}
          </Tabs>
          <Link to="/" style={{ textDecoration: "none" }}></Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
