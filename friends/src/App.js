import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      Hello from App!
      <Login/>
      <PrivateRoute/>
    </div>
  );
}

export default App;
