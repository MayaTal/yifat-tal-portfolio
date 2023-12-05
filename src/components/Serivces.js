import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import serviceEscort from "../assets/serviceEscort.jpg";
import serviceLecture from "../assets/serviceLecture.jpg";
import serviceWorkshop from "../assets/serviceWorkshop.jpg";
import "../styles/Services.css";
import ServiceItem from "./ServiceItem";

const Services = () => {
  return (
    <div className="services">
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Fredoka",
          direction: "rtl",
          marginBottom: "70px",
          marginTop: "70px",
          textAlign: "center",
        }}
      >
        השירותים שלי
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        dir="rtl"
        marginBottom="50px"
      >
        <div className="services-container">
          <Grid container spacing={1}>
            <ServiceItem
              title="ליווי אישי וייעוץ מקצועי"
              imageSrc={serviceEscort}
            />
            <ServiceItem
              title="הרצאות השראה
"
              imageSrc={serviceLecture}
            />
            <ServiceItem
              title="סדנת מציאת התפקיד הבא שלך"
              imageSrc={serviceWorkshop}
            />
          </Grid>
        </div>
      </Box>
    </div>
  );
};

export default Services;
