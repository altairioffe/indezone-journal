import React from "react";
import Typography from "@material-ui/core/Typography";

export default function Tutorial2(props) {
  return (
    <div>
      <Typography gutterBottom>Let’s get started!</Typography>
      <Typography gutterBottom>
        With regular use, this app is designed to help you:
      </Typography>
      <Typography gutterBottom>
        <ul>
          <li> increase focus around your goals</li>
          <li>
            {" "}
            increase awareness of automatic thoughts or feelings that might be
            holding you back
          </li>
          <li> learn how to manage your thoughts and feelings </li>
          <li> build self-compassion and gratitude</li>
          <li>
            {" "}
            identify your values so you can prioritze you goals and direct your
            energies towards achieving them
          </li>
          <li>
            {" "}
            get deep insight into who you are, so that you can make changes
            towards the person you want to be{" "}
          </li>
        </ul>
      </Typography>
      <Typography gutterBottom>
      </Typography>
    </div>
  );
}
