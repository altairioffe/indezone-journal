import React from "react";
import Typography from "@material-ui/core/Typography";

export default function LoadingImage(props){
  let message = 
    (props.mood === "happy" &&
      "Loading qestions to help you focus that positive energy") ||
    (props.mood === "sad" &&
      "Loading questions to build gratitude & self-compassion")
  
  return (
    <main  id="loading">
      <img src="images/loading.gif" alt="loading" id="loading-gif" />
      <Typography>
        {message}
      </Typography>
      
    </main>
  );
}