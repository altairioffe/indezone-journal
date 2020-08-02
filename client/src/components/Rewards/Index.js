import React, { useState } from "react";
import Insight from "./Insight/Index";
import Resource from "./Lessons/Index";
import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import PollIcon from "@material-ui/icons/Poll";
import LockIcon from "@material-ui/icons/Lock";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import CloseIcon from "@material-ui/icons/Close";
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import FlashOnIcon from "@material-ui/icons/FlashOn";

import useVisualMode from "../../hooks/useVisualMode";

export default function Rewards(props) {
  const [levelOneNotification, setLevelOneNotification] = useState(
    props.level === 1
  );

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
      fontWeight: 300,
      fontSize: "1em",
      padding: "0px"
    },
    mainCard: {
      backgroundColor: "rgb(235,240,235, 0.5)",
      boxShadow: "none",
      margin: "0px"
    },
    card: {
      backgroundColor: "rgb(235,240,235, 0)",
      boxShadow: "none"
    },
    avatar: {
      margin: "0px",
      height: "auto",
      maxWidth: "15vh",
      display: "block",
      backgroundPosition: "50% 50%",
      backgroundSize: "cover"
    },
    image: {
      height: "15vh",
      width: "auto",
      margin: "-25px 0px -25px",
      animation:
        ((levelOneNotification || props.newChallengeNotification) &&
          `$pulse 2000ms infinite`) ||
        ""
    },
    "@keyframes pulse": {
      "0%": {
        transform: "scale(0.95)"
      },

      "70%": {
        transform: "scale(1.2)"
      },

      "100%": {
        transform: "scale(0.95)"
      }
    }
  });
  const classes = useStyles();

  const [openDialog, setOpenDialog] = useState(false);

  const handleClick = () => {
    setOpenDialog(true);
    console.log(props.dismissNewChallengeNotification);
    props.dismissNewChallengeNotification();
    setLevelOneNotification(false);
  };

  return (
    <main>
      <Card className={classes.card}>
        {openDialog === false && (
          <>
            <IconButton
              className={classes.button}
              onClick={() => handleClick()}
              simple="true"
              size="large">
              <img
                src={"../images/indezone-icon.png"}
                className={classes.image}
              />
            </IconButton>
          </>
        )}

        <Dialog
          maxWidth="false"
          onClose={() => setOpenDialog(false)}
          aria-labelledby="customized-dialog-title"
          open={openDialog}>
          <div style={{ width: "80vw" }}>
            <MuiDialogContent dividers style={{ padding: "0px" }}>
              <div>
                <GridContainer
                  justify="center"
                  direction="row"
                  alignItems="center"
                  spacing={2}>
                  <GridItem
                    xs={6}
                    sm={6}
                    md={6}
                    style={{ textAlign: "right" }}
                    direction="column">
                    <h2>Level {props.level} </h2>
                    <div>
                      <h6>
                        {" "}
                        <FlashOnIcon
                          style={{
                            color: "00A8E0",
                            marginBottom: "-8px"
                          }}></FlashOnIcon>
                        Power Entries: {props.powerEntries}
                      </h6>
                    </div>
                  </GridItem>
                  <GridItem xs={6} sm={6} md={6}>
                    <div style={{ textAlign: "left" }}>
                      {props.level === 1 && (
                        <img
                          src="images/brain-hats/brain-hats-01.png"
                          className={classes.avatar}
                        />
                      )}
                      {props.level === 2 && (
                        <img
                          src="images/brain-hats/brain-hats-02.png"
                          className={classes.avatar}
                        />
                      )}
                      {props.level === 3 && (
                        <img
                          src="images/brain-hats/brain-hats-03.png"
                          className={classes.avatar}
                        />
                      )}
                      {props.level === 4 && (
                        <img
                          src="images/brain-hats/brain-hats-04.png"
                          className={classes.avatar}
                        />
                      )}
                      {props.level === 5 && (
                        <img
                          src="images/brain-hats/brain-hats-05.png"
                          className={classes.avatar}
                        />
                      )}
                      {props.level === 6 && (
                        <img
                          src="images/brain-hats/brain-hats-06.png"
                          className={classes.avatar}
                        />
                      )}
                      {props.level === 7 && (
                        <img
                          src="images/brain-hats/brain-hats-07.png"
                          className={classes.avatar}
                        />
                      )}
                      {props.level === 8 && (
                        <img
                          src="images/brain-hats/brain-hats-08.png"
                          className={classes.avatar}
                        />
                      )}
                      {props.level === 9 && (
                        <img
                          src="images/brain-hats/brain-hats-09.png"
                          className={classes.avatar}
                        />
                      )}
                      {props.level === 10 && (
                        <img
                          src="images/brain-hats/brain-hats-10.png"
                          className={classes.avatar}
                        />
                      )}
                    </div>
                  </GridItem>
                </GridContainer>
                <hr />
              </div>
            </MuiDialogContent>

            <MuiDialogContent dividers style={{ padding: "0px" }}>
              <Card className={classes.mainCard}>
                <Resource level={props.level} user={props.user} />

                <hr />
                <Insight
                  bio={props.bio}
                  level={props.level}
                  requestInsight={props.requestInsight}
                  currentUserGoals={props.currentUserGoals}
                  userInsight={props.userInsight}
                  powerEntries={props.powerEntries}
                />
                <br />
              </Card>
            </MuiDialogContent>
            <MuiDialogActions>
              <Button onClick={() => setOpenDialog(false)} color="primary">
                Got It!
              </Button>
            </MuiDialogActions>
          </div>
        </Dialog>
      </Card>
    </main>
  );
}
