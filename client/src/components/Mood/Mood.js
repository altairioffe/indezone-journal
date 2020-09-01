import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
// import Button from "./CustomButtons/Button.js";
import Card from "../Card/Card.js";
import IconButton from "@material-ui/core/IconButton";

import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";
import LoadingImage from "./Loading";

export default function Login(props) {
  const [moodSelection, setMoodSelection] = useState("");

  const useStyles = makeStyles({
    root: {
      background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
      border: "none !important",
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(0, 240, 230, .3)",
      color: "white",
      height: 48,
      padding: "0 30px",
      margin: "0 10px"
    },
    container: {
      // height: "200px",
      // padding: "10vh",
      // margin: "10vh"
    },
    card: {
      height: "80vh",
      width: "80vw",
      maxWidth: "70vw",
      flexGrow: 1,
      backgroundColor: "white",
      padding: "0vh 5vh",
      marginTop: "-10vh"
    },
    button: {
      "@media (max-width:600px)": {
        display: "none"
      }
    },
    image: {
      height: "25vh",
      width: "auto",
      padding: "0px"
    },
    innerCard: {
      backgroundColor: `rgb(235,240,235, 0)`,
      boxShadow: "none"
    },
    typography: {
      fontSize: "2em",
      paddingBottom: "5vw"
    },
    innerText: {
      fontSize: "1em",
      padding: "1em",
      margin: "2em"
    }
  });
  const classes = useStyles();

  const setUserMood = mood => {
    setMoodSelection(mood);
    props.setUserMood(mood);
    setTimeout(() => props.renderMainPage(), 5000);
  };

  return (
    <div>
      <GridContainer
        className={classes.container}
        justify="center"
        direction="row"
        alignItems="center"
        spacing={1}>
        <Card className={classes.card}>
          <Typography className={classes.typography}>
            How are you feeling today, {props.user}?
          </Typography>
          <GridContainer
            justify="center"
            direction="row"
            alignItems="center"
            spacing={2}>
            <GridItem xs={12} sm={12} md={6}>
              {moodSelection !== "happy" && (
                <Fade in={moodSelection !== "happy"} timeout={1000}>
                  <IconButton
                    className={moodSelection === "sad" && classes.button}
                    disabled={moodSelection === "sad"}
                    simple="true"
                    onClick={() => setUserMood("happy")}
                    color="primary">
                    <img
                      src={"../images/happy-brain.svg"}
                      alt="happy brain"
                      className={classes.image}
                    />
                  </IconButton>
                </Fade>
              )}

              {moodSelection === "happy" && (
                <Fade in={moodSelection === "happy"} timeout={1000}>
                  <Card className={classes.innerCard}>
                    <Typography className={classes.innerText}>
                      Great! Let's harness that motivation with some questions
                      to build your focus.
                    </Typography>
                  </Card>
                </Fade>
              )}
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              {moodSelection !== "sad" && (
                <Fade in={moodSelection !== "sad"} timeout={1000}>
                  <IconButton
                    className={moodSelection === "happy" && classes.button}
                    disabled={moodSelection === "happy"}
                    simple="true"
                    onClick={() => setUserMood("sad")}
                    color="primary">
                    <img
                      src={"../images/sad-brain.svg"}
                      alt="sad brain"
                      className={classes.image}
                    />
                  </IconButton>
                </Fade>
              )}

              {moodSelection === "sad" && (
                <Fade in={moodSelection === "sad"} timeout={1000}>
                  <Card className={classes.innerCard}>
                    <Typography className={classes.innerText}>
                      It's okay if you're not feeling 100% right now. Research
                      shows that, with practice, you can change how you feel by
                      changing your thoughts.
                    </Typography>
                  </Card>
                </Fade>
              )}
            </GridItem>
          </GridContainer>
          {moodSelection && (
            <Fade in={moodSelection === true} timeout={2000}>
              <>
                <Card className={classes.innerCard}>
                  <LoadingImage mood={moodSelection} />
                </Card>
              </>
            </Fade>
          )}
        </Card>
      </GridContainer>
    </div>
  );
}
