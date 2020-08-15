import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slideshow from "../../../Slideshow";
import Carousel from "react-material-ui-carousel";

export default function Level1(props) {
  const useStyles = makeStyles(theme => ({
    root: {
      textAlign: "center",
      fontWeight: "300",
      flexGrow: 1,
      align: "center",
      fontSize: "1.5em",
      "& small": {
        color: "skyblue"
      }
    },
    button: {
      background: "#00A8E0",
      color: "white",
      "&:hover": {
        backgroundColor: "skyBlue",
        color: "#FFF"
      },
      fontWeight: 300,
      fontSize: "1em",
      padding: "0.8em 1.2em"
    },
    card: {
      backgroundColor: "rgb(235,240,235, 0)",
      boxShadow: "none"
    },
    image: {  
      height: "45vh",
      width: "auto",
      margin: "auto",
      display: "block",
      backgroundPosition: "50% 50%",
      backgroundSize: "cover"
    }
  }));
  const classes = useStyles();

  const tutorialStepsMobile = [
    {
      label: "Slide 1",
      imgPath: "images/lessons/brainsley-01.png"
    },
    {
      label: "Slide 2",
      imgPath: "images/lessons/brainsley-02.png"
    },
    {
      label: "Slide 3",
      imgPath: "images/lessons/brainsley-03.png"
    },
    {
      label: "Slide 4",
      imgPath: "images/lessons/brainsley-04.png"
    },
    {
      label: "Slide 5",
      imgPath: "images/lessons/brainsley-05.png"
    },
    {
      label: "Slide 6",
      imgPath: "images/lessons/brainsley-06.png"
    },
    {
      label: "Slide 7",
      imgPath: "images/lessons/brainsley-07.png"
    },
    {
      label: "Slide 8",
      imgPath: "images/lessons/brainsley-08.png"
    }
  ];
  const tutorialStepsDesktop = [
    {
      label: "Slide 1",
      imgPath: "images/lessons/brainsley-01.png"
    },
    {
      label: "Slide 2",
      imgPath: "images/lessons/brainsley-02.png"
    },
    {
      label: "Slide 3",
      imgPath: "images/lessons/brainsley-03.png"
    },
    {
      label: "Slide 4",
      imgPath: "images/lessons/brainsley-04.png"
    },
    {
      label: "Slide 5",
      imgPath: "images/lessons/brainsley-05.png"
    },
    {
      label: "Slide 6",
      imgPath: "images/lessons/brainsley-06.png"
    },
    {
      label: "Slide 7",
      imgPath: "images/lessons/brainsley-07.png"
    },
    {
      label: "Slide 8",
      imgPath: "images/lessons/brainsley-08.png"
    }
  ];

  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialStepsMobile.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <section>
      <div>
      <Slideshow
      mobileImages={tutorialStepsMobile}
      level={props.level}
      desktopImages={tutorialStepsDesktop}
      closeMessage="Skip Tutorial"
      finalSlideMessage="Go To Dashboard"
      activeStep={activeStep}
      handleNext={handleNext}
      handleBack={handleBack}
      maxSteps={maxSteps}
    />
      </div>
      <br />{" "}
      <div>
      </div>
    </section>
  );
}
