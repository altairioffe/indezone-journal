import React from 'react';
import { Button} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import PollIcon from '@material-ui/icons/Poll';

export default function UserBio(props) {
  // Define Styles
const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(0, 240, 230, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: "0 10px",
    textAlign:"center"
  },
  button: {
    background: "#00A8E0",
    color: "white",
    fontWeight: 300,
    fontSize: "1em",
    padding: "0.8em 1.2em"
  }
});
const classes = useStyles();

  return(
    <article className="">
    <p>{props.bio || ""}</p>
    <Button 
       className={classes.button}
       onClick={props.onClick}
       disabled={props.disabled}
       endIcon={<PollIcon/>}
       >
      GET INSIGHTS
    </Button>
    </article>
  )
}