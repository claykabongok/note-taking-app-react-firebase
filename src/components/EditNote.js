import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";
import firebase from "../firebase";
import Typography from "@material-ui/core/Typography";
import Header from "./Header";

function EditNote(props) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    const docId = props.match.params.id;
    firebase
      .firestore()
      .collection("notes")
      .doc(docId)
      .get()
      .then((doc) => {
        if (doc.exists) {
          const notes = doc.data();
          setTitle(notes.title);
          setText(notes.text);
        }
      });
  }, [props.match.params.id]);

  function handleTitleInput(e) {
    setTitle(e.target.value);
  }
  function handleTextInput(e) {
    setText(e.target.value);
  }

  function updateNote(e) {
    e.preventDefault();

    const id = props.match.params.id;
    firebase
      .firestore()
      .collection("notes")
      .doc(id)
      .set({
        title: title,
        text: text,
      })
      .then(() => {
        setTitle("");
        setText("");

        props.history.push("/viewnote/" + id);
      });
  }

  return (
    <>
      <Header />
      <Box
        display="flex"
        justifyContent="center"
        margin="40px auto "
        alignItems="center"
      >
        <form
          style={{ marginLeft: "1rem", width: "75%" }}
          onSubmit={updateNote}
        >
          <Typography variant="h6" color="primary">
            Edit note
          </Typography>

          <TextField
            margin="normal"
            fullWidth
            autoFocus
            name="title"
            label="title"
            variant="outlined"
            value={title}
            onChange={handleTitleInput}
            placeholder="Title"
          />
          <TextField
            margin="normal"
            fullWidth
            autoFocus
            multiline
            name="text"
            label="Note"
            variant="outlined"
            value={text}
            onChange={handleTextInput}
            placeholder="Text"
          />
          <Button variant="contained" color="primary" type="submit">
            Update Note
          </Button>
        </form>
      </Box>
    </>
  );
}

export default EditNote;
