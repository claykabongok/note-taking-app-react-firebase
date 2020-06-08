import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import { Box } from "@material-ui/core";
import Header from "./Header";
import firebase from "../firebase";

function NewNote(props) {
  const [title, setTitle] = useState("");
  const [text, settext] = useState("");

  function handleTitleInput(e) {
    setTitle(e.target.value);
  }
  function handleTextInput(e) {
    settext(e.target.value);
  }
  function addNote(e) {
    e.preventDefault();

    const db = firebase.firestore();
    db.collection("notes")
      .add({ title: title, text: text })
      .then(() => {
        setTitle("");
        settext("");
        props.history.push("/");
      });
  }

  return (
    <>
      <Header />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        margin="50px auto"
      >
        <form style={{ marginLeft: "1rem", width: "50%" }} onSubmit={addNote}>
          <Typography variant="h6" color="primary">
            Add new note
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

          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            startIcon={<AddIcon />}
          >
            Add note
          </Button>
        </form>
      </Box>
    </>
  );
}

export default NewNote;
