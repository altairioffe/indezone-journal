import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
// core components
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
// import Button from "./CustomButtons/Button.js";
import Card from "../Card/Card.js";
import IconButton from "@material-ui/core/IconButton";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";

import CardBody from "../Card/CardBody.js";
import CardHeader from "../Card/CardHeader.js";
import CardFooter from "../Card/CardFooter.js";
import CustomInput from "../CustomInput/CustomInput.js";
import Popover from "@material-ui/core/Popover";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";
import LoadingImage from "./Loading";

import { Button } from "@material-ui/core";

export default function Login(props) {
  const [moodSelection, setMoodSelection] = useState("");
  const [message, setMessage] = useState("");

  const sadMessage = "loading questions to build mindfulness & self-compassion";
  //const hap
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
      flexGrow: 1,
      backgroundColor: `rgb(235,240,235, 0.6)`,
      padding: "5vh",
      marginTop: "-10vh"
    },
    button: {
      // height: "100%",
      // width: "50%"
    },
    image: {
      height: "300px",
      width: "300px"
    },
    innerCard: {
      backgroundColor: `rgb(235,240,235, 0)`,
      boxShadow: "none"
    },
    typography: {
      fontSize: "2em",
      padding: "1em"
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
    props.setUserMood(mood)
    setTimeout(() => props.renderMainPage(), 500)
    // set mood
    //  disable other button
    // replace clicked button with confirmation text
    // set timeout
    // render main page
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
            How are you feeling today?
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
                    className={classes.button}
                    disabled={moodSelection === "sad"}
                    simple="true"
                    onClick={() => setUserMood("happy")}
                    color="primary"
                    size="large">
                    <img src={"../images/happy-brain.svg"} className={classes.image}/>
                  </IconButton>
                </Fade>
              )}

              {moodSelection === "happy" && (
                <Fade in={moodSelection === "happy"} timeout={1000}>
                  <Card className={classes.innerCard}>
                    <Typography className={classes.innerText}>
                      Great! We'll serve up some questions to help you focus
                      that energy
                    </Typography>
                  </Card>
                </Fade>
              )}
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              {moodSelection !== "sad" && (
                <Fade in={moodSelection !== "sad"} timeout={1000}>
                  <IconButton
                    className={classes.button}
                    disabled={moodSelection === "happy"}
                    simple="true"
                    onClick={() => setUserMood("sad")}
                    color="primary"
                    fullWidth="true"
                    size="large">
                    <img src={"../images/sad-brain.svg"} className={classes.image}/>
                  </IconButton>
                </Fade>
              )}

              {moodSelection === "sad" && (
                <Fade in={moodSelection === "sad"} timeout={1000}>
                  <Card className={classes.innerCard}>
                    <Typography className={classes.innerText}>
                      It's okay if you're not feeling 100% right now. Research shows that you can change how you feel by changing your thoughts. The more your practice, the easier it
                      gets.
                    </Typography>
                  </Card>
                </Fade>
              )}
            </GridItem>
          </GridContainer>
          {moodSelection && (
            <Fade in={moodSelection} timeout={3000}>
              <Card className={classes.innerCard}>
              <LoadingImage
                mood={moodSelection}
              />
              </Card>
            </Fade>
          )}
        </Card>
      </GridContainer>
    </div>
  );
}
