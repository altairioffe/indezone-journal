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
import FlashOnIcon from "@material-ui/icons/FlashOn";


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
    },
    subList: {
      marginLeft: "-1.5rem",
    },
  });
  const classes = useStyles();
  return (
    <section className={classes.background} style={{ padding: "0px" }}>
      <div className={classes.content}>
        {" "}
        <Typography gutterBottom>To get the most out of Indezone Journal:</Typography>
        <br />
        <List className={classes.root}>

        <ListItem className={classes.list}>
            <ListItemAvatar>
              <Avatar>
                <CreateIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={<p style={{margin: "0px"}}>Answer <i>at least</i> one question every day to level up</p>}
              secondary={
                <>
                <ul className={classes.subList}>
                  <li>
                  Make entries both, morning <i>and</i> evening for best results
                  </li>
                </ul>
              </>}
            />
          </ListItem>

          <ListItem className={classes.list}>
            <ListItemAvatar>
              <Avatar>
                <TrendingUpIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Level up to get more questions and lessons"
              secondary={
                <>
                  <ul className={classes.subList}>
                    <li>
                      Your level increases every day that you keep a streak of
                      daily entries
                    </li>
                    <li>
                      Don't break your streak, or you'll drop down by one level!
                    </li>
                  </ul>
                </>
              }
            />
          </ListItem>

          <ListItem className={classes.list}>
            <ListItemAvatar>
              <Avatar>
              <FlashOnIcon style={{ color: "00A8E0" }}></FlashOnIcon>
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Earn Power Entries for answers that are over 40 words long"
            />
          </ListItem>

        </List>
      </div>
    </section>
  );
}
