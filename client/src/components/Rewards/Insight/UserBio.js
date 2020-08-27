import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PollIcon from "@material-ui/icons/Poll";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

export default function UserBio(props) {
  // Define Styles
  const useStyles = makeStyles({
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
