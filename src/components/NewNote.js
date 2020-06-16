import React, { useState, useRef } from "react";
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
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

function NewNote(props) {
  const [title, setTitle] = useState("");
  const [text, settext] = useState("");
  const inputRef=useRef("form");

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
        <ValidatorForm
          ref={inputRef}
          onSubmit={addNote}
          style={{ marginLeft: "1rem", width: "50%" }}
          
         
        >
          <Typography variant="h6" color="primary">
            Add new note
          </Typography>

          <TextValidator
            margin="normal"
            fullWidth
            autoFocus
            name="title"
            label="title"
            variant="outlined"
            value={title}
            onChange={handleTitleInput}
            placeholder="Title"
            validators={["required"]}
            errorMessages={["A title  is required, Please type something here."]}
          />
         
          <TextValidator
            margin="normal"
            fullWidth
            autoFocus
            name="text"
            label="Note"
            variant="outlined"
            value={text}
            onChange={handleTextInput}
            placeholder="Note"
            validators={["required"]}
            errorMessages={["Note required, Please type something here."]}
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
        </ValidatorForm>
      </Box>
    </>
  );
}

export default NewNote;
