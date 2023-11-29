import React from "react";
import "../styles/Home.css";
import { Avatar, Typography } from "@mui/material";
import photo from "../assets/photo.jpeg";

const Home = () => {
  return (
    <div className="home">
      <div className="top-section">
        <img alt="Your Name" src={photo} className="photo" />
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
          {/* <Link to="/filter">
              <button> GET STARTED </button>
            </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
