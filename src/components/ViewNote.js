import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import { Box } from "@material-ui/core";
import Header from "./Header";
import firebase from "../firebase";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import noteImage from "../static/images/coffee.jpg";

const styles = (theme) => ({
  root: {
    maxWidth: 450,
  },
  media: {
    height: 140,

  },
});

function ViewNote(props) {
  const [notes, setNotes] = useState([]);
  const [key, setKey] = useState("");
  useEffect(() => {
    const docId = props.match.params.id;
    firebase
      .firestore()
      .collection("notes")
      .doc(docId)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setNotes(doc.data());
          setKey(doc.id);
        }
      });
  }, [props.match.params.id]);

  function deleteNote(id) {
    firebase
      .firestore()
      .collection("notes")
      .doc(id)
      .delete()
      .then(() => {
        props.history.push("/");
      });
  }

  const classes = styles();

  return (
    <>
      <Header />
      <Box
        display="flex"
        justifyContent="center"
        margin="40px auto "
        alignItems="center"
        width="75%"
        height="75%"
      >
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
           
             component="img"
              className={classes.media}
              height="200"
              image={noteImage}
              title="Note taking "
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                color="primary"
              >
                {notes.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {notes.text}
              </Typography>

              
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              variant="contained"
              color="secondary"
              size="medium"
              startIcon={<DeleteIcon />}
              onClick={() => deleteNote(key)}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="medium"
              startIcon={<EditIcon />}
              to={`/editnote/${key}`}
              component={Link}
            >
              Edit note
            </Button>

            <Button
              variant="contained"
              color="inherit"
              size="medium"
              startIcon={<KeyboardBackspaceIcon />}
              to={`/`}
              component={Link}
            >
              Back to my notes
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}

export default withStyles(styles, { withTheme: true })(ViewNote);
