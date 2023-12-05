import React from "react";
import { Grid, Typography } from "@mui/material";

const ServiceItem = ({ title, imageSrc }) => {
  return (
    <Grid item xs={4} className="service-item">
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
        className="more-info"
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
