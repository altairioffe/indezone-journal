import React, { useState } from "react";
import Insight from "./Insight/Index";
import Resource from "./Resources/Index";
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

import useVisualMode from "../../hooks/useVisualMode";

export default function Rewards(props) {
  // Define Styles

  const [pulse, setPulse] = useState(`$pulse 3000ms infinite`);

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
      padding: "0.8em 1.2em"
    },
    mainCard: {
      backgroundColor: "rgb(235,240,235, 0.5)",
      boxShadow: "none"
    },
    card: {
      backgroundColor: "rgb(235,240,235, 0)",
      boxShadow: "none"
    },
    image: {
      height: "10vh",
      width: "auto",
      animation: pulse
    },
    "@keyframes pulse": {
      "0%": {
        transform: "scale(0.95)"
      },

      "70%": {
        transform: "scale(1.4)"
      },

      "100%": {
        transform: "scale(0.95)"
      }
    }
  });
  const classes = useStyles();

  /*

- quote

-button (REWARDS)
  onClick: transition mode to display 
    -Back Button
    -get insights button
    -render resource / reward based on user level

  */

  const [openDialog, setOpenDialog] = useState(false);

  return (
    <main>
      <Card className={classes.card}>
        {openDialog === false && (
          <>
            <IconButton
              className={classes.button}
              onClick={() => {
                setOpenDialog(true);
                setPulse(false);
              }}
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
                  <GridItem xs={6} sm={6} md={6} style={{ textAlign: "right" }}>
                    <h2>Level 1 </h2>
                  </GridItem>
                  <GridItem xs={6} sm={6} md={6}>
                    <div style={{ textAlign: "left" }}>
                      <img
                        src="images/happy-brain.svg"
                        style={{
                          margin: "0px",
                          height: "auto",
                          maxWidth: "15vh",
                          display: "block",
                          backgroundPosition: "50% 50%",
                          backgroundSize: "cover"
                        }}
                      />
                    </div>
                  </GridItem>
                </GridContainer>
                <hr />
              </div>
            </MuiDialogContent>

            <MuiDialogContent dividers style={{ padding: "0px" }}>
              <Card className={classes.mainCard}>
                <Resource level={1} user={props.user} />

                <hr />
                <Insight
                  bio={props.bio}
                  level={props.level}
                  requestInsight={props.requestInsight}
                  currentUserGoals={props.currentUserGoals}
                  userInsight={props.currentUserInsight}
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
