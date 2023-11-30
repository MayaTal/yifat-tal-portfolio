import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Grid,
  Typography,
  Container,
  IconButton,
  List,
  ListItem,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const socialMediaLinks = {
  facebook: "https://www.facebook.com/yifat.talgelerman",
  linkedin: "",
  instagram: "",
};

const pages = [
  { label: "בית", path: "/" },
  { label: "אודות", path: "/about" },
  { label: "יצירת קשר", path: "/contact" },
  { label: "הבלוג שלי", path: "/blog" },
  { label: "ממשבר להזדמנות-ראיונות אישיים", path: "/interviewes" },
  { label: "הרצאה-התעוזה לשנות", path: "/lecture" },
];

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#e6ecf5",
        color: "text.secondary",
        py: 3,
        borderTop: "1px solid",
        borderColor: "divider",
        direction: "rtl",
      }}
    >
      <Container>
        <Grid container spacing={1} justifyContent="space-between">
          <Grid>
            <Typography
              variant="h6"
              color="text.primary"
              sx={{
                color: "#555a5c",
                fontWeight: "bold",
                fontSize: 25,
                fontFamily: "Varela Round",
                letterSpacing: 2,
              }}
            >
              יפעת טל
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ marginLeft: -25 }}>
            <List>
              {pages.map((page) => (
                <ListItem key={page.label} disablePadding>
                  <Link
                    to={page.path}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      {page.label}
                    </Typography>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid>
            <IconButton
              aria-label="Facebook"
              color="inherit"
              component="a"
              href={socialMediaLinks.facebook}
            >
              <FacebookIcon sx={{ fontSize: 40 }} />
            </IconButton>
            <IconButton
              aria-label="Linkedin"
              color="inherit"
              component="a"
              href={socialMediaLinks.linkedin}
            >
              <LinkedInIcon sx={{ fontSize: 40 }} />
            </IconButton>
            <IconButton
              aria-label="Instagram"
              color="inherit"
              component="a"
              href={socialMediaLinks.instagram}
            >
              <InstagramIcon sx={{ fontSize: 40 }} />
            </IconButton>
          </Grid>
        </Grid>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ pt: 4 }}
        >
          זכויות יוצרים © 2023 כל הזכויות שמורות
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
