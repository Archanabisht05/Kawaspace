import React from "react";
import { Routes, Route } from "react-router-dom";
import Pricing from './Pricing'
import Home from './Home'
import Download from './Download'

const Router = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/download" element={<Download/>} />
      </Routes>
    </div>
  );
};

export default Router;
