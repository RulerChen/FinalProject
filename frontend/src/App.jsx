import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useHook } from "./hooks/useHook";
import NavBar from "./containers/NavBar";
import HomeOn from "./containers/HomeOn";
import HomeUn from "./containers/HomeUn";
import About from "./containers/About";
import LogIn from "./containers/LogIn";
import Register from "./containers/Register";
import Store from "./containers/Store";
import AddCard from "./containers/AddCard";
import Profile from "./containers/Profile";
import Detail from "./components/Detail";
import Pay from "./components/Pay";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const { signedIn } = useHook();
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={signedIn ? <HomeOn /> : <HomeUn />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/store/:game" element={<Store />} />
        <Route path="/addCard" element={<AddCard />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/pay/:id" element={<Pay />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
