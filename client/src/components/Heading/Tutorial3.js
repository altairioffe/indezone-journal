import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Background from "../LandingPage/LandingImage/bg-pink-sky.jpg";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListIcon from "@material-ui/icons/List";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import CreateIcon from "@material-ui/icons/Create";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";

export default function Tutorial4(props) {
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
    background: {
      backgroundImage: `url(${Background})`,
      alt: "text",
      backgroundSize: "cover",
      padding: "0px"
    },
    content: {
      padding: "20px 50px 0px"
    },
    list: {
      marginBottom: "10px",
      marginLeft: "-10px"
    }
  });
  const classes = useStyles();
  return (
    <section className={classes.background} style={{ padding: "0px" }}>
      <div className={classes.content}>
        {" "}
        <Typography gutterBottom>Here's how it works:</Typography>
        <br />
        <List className={classes.root}>
          <ListItem style={{ marginTop: "-30px" }}>
            <ListItemAvatar>
              <Avatar>
                <ListIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="These questions will help you build the mindset of the world’s top performers
              "
            />
          </ListItem>
          <ListItem style={{ marginTop: "-30px" }}>
            <ListItemAvatar></ListItemAvatar>
            <ListItemText
              secondary={
                <>
                  <p>Through research-backed methods like:</p>
                  <ul>
                    <li>Cognitive Behavioral Therapy (CBT)</li>
                    <li>Mindfulness</li>
                    <li>And more!</li>
                  </ul>
                </>
              }
            />
          </ListItem>

          <ListItem style={{ marginTop: "-20px" }}>
            <ListItemAvatar>
              <Avatar>
                <WbSunnyIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <p>
                  In the morning, questions focus on <i>planning</i> and{" "}
                  <i>mindset</i>
                </p>
              }
            />
          </ListItem>
          <ListItem style={{ marginTop: "-20px" }}>
            <ListItemAvatar>
              <Avatar>
                <NightsStayIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <p>
                  In the evening, questions focus more on <i>reflection</i> and{" "}
                  <i>learning</i>
                </p>
              }
            />
          </ListItem>
        </List>
      </div>
    </section>
  );
}
