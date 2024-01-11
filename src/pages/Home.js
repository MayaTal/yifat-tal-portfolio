import React from "react";
import "../styles/Home.css";
import { Avatar, Typography } from "@mui/material";
import Start from "../components/Start";
import Services from "../components/Serivces";
import AboutHome from "../components/AboutHome";
import TestimonialsHome from "../components/TestimonialsHome";

const Home = () => {
  return (
    <div className="home">
      <div className="top-section">
        <div className="text-container">
          <div className="head-text">
            <Typography
              variant="h2"
              sx={{
                color: "#f0f3f5",
                fontWeight: "bold",
                fontSize: "8vh",
                fontFamily: "Varela Round",
                letterSpacing: 2,
                textShadow: "0 0 10px #000, 0 0 10px #000",
                direction: "rtl",
              }}
            >
              לשנות.
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: "#f0f3f5",
                fontWeight: "bold",
                fontSize: "8vh",
                fontFamily: "Varela Round",
                letterSpacing: 2,
                textShadow: "0 0 10px #000, 0 0 10px #000",
                direction: "rtl",
              }}
            >
              להעז.
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: "#f0f3f5",
                fontWeight: "bold",
                fontSize: "8vh",
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
                color: "#3e979b",
                fontSize: "3.5vh",
                fontFamily: "Varela Round",
                fontWeight: "bold",
                direction: "rtl",
                padding: 1,
                border: "3px solid #3e979b",
                borderRadius: 1,
                backgroundColor: "#efece8",
                textAlign: "center",
              }}
            >
              יועצת לפיתוח קריירה, מובילה לשינוי וצמיחה
            </Typography>
          </div>
        </div>
      </div>
      <div className="static-element"></div>
      <Start />
      <Services />
      <AboutHome />
      <TestimonialsHome />
    </div>
  );
};

export default Home;
