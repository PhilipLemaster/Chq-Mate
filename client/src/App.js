import React from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import SideNav from './components/SideNav';

function App() {

  return (
    <Router>
      < SideNav />
    </Router>
  );
}

export default App;