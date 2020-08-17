import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import MuiDialogContent from "@material-ui/core/DialogContent";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

export default function Slideshow(props) {
  const tutorialStepsMobile = props.mobileImages;
  const tutorialStepsDesktop = props.desktopImages;

  const useStyles = makeStyles({
    root: {
      flexGrow: 1
    },
    header: {
      display: "flex",
      alignItems: "center",
      height: 50,
      paddingLeft: "5px",
      backgroundColor: "white"
    },
    img: {
      maxHeight: "60vh",
      maxWidth: "100%",
      width: "auto",
      overflow: "hidden",
      display: "block",
      margin: "auto"
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
    mainCard: {
      backgroundColor: "rgb(235,240,235, 0.5)",
      boxShadow: "none"
    },
    card: {
      backgroundColor: "rgb(235,240,235, 0)",
      boxShadow: "none"
    },
    icon: {
      color: "#00A8E0"
    },
    closeButton: {
      float: "right",
      padding: "5px"
    }
  });
  const classes = useStyles();

  return (
    <div>
      <MuiDialogContent dividers style={{ padding: "0px" }}>
        <div className={classes.root}>
          <img
            className={classes.img}
            src={
              useMediaQuery("(min-width:1100px)")
                ? tutorialStepsDesktop[props.activeStep].imgPath
                : tutorialStepsMobile[props.activeStep].imgPath
            }
            alt={tutorialStepsMobile[props.activeStep].label}
          />
          <MobileStepper
            steps={props.maxSteps}
            position="static"
            variant="text"
            activeStep={props.activeStep}
            nextButton={
              <Button
                size="small"
                onClick={props.handleNext}
                disabled={props.activeStep === props.maxSteps - 1}>
                Next
                <KeyboardArrowRight />
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={props.handleBack}
                disabled={props.activeStep === 0}>
                <KeyboardArrowLeft />
                Back
              </Button>
            }
          />
        </div>
      </MuiDialogContent>
    </div>
  );
}
