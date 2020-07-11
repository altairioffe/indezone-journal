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
                <CreateIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={<p>Answer <i>at least</i> one question every day</p>}
              secondary={<p>Make entries each morning <i>and</i> evening for best results</p>}
            />
          </ListItem>

          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <WbSunnyIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Morning questions are geared more towards planning"
              secondary="July 20, 2014"
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <NightsStayIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Evening, your questions focus more on reflection"
              secondary="Jan 9, 2014"
            />
          </ListItem>

        </List>
      </div>
    </section>
  );
}
