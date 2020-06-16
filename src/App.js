import React, { useEffect, useState } from "react";
import "./App.css";
import firebase from "./firebase";
import Header from "./components/Header";
import Notes from "./components/Notes";


function App() {
  const [notes, Setnotes] = useState([]);
 

  useEffect(() => {
    const loadNotes = async () => {
      const db = firebase.firestore();
      return db.collection("notes").onSnapshot((snapshot) => {
        const noteData = [];
        snapshot.forEach((doc) =>
          noteData.push({
            ...doc.data(),
            key: doc.id,
          })
        );
        Setnotes(noteData);
      });
    };
    loadNotes();
  }, []);

  return (
    <div class="container">
     
      <Header />
    
      <Notes notes={notes} />
    
    </div>
  );
}

export default App;
