import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import SpeakerNotesIcon from "@material-ui/icons/SpeakerNotes";
import PageviewIcon from '@material-ui/icons/Pageview';
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Button from '@material-ui/core/Button';

export default function Note({ note }) {
  return (
    <ListItem>
      <>
        <ListItemAvatar>
          <Avatar>
            <SpeakerNotesIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={note.title} secondary={note.text} />
        
        
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
          to={`/viewnote/${note.key}`}
        component={Link}
        >
          <PageviewIcon />
        </IconButton>
       
      </>
    </ListItem>
  );
}
