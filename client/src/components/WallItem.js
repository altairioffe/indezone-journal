import React from 'react';
import { TimelineEvent } from 'react-event-timeline';
import  {styles}  from './WallStyles';
import { FormatQuote } from '@material-ui/icons';
import FlashOnIcon from '@material-ui/icons/FlashOn';
export default function WallItem(props) {
 
  return (

    <TimelineEvent contentStyle={styles.contentStyle} bubbleStyle={styles.bubbleStyle} key={props.createdAt} title={props.question?props.question:""}
      createdAt={props.createdAt}
      icon={<FormatQuote style={{ color: "white" }}></FormatQuote>}
    >
      <p>{props.answer}</p>
    </TimelineEvent>

  );

}