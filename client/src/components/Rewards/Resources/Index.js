import React, { useState, useEffect } from "react";

import PollIcon from "@material-ui/icons/Poll";
import LockIcon from "@material-ui/icons/Lock";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { Button } from "@material-ui/core";

import Level1 from "./Level1";
import Level2 from "./Level2";
import Level3 from "./Level3";
import Level4 from "./Level4";
import Level5 from "./Level5";
import Level6 from "./Level6";
import Level7 from "./Level7";
import Level8 from "./Level8";
import Level9 from "./Level9";
import Level10 from "./Level10";

import useVisualMode from "../../../hooks/useVisualMode";
import { makeStyles } from "@material-ui/core/styles";

export default function Resource(props) {
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
    }
  }));
  const classes = useStyles();

  const [renderResource, setRenderResource] = useState(false);

  return (
    <main style={{ marginTop: "-80px" }}>
      {renderResource === false && (
        <Button
          className={classes.button}
          onClick={() => setRenderResource(true)}
          disabled={props.disabled}
          endIcon={
            (props.level >= 600 && <PollIcon />) || <InfoOutlinedIcon />
          }>
          Show BrainFood
        </Button>
      )}
      {renderResource === true && (
        <section>
          {props.level === 1 && <Level1 />}
          {props.level === 2 && <Level2 />}
          {props.level === 3 && <Level3 />}
          {props.level === 4 && <Level4 />}
          {props.level === 5 && <Level5 />}
          {props.level === 6 && <Level6 />}
          {props.level === 7 && <Level7 />}
          {props.level === 8 && <Level8 />}
          {props.level === 9 && <Level9 />}
          {props.level === 10 && <Level10 />}

          <Button
            className={classes.button}
            onClick={() => setRenderResource(false)}
            disabled={props.disabled}
            endIcon={
              (props.level >= 600 && <PollIcon />) || <InfoOutlinedIcon />
            }>
            HIDE BrainFood
          </Button>
        </section>
      )}
    </main>
  );
}
