import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SpeakerNotesIcon from "@material-ui/icons/SpeakerNotes";
import IconButton from "@material-ui/core/IconButton";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            to={`/`}
            component={Link}
          >
            <SpeakerNotesIcon />
          </IconButton>
          <Typography edge="start" variant="h6" className={classes.title}>
            Note taking App
          </Typography>
          

          <IconButton
            edge="end"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <Link to={`/newnote/`}>
              <Fab size="small" aria-label="add" className={classes.margin}>
                <AddIcon />
              </Fab>
            </Link>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
