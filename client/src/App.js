import React from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import NaviBar from './components/NaviBar';
import './app.css'

function App() {

  return (
    <Router>
      <NaviBar />
    </Router>
  );
}

export default App;