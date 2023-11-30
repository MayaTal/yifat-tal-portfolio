import React from "react";
import "../styles/Home.css";
import { Avatar, Typography } from "@mui/material";
import home from "../assets/home.jpeg";

const Home = () => {
  return (
    <div className="home">
      <div className="top-section">
        <img alt="Your Name" src={home} className="photo" />
        <div className="text-container">
          <Typography
            variant="h6"
            sx={{
              color: "#e8eaff",
              fontWeight: "bold",
              fontSize: 75,
              fontFamily: "Varela Round",
              letterSpacing: 2,
              textShadow: "0 0 3px #000, 0 0 5px #000",
            }}
          >
            {" "}
            יפעת לשם שינוי{" "}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Home;
