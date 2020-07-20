import React, { useState } from "react";
import Tutorial1 from "./Tutorial1.js";
import Tutorial2 from "./Tutorial2.js";
import Tutorial3 from "./Tutorial3.js";
import Tutorial4 from "./Tutorial4.js";
import Tutorial5 from "./Tutorial5.js";
import Tutorial6 from "./Tutorial6.js";
import Tutorial7 from "./Tutorial7.js";
import Tutorial8 from "./Tutorial8.js";
import Tutorial9 from "./Tutorial9.js";
import Tutorial10 from "./Tutorial10.js";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import useVisualMode from "../../hooks/useVisualMode";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Carousel from "react-material-ui-carousel";

// const styles = theme => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(2)
//   },
//   closeButton: {
//     position: "absolute",
//     right: theme.spacing(1),
//     top: theme.spacing(1),
//     color: theme.palette.grey[500]
//   }
// });

// const DialogTitle = withStyles(styles)(props => {
//   const { children, classes, onClose, ...other } = props;
//   return (
//     <MuiDialogTitle disableTypography className={classes.root} {...other}>
//       <Typography variant="h6">{children}</Typography>
//       {onClose ? (
//         <IconButton
//           aria-label="close"
//           className={classes.closeButton}
//           onClick={onClose}>
//           <CloseIcon />
//         </IconButton>
//       ) : null}
//     </MuiDialogTitle>
//   );
// });

// const DialogContent = withStyles(theme => ({
//   root: {
//     padding: theme.spacing(2)
//   }
// }))(MuiDialogContent);

// const DialogActions = withStyles(theme => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(1)
//   }
// }))(MuiDialogActions);

export default function Heading() {
  const useStyles = makeStyles({
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
    mainCard: {
      backgroundColor: "rgb(235,240,235, 0.5)",
      boxShadow: "none"
    },
    card: {
      backgroundColor: "rgb(235,240,235, 0)",
      boxShadow: "none"
    }
  });
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <section style={{ marginTop: "-80px", display: "inlineBlock" }}>
        <span>
          <h2 className={classes.root}>
            Take A Moment To Start Your Day With Purpose
          </h2>
          <IconButton color="primary" onClick={handleClickOpen}>
            <InfoOutlinedIcon />
          </IconButton>
        </span>
      </section>
      <Dialog 
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}>
        <MuiDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Modal title
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </MuiDialogTitle>
        <MuiDialogContent dividers style={{ padding: "0px"}}>
          <Carousel autoPlay={false}>
            <Tutorial1 />
            <Tutorial2 />
            <Tutorial3 />
            <Tutorial4 />
            <Tutorial5 />
          </Carousel>
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
