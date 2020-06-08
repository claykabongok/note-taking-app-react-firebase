import React from "react";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import FlipMove from "react-flip-move";
import { makeStyles } from "@material-ui/core/styles";
import Note from "./Note";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

function Notes({ notes }) {
  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Typography 
            variant="h6"
             className={classes.title}
             color="primary"
             >
              My notes
            </Typography>

            <div className={classes.demo}>
              <List>
                <FlipMove duration={600} easing="ease-in">
                  {notes.map((note, i) => (
                    <React.Fragment key={i}>
                      <Note note={note} />
                    </React.Fragment>
                  ))}
                </FlipMove>
              </List>
            </div>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}

export default Notes;
