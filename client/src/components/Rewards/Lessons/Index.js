import React, { useState, useEffect } from "react";

import PollIcon from "@material-ui/icons/Poll";
import LockIcon from "@material-ui/icons/Lock";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { Button } from "@material-ui/core";
import Card from "../../Card/Card.js";
import GridContainer from "../../Grid/GridContainer.js";
import GridItem from "../../Grid/GridItem.js";

import Level1 from "./Level1.js";
import Level2 from "./Level2.js";
import Level3 from "./Level3.js";
import Level4 from "./Level4.js";
import Level5 from "./Level5.js";
import Level6 from "./Level6.js";
import Level7 from "./Level7.js";
import Level8 from "./Level8.js";
import Level9 from "./Level9.js";
import Level10 from "./Level10.js";

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
    },
    card: {
      backgroundColor: "rgb(235,240,235, 0)",
      boxShadow: "none",
      maxWidth: "800px",
      display: "block",
      margin: "auto"
    }
  }));
  const classes = useStyles();

  const [renderResource, setRenderResource] = useState(true);

  return (
    <Card className={classes.card}>
      <div>

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
          </section>
        )}
      </div>
    </Card>
  );
}
