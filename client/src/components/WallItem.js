import React from "react";
import { TimelineEvent } from "react-event-timeline";
import { styles } from "../styles/WallStyles";
import { FormatQuote } from "@material-ui/icons";
import FlashOnIcon from "@material-ui/icons/FlashOn";

export default function WallItem(props) {

  return (
    <TimelineEvent
      contentStyle={styles.contentStyle}
      bubbleStyle={styles.bubbleStyle}
      key={props.createdAt}
      title={props.question ? props.question : ""}
      titleStyle={{ color: "#00A8E0", fontWeight: "bold" }}
      createdAt={props.createdAt}
      icon={
        props.answer.split(" ").length > 40 ? (
          <FlashOnIcon style={{ color: "00A8E0" }}></FlashOnIcon>
        ) : (
          <FormatQuote style={{ color: "#02a8e04d" }}></FormatQuote>
        )
      }>
      <p>{props.answer}</p>
    </TimelineEvent>
  );
}
