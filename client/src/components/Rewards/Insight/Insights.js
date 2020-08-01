import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";

export default function Insights(props) {
  // Define Styles
  const useStyles = makeStyles({
    root: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(0, 240, 230, .3)",
      color: "white",
      height: 48,
      padding: "0 30px",
      margin: "0 10px",
      textAlign: "center"
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
      padding: "0.5em 2em"
    },
    text: {
      fontWeight: 200,
      padding: "1em"
    }
  });
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <article className={classes.text}>
      <h2> From your answers, I see it is likely that: </h2>
      <p style={{ margin: "1em" }}>{props.insights}</p>
      <h6>
        From this feedback, is there anything that you agree with and would like
        to work on changing?
      </h6>

      {/* <div>
        <Button
          aria-describedby={id}
          variant="contained"
          color="primary"
          onClick={handleClick}>
          How is this measured?
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}>
          <Typography className={classes.typography}>
            Wisdom, of course! And an AI algorithm developed by IBM.
          </Typography>
        </Popover>
      </div> */}
      <Button
        className={classes.button}
        onClick={props.onCancel}
        disabled={props.disabled}>
        BACK
      </Button>
    </article>
  );
}
