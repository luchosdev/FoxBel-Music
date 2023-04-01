import React from 'react';
import Home from './components/Home/Home';
import Player from './components/Player/Player';
import './App.css';

function App() {
  return (
    <div
      className="App font-"
      style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
    >
      <Home style={{ flex: '1 0 0' }} />
      <Player style={{ flex: '0 0 80px' }} />
    </div>
  );
}

export default App;
