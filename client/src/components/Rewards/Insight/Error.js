import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LockIcon from "@material-ui/icons/Lock";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

export default function Error(props) {
  // Define Styles
  const useStyles = makeStyles({
    root: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(0, 240, 230, .3)",
      color: "white",
      height: 48,
      padding: "0 30px",
      margin: "0 10px",
      textAlign: "center"
    },
    heading: {
      fontWeight: "300"
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
    <main className="heading">
      <div>
        <img src="images/brainsley-error.png" className={classes.image} />
      </div>
      <LockIcon style={{ color: "#00A8E0"}} />
      <h4>Not so fast, young Mind Wanderer!!! Reach level 10 and make 40 Power Entries before you request my insight...</h4>
      <br/>
      <h4>You have {props.powerEntries} Power Entries</h4>
      <Button className={classes.button} onClick={props.onCancel}>
        BACK
      </Button>
    </main>
  );
}
