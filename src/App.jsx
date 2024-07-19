import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Board from './components/Board';
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/Login" component={Login} />
      <Route path="/Board" component={Board} />
      </Routes>
    </Router>
  );
}

export default App;
