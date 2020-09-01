import React, { useState } from "react";
import Insight from "./Insight/Index";
import Lesson from "./Lessons/Index";
import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import FlashOnIcon from "@material-ui/icons/FlashOn";

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
      overflow: "visible",
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
      backgroundColor: "white",
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
      margin: "-25px 0px -25px"
    },
    notification: {
      height: "15vh",
      width: "auto",
      margin: "-25px 0px -25px",
      animation:
        ((levelOneNotification || props.newLessonNotification) &&
          `$pulse 2000ms infinite`) ||
        ""
    },
    "@keyframes pulse": {
      "0%": {
        transform: "scale(0.95)"
      },

      "80%": {
        transform: "scale(1.05)"
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
    props.dismissNewLessonNotification();
    setLevelOneNotification(false);
  };

  return (
    <main>
      <Card className={classes.card}>
        {openDialog === false && (
          <>
            {(levelOneNotification || props.newLessonNotification) && (
              <IconButton
                className={classes.button}
                onClick={() => handleClick()}
                simple="true"
                size="medium">
                <img
                  src={"../images/indezone-icon-alert.png"}
                  className={classes.notification}
                  alt="indezone notification"
                />
              </IconButton>
            )}

            {!(levelOneNotification || props.newLessonNotification) && (
              <IconButton
                className={classes.button}
                onClick={() => handleClick()}
                simple="true"
                size="medium">
                <img
                  src={"../images/indezone-icon.png"}
                  className={classes.image}
                  alt="indezone icon"
                />
              </IconButton>
            )}
          </>
        )}

        <Dialog
          maxWidth={false}
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
                    <h2 style={{ margin: "0px" }}>Level {props.level} </h2>
                    <div>
                      <h6 style={{ margin: "0px" }}>
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
                      <img
                        src={`images/brain-hats/brain-hats-${props.level}.png`}
                        className={classes.avatar}
                        alt="avatar"
                      />
                    </div>
                  </GridItem>
                </GridContainer>
                <hr />
              </div>
            </MuiDialogContent>

            <MuiDialogContent dividers style={{ padding: "0px" }}>
              <Card className={classes.mainCard}>
                <Lesson level={props.level} user={props.user} />

                <hr />
                <Insight
                  bio={props.bio}
                  level={props.level}
                  requestInsight={props.requestInsight}
                  userEntries={props.userEntries}
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
