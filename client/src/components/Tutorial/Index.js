import React, { useState } from "react";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

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
      imgPath: "images/tutorial/tutorial-01-desktop.png"
    },
    {
      label: "Slide 2",
      imgPath: "images/tutorial/tutorial-02-desktop.png"
    },
    {
      label: "Slide 3",
      imgPath: "images/tutorial/tutorial-03-desktop.png"
    },
    {
      label: "Slide 4",
      imgPath: "images/tutorial/tutorial-04-desktop.png"
    },
    {
      label: "Slide 5",
      imgPath: "images/tutorial/tutorial-05-desktop.png"
    },
    {
      label: "Slide 6",
      imgPath: "images/tutorial/tutorial-06-desktop.png"
    },
    {
      label: "Slide 7",
      imgPath: "images/tutorial/tutorial-07-desktop.png"
    },
    {
      label: "Slide 8",
      imgPath: "images/tutorial/tutorial-08-desktop.png"
    }
  ];

  const useStyles = makeStyles({
    // root: {
    //   textAlign: "center",
    //   fontWeight: "300",
    //   flexGrow: 1,
    //   align: "center",
    //   fontSize: "1.5em",
    //   "& small": {
    //     color: "skyblue"
    //   }
    // },
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
          <div className={classes.root}>
              <img
                className={classes.img}
                src={useMediaQuery('(min-width:600px)') ? tutorialStepsDesktop[activeStep].imgPath : tutorialStepsMobile[activeStep].imgPath}
                alt={tutorialStepsMobile[activeStep].label}
              />
            <MobileStepper
              steps={maxSteps}
              position="static"
              variant="text"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}>
                  Next
                  <KeyboardArrowRight />
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}>
                  <KeyboardArrowLeft />
                  Back
                </Button>
              }
            />
          </div>

          {/* <Carousel autoPlay={false}>
            <Tutorial1 />
            <Tutorial2 />
            <Tutorial3 />
            <Tutorial4 />
            <Tutorial5 />
          </Carousel> */}
        </MuiDialogContent>
        <MuiDialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Skip Tutorial
          </Button>
        </MuiDialogActions>
      </Dialog>
    </div>
  );
}
