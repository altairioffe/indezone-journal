import React from "react";
import Typography from "@material-ui/core/Typography";

export default function LoadingImage(props){
  let message = props.message
  return (
    <main  id="loading">
      <Typography>
        {message}
      </Typography>
      <img src="images/loading.gif" id="loading-gif" />
      
    </main>
  );
}