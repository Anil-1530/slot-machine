import React from 'react';
import SlotMachine from './components/SlotMachine';

function App() {
  return (
    <div className="App" style={{
      backgroundColor: '#111',
      color: 'white',
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ textAlign: 'center', fontSize: '3rem' }}>🎰 Slot Machine Game</h1>
      <SlotMachine />
    </div>
  );
}

export default App;
