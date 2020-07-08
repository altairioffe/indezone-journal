import React, { useState } from "react";
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

  const [open, setOpen] = React.useState(false);

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
        <MuiDialogTitle id="customized-dialog-title" onClose={handleClose }>
          Modal title
          <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        </MuiDialogTitle>
        <MuiDialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </MuiDialogContent>
        <MuiDialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Next
          </Button>
        </MuiDialogActions>
        <MuiDialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Skip
          </Button>
        </MuiDialogActions>
      </Dialog>
    </div>
  );
}
