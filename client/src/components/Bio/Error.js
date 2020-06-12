import React from "react";
import { Button } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import LockIcon from '@material-ui/icons/Lock';

export default function Error(props) {
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
    heading: {
      fontWeight: '300'
          },
    paragraph: {
      fontWeight: '300'
    },
    button: {
      background: "#00A8E0",
      color: "white",
          '&:hover': {
            backgroundColor: 'skyBlue',
            color: '#FFF'
        },
      fontWeight: 300,
      fontSize: "1em",
      padding: "0.5em 2em"
  }
  });
  const classes = useStyles();

  return (
    <main className="heading">
      <LockIcon style={{color: "#00A8E0"}}/>
      <h4 className={classes.heading}>{props.message}</h4>
      <Button 
       className={classes.button}
       onClick={props.onCancel}>
         BACK
     </Button>
    </main>
  );
}