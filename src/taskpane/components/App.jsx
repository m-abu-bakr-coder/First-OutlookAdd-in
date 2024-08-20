import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import CreateAccount from './CreateAccount';
import Login from './Login';
import Home from './Home';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<CreateAccount />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
