import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./container/NavBar";
import HomePage from "./container/HomePage";
import About from "./container/About";
import LogIn from "./container/LogIn";
import Register from "./container/Register";
import Store from "./container/Store";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/store/:id" element={<Store/>}/>
      </Routes>
    </Router>
  );
};

export default App;
