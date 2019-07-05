import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <header>
      <Navbar />
      </header>
      <div className="mainTitle">
        <h1>sQuizYou</h1>
        <h2>Witamy!</h2>
      </div>
    </div>
  );
}

export default App;
