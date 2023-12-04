import React from "react";
import "../styles/Home.css";
import { Avatar, Typography } from "@mui/material";
import Start from "../components/Start";

const Home = () => {
  return (
    <div className="home">
      <div className="top-section">
        <div className="text-container">
          <div className="head-text">
            <Typography
              variant="h6"
              sx={{
                color: "#f0f3f5",
                fontWeight: "bold",
                fontSize: 70,
                fontFamily: "Varela Round",
                letterSpacing: 2,
                textShadow: "0 0 10px #000, 0 0 10px #000",
                direction: "rtl",
              }}
            >
              לשנות.
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#f0f3f5",
                fontWeight: "bold",
                fontSize: 70,
                fontFamily: "Varela Round",
                letterSpacing: 2,
                textShadow: "0 0 10px #000, 0 0 10px #000",
                direction: "rtl",
              }}
            >
              להעז.
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#f0f3f5",
                fontWeight: "bold",
                fontSize: 70,
                fontFamily: "Varela Round",
                letterSpacing: 2,
                textShadow: "0 0 10px #000, 0 0 10px #000",
                direction: "rtl",
              }}
            >
              לחלום.
            </Typography>
          </div>

          <div className="last-typography-container">
            <Typography
              variant="body1"
              sx={{
                color: "#616366",
                fontSize: 28,
                fontFamily: "Varela Round",
                fontWeight: "bold",
                direction: "rtl",
                padding: 1,
                border: "2px solid #5f758a",
                borderRadius: 1,
                backgroundColor: "#e8eaff",
                textAlign: "center",
              }}
            >
              יועצת לפיתוח קריירה, מובילה לשינוי וצמיחה
            </Typography>
          </div>
        </div>
      </div>
      <Start />
    </div>
  );
};

export default Home;
