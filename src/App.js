import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm.js'
import Logout from './components/Logout.js'

function App() {
  return (
    <div className="App">
      <LoginForm />
      <Logout />
    </div>
  );
}

export default App;
