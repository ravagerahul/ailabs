import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./dashboard/Dashboard";
import SignInSide from "./sign-in-side/SignInSide";
import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [openDashboard, setOpenDashboard] = React.useState(false);
  const gotoDashboard = () => {
    console.log("gotoDashboard");
    setOpenDashboard(true);
  };
  return (
    
      <Router>
    <Routes>
    <Route path="/" element={<SignInSide />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
    
    
  );
}

export default App;
