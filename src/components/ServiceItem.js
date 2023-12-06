import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";

const ServiceItem = ({ title, imageSrc }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Grid
      item
      xs={4}
      className={`service-item ${isHovered ? 'hovered' : ''} ${isClicked ? 'clicked' : ''}`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
    >
      <Typography
        variant="h5"
        sx={{
          fontFamily: "Varela Round",
          marginRight: "10px",
          marginBottom: "10px",
        }}
      >
        {title}{" "}
      </Typography>
      <img src={imageSrc} className="service-image" alt="Section 1" />
      <Typography
        className={`more-info ${isHovered ? 'hovered' : ''} ${isClicked ? 'clicked' : ''}`}
        variant="h6"
        sx={{
          marginTop: "10px",
          marginRight: "10px",
          fontFamily: "Fredoka",
          fontSize: 24,
          position: "absolute",
          left: 70,
          cursor: "pointer",
        }}
      >
        למידע נוסף
      </Typography>
    </Grid>
  );
};

export default ServiceItem;
