import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LockIcon from "@material-ui/icons/Lock";

export default function Error(props) {
  // Define Styles
  const useStyles = makeStyles({
    heading: {
      fontWeight: "300",
      padding: "10px"
    },
    paragraph: {
      fontWeight: "300"
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
      padding: "0.5em 2em"
    },
    image: {
      height: "45vh",
      width: "auto",
      margin: "auto",
      display: "block",
      backgroundPosition: "50% 50%",
      backgroundSize: "cover"
    }
  });
  const classes = useStyles();

  return (
    <main className={classes.heading}>
      <div>
        <img src="images/brainsley-error.png" alt="error" className={classes.image} />
      </div>
      <LockIcon style={{ color: "#00A8E0" }} />
      <h4>
        Not so fast, young Mind Wanderer!!! Reach level 10 and make 40 Power
        Entries before you request my insight...
      </h4>
      <br />
      <h4>You have {props.powerEntries} Power {props.powerEntries !== 1 ? "Entries" : "Entry"}</h4>
      <p> Earn Power Entries by writing answers at least 40 words long</p>
      <Button className={classes.button} onClick={props.onCancel}>
        BACK
      </Button>
    </main>
  );
}
