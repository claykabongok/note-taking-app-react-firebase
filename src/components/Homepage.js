import React, { useEffect, useState } from "react";
import "../App.css";
import firebase from "../firebase";
import Header from "./Header";
import Notes from "./Notes";


function Homepage() {
  const [notes, Setnotes] = useState([]);
  const userUID= firebase.auth().currentUser.uid;
 
  
  useEffect(() => {
    const loadNotes = async () => {
      const db = firebase.firestore();
      return db.collection(userUID).onSnapshot((snapshot) => {
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
  }, [userUID]);

  return (
    <div class="container">
     
      <Header />
    
      <Notes notes={notes} />
    
    </div>
  );
}

export default Homepage;
