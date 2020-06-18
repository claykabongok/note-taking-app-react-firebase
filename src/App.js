import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import ViewNote from "./components/ViewNote";
import EditNote from "./components/EditNote";
import NewNote from "./components/NewNote";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { AuthenticationProvider } from "./components/AuthenticationProvider";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <AuthenticationProvider>
      <Router>
        <div>
          <ProtectedRoute exact path="/" component={Homepage} />
          <ProtectedRoute path="/viewnote/:id" component={ViewNote} />
          <ProtectedRoute path="/newnote" component={NewNote} />
          <ProtectedRoute path="/editnote/:id" component={EditNote} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </div>
      </Router>
    </AuthenticationProvider>
  );
}

export default App;
