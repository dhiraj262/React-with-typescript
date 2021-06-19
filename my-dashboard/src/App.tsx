import React from 'react';
import './App.css';
import Sidebar from './components/dashboard/sidebar/sidebar';
import Topbar from './components/dashboard/topbar/Topbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">

      <Sidebar/>
      </div>

    </Router>
      );
}

export default App;
