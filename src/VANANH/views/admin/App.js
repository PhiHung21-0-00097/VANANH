import React from "react";

import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.json";
import Contact from "./Contact";
import Createcontact from "./Createcontact";
import Login from "./Login";
import Home from "./Home";
const App = () => {
  return (
    <>
      <div className="form-ls-5s">
        <Home />
        <Contact />
        <Routes>
          <Route path="/admin/login" element={<Login />} />
          <Route path="/create" element={<Createcontact />} />
          <Route path="/admin" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
};
export default App;
