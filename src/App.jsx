import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./component/UserList";
import UserDetails from "./component/UserDetails";

function App() {
  return (
    // -------------routing for userlist and UserDetails------------------
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<UserList />} />
          <Route path="/user/:username" element={<UserDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
