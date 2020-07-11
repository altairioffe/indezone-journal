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
      padding: "20px"
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
        <Typography gutterBottom>To get the most out of Indezone Journal:</Typography>
        <br />
        <List className={classes.root}>
    
        <ListItem>
            <ListItemAvatar>
              <Avatar>
                <TrendingUpIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Your level increases every day that you keep a streak going. Don't break your streak, or you'll drop down one level!"
              secondary="The number of questions increases with your level, challenging you to reflect and plan more deeply."
            />
          </ListItem>

          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <FitnessCenterIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="With each new level, you receive a new resource, challenging you to develop a new mental skill. "
              secondary="The resource for each level expires when you level up and a new resource takes its place. Make sure you get the most out of it while it’s there!"
            />
          </ListItem>

          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <TrendingUpIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="The number of questions displayed is based on your level, plus a bonus slot where you can write and reflect on anything you like."
              secondary=" As you level up, the number of questions increases, challenging you to reflect and plan more deeply."
            />
          </ListItem>
        </List>
      </div>
    </section>
  );
}
