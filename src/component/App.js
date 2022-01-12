import React from "react";
import Router from './Router'
import Navbar from "./Navbar";
import './css/style.css'

const App = () => {
  return (
    <div className="main">
      <Navbar/>
      <Router/>
    </div>
  );
};

export default App;
