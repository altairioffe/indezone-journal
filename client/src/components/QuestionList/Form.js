import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Tooltip from '@material-ui/core/Tooltip';



export default function Form(props) {
  const [ans, setAns] = useState("");
  const [labelText, setLabelText] = useState([
    "Write at least 40 words for a Power Entry",
    { style: { color: "#00A8E0" } }
  ]);
 
  const useStyles = makeStyles({
    root: {
      border: "none !important",
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(0, 240, 230, .3)",
      color: "white",
      height: 48,
      padding: "0 30px",
      margin: "0 10px"
    }
  });
  const classes = useStyles();


  //if props.level <3, provide writing tips

  const writingTips1 = ["invest 1-2 minutes on a detailed answer", "use full sentences", "why is this important to you?"]


  //more meaning // pattern interrupts to challenge negative behaviour
  const writingTips2 = ["why is this important to you?", ]


  return (
    <main>
      <form
        autoComplete="off"
        onSubmit={event => {
          event.preventDefault();
        }}>
        <TextField
          id="filled-textarea"
          label={labelText[0]}
          placeholder={props.suggestion}
          autoFocus
          multiline
          rows={2}
          rowsMax={32}
          fullWidth
          variant="filled"
          InputLabelProps={labelText[1]}
          onFocus={() => {setLabelText([
            "Write at least 40 words for a Power Entry!",
            { style: { color: "#00A8E0" } }
          ])
          }}
          style={{backgroundColor: "white"}}
          inputProps={{
            value: ans,
            type: "email",
            onChange: function(e) {
              setAns(e.target.value);
              setLabelText([
                ans.split(" ").length > 40 ? "Power Entry Achieved! Keep going!": "Keep it up!",
                { style: { color: "#00A8E0" } }
              ])
            }
          }}
        />
         <Tooltip title={ans.length > 0 && ans.length < 100 ? "Spend 1-2 minutes on detailed answers for best results" : ""} arrow>
        <Button
          variant="outlined"
          color="primary"
          style={{ color: "#00A8E0", marginTop: "20px" }}
          size="large"
          onClick={() => {
            if (ans) {
              props
                .setAnswer(ans)
                .then(() => props.addUserGoal({ goal_id: props.goal_id }, ans))
                .then(() => setAns(""))
                .then(() =>
                  setLabelText([
                    "Saved! Scroll down to see your entries",
                    { style: { color: "#00A8E0" } }
                  ])
                );
            } else {
              setLabelText([
                "Write something!",
                { style: { color: "orange" } }
              ]);
            }
          }}>
          Answer
        </Button>
        </Tooltip>
      </form>
    </main>
  );
}
