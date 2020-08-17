import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PollIcon from "@material-ui/icons/Poll";
import LockIcon from "@material-ui/icons/Lock";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

export default function UserBio(props) {
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
    }
  });
  const classes = useStyles();

  return (
    <article className="">
      <Button
        className={classes.button}
        onClick={props.onClick}
        disabled={props.disabled}
        endIcon={(props.level >= 10 && props.powerEntries > 39 && <PollIcon />) || <InfoOutlinedIcon />}>
        GET INSIGHTS
      </Button>
    </article>
  );
}
