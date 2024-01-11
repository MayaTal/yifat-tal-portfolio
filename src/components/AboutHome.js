import React from "react";
import { Typography, Button } from "@mui/material";
import aboutHome from "../assets/aboutHome.jpg";
import { Link } from "react-router-dom";
import "../styles/AboutHome.css";

const AboutHome = () => {
  return (
    <div className="aboutHome-component">
      <div className="aboutHome-image-container">
        <img alt="aboutHomePhoto" src={aboutHome} />
      </div>
      <div className="text-container">
        <Typography
          variant="h4"
          sx={{
            // color: "#4c5152",
            fontWeight: "bold",
            fontFamily: "Fredoka",
            marginBottom: "15px",
          }}
        >
          מי אני?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            // color: "#4c5152",
            fontFamily: "Varela Round",
            lineHeight: "1.6",
            fontSize: 17,
          }}
        >
          נעים מאוד, שמי יפעת טל. מלווה אנשים לבחור את התפקיד הבא המדויק להם,
          ומלמדת אותם כלים שעוזרים להם לעשות את השינוי. אני מנחת קורסים למציאת
          הדבר המדויק הבא ומעבירה הרצאות על איך לעשות שינוי באמצע החיים.{" "}
          <br></br>
          <br></br> 25 שנה עבדתי בתחום פיתוח תוכנה ושום דבר לא מרגש אותי כמו
          הרגעים האלו שאנשים מוצאים את מה שמתאים להם ואומרים לי משפטים כמו –
          "אני לא מאמינה שמצאתי את התפקיד שמתאים לי, אני מרגישה שאני בחלום",
          &quot;ממש טוב לי בעבודה החדשה, התפקיד מאתגר ואני זוכה בהערכה רבה
          מהמנהל&quot;, &quot;מתגבש לו החלום לפרטים באופן שאני יכולה לראות את זה
          קורה יותר ויותר ברור&quot;, &quot;קיבלתי חוזה עבודה חדש&quot;,
          &quot;הבנתי באיזה תחום אני רוצה לעסוק בכובע הנוסף שלי&quot;.
        </Typography>
        <Link to="/about">
          <Button
            variant="contained"
            color="info"
            sx={{
              color: "#515863",
              backgroundColor: "#f2c444",
              borderColor: "green",
              fontSize: 17,
              width: "150px",
              "&:hover": {
                backgroundColor: "#d8d0c3",
              },
              marginTop: "30px",
            }}
          >
            להמשך קריאה
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AboutHome;
