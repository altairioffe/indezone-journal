import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import Slideshow from "./Slideshow";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";


export default function Tutorial(props) {
  const tutorialStepsMobile = [
    {
      label: "Slide 1",
      imgPath: "images/tutorial/tutorial-01.png"
    },
    {
      label: "Slide 2",
      imgPath: "images/tutorial/tutorial-02.png"
    },
    {
      label: "Slide 3",
      imgPath: "images/tutorial/tutorial-03.png"
    },
    {
      label: "Slide 4",
      imgPath: "images/tutorial/tutorial-04.png"
    },
    {
      label: "Slide 5",
      imgPath: "images/tutorial/tutorial-05.png"
    },
    {
      label: "Slide 6",
      imgPath: "images/tutorial/tutorial-06.png"
    },
    {
      label: "Slide 7",
      imgPath: "images/tutorial/tutorial-07.png"
    },
    {
      label: "Slide 8",
      imgPath: "images/tutorial/tutorial-08.png"
    }
  ];
  const tutorialStepsDesktop = [
    {
      label: "Slide 1",
      imgPath: "images/tutorial/tutorial-desktop-01.png"
    },
    {
      label: "Slide 2",
      imgPath: "images/tutorial/tutorial-desktop-02.png"
    },
    {
      label: "Slide 3",
      imgPath: "images/tutorial/tutorial-desktop-03.png"
    },
    {
      label: "Slide 4",
      imgPath: "images/tutorial/tutorial-desktop-04.png"
    },
    {
      label: "Slide 5",
      imgPath: "images/tutorial/tutorial-desktop-05.png"
    },
    {
      label: "Slide 6",
      imgPath: "images/tutorial/tutorial-desktop-06.png"
    },
    {
      label: "Slide 7",
      imgPath: "images/tutorial/tutorial-desktop-07.png"
    },
    {
      label: "Slide 8",
      imgPath: "images/tutorial/tutorial-desktop-08.png"
    }
  ];

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
      height: "60vh",
      width: "auto",
      overflow: "hidden",
      display: "block"
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

  const [open, setOpen] = React.useState(props.level === 1);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialStepsMobile.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <div>
      <IconButton className={classes.icon} onClick={handleClickOpen}>
        <InfoOutlinedIcon />
      </IconButton>
      <Dialog
        maxWidth={false}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}>
        <MuiDialogTitle
          style={{ padding: "0px 0px 0px 20px", margin: "0px" }}
          id="customized-dialog-title"
          onClose={handleClose}>
          Tutorial
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </MuiDialogTitle>
        <MuiDialogContent dividers style={{ padding: "0px" }}>
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
        </MuiDialogContent>
        <MuiDialogActions>
          <Button onClick={handleClose} color="primary">
            {activeStep !== maxSteps - 1
              ? "Skip Tutorial"
              : "Go To Dashboard"}
          </Button>
        </MuiDialogActions>
      </Dialog>
    </div>
  );
}
