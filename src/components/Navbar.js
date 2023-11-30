import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Tab, Tabs, Box } from "@mui/material";
// import "../styles/Navbar.css";
// import Logo from "../assets/logo.png";

const Navbar = () => {
  //   const [openLinks, setOpenLinks] = useState(false);

  //   const toggleNavbar = () => {
  //     setOpenLinks(!openLinks);
  //   };
  return (
    <AppBar sx={{ backgroundColor: "#e6ecf5", direction: "rtl" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
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
        <Box sx={{ marginRight: "auto" }}>
          <Tabs sx={{ color: "#fff" }}>
            <Tab label="בית" component={Link} to="/" />
            <Tab label="אודות" component={Link} to="/about" />
            <Tab label="הבלוג שלי" component={Link} to="/blog" />
            <Tab
              label="ממשבר להזדמנות - ראיונות אישיים"
              component={Link}
              to="/interviewes"
            />
            <Tab label="הרצאה - התעוזה לשנות" component={Link} to="/lecture" />
            <Tab label="יצירת קשר" component={Link} to="/contact" />
          </Tabs>
          <Link to="/" style={{ textDecoration: "none" }}></Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
