import React from "react";
import "../styles/Home.css";
import { Avatar, Typography } from "@mui/material";
import home from "../assets/home.png";

const Home = () => {
  return (
    <div className="home">
      <div className="top-section">
        <img alt="Your Name" src={home} className="photo" />
        <div className="text-container">
          <Typography
            variant="h6"
            sx={{
              marginTop: "50px",
              color: "#5f758a",
              fontWeight: "bold",
              fontSize: 70,
              fontFamily: "Varela Round",
              letterSpacing: 2,
              textShadow: "0 0 3px #000, 0 0 5px #000",
              direction: "rtl",
            }}
          >
            {" "}
            יפעת לשם שינוי{" "}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#5f758a",
              fontSize: 24,
              fontFamily: "Varela Round",
              fontWeight: "bold",
              direction: "rtl",
              padding: 1,
              border: "2px solid #5f758a",
              borderRadius: 1,
              backgroundColor: "#e8eaff",
              //   display: "inline",
            }}
          >
            יועצת לפיתוח קריירה, מובילה לשינוי וצמיחה
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Home;
