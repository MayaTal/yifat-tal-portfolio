import React from "react";
import { Typography } from "@mui/material";
import start from "../assets/start.png";
import backStart from "../assets/backStart.png";
import "../styles/Start.css";
import whiteLogo from "../assets/whiteLogo.png";

const Start = () => {
  return (
    <div className="start-component">
      <div className="logo-background">
        <img src={whiteLogo} alt="logo" className="bottom-right-image" />
      </div>
      <div className="content">
        <div className="start-component-image">
          <img alt="startPhoto" src={start} />
        </div>
        <div className="how-start-text-container">
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              fontFamily: "Fredoka",
              direction: "rtl",
              marginBottom: "15px",
            }}
          >
            איך הכל התחיל?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Varela Round",
              direction: "rtl",
              lineHeight: "1.6",
              fontSize: 19,
            }}
          >
            בתחילת הקורונה הוציאו אותי לחופשה ללא תשלום (חל&quot;ת) מהעבודה.{" "}
            <br></br> ביום הראשון הרגשתי מתוסכלת, שאין לי משמעות ו&quot;למה
            דווקא אותי&quot;. אולם כבר ביום השני החלטתי שאת התקופה הזאת, אני
            הולכת לנצל BIG TIME, ולנצל אותה כהזדמנות עבורי.<br></br>
            <br></br> נרשמתי לקורס מאמנים ולקורס מיתוג אישי. מיקדתי לעצמי את
            החוזקות שלי, התשוקות שלי, מה הרצון האמיתי שלי לעשיה ואיך להביא את
            הערך הזה לעולם. רציתי כל הזמן לקפוץ למים ולהתנסות בדברים חדשים, כי
            אני מאמינה שהקסם קורה ביציאה מאזור הנוחות. <br></br>
            <br></br>הבנתי שהשליחות שלי היא ללוות אנשים בתהליכי שינוי ופיתוח
            קריירה, ומאז ליוויתי עשרות אנשים שמצאו את התפקיד המדויק להם וקיבלו
            כלים למיתוג ומציאה תכל&#39;ס של עבודה המתאימה להם.<br></br>
            <br></br> אני אוהבת לראות את הניצוץ של אנשים ברגע שיורד להם האסימון
            מה הקריירה המדויקת להם ואת השמחה שלהם כשהם מוצאים את העבודה המתאימה.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Start;
