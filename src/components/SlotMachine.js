import React, { useState } from 'react';
import Slot from './Slot';
import './Slot.css';

const symbols = ['🍒', '🍋', '🔔', '💎', '7️⃣'];

export default function SlotMachine() {
  // ✅ All useState hooks should go here, inside the component
  const [slots, setSlots] = useState(['🍒', '🍋', '🔔']);
  const [message, setMessage] = useState('');
  const [isSpinning, setIsSpinning] = useState(false);
  const [coins, setCoins] = useState(10); // ✅ place it here!

  const spin = () => {
    if (coins <= 0) {
      setMessage("💸 You're out of coins!");
      return;
    }

    setCoins(prev => prev - 1);
    setIsSpinning(true);

    setTimeout(() => {
      const newSlots = [
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
      ];
      setSlots(newSlots);
      setIsSpinning(false);

      if (newSlots[0] === newSlots[1] && newSlots[1] === newSlots[2]) {
        setMessage('🎉 You Win!');
        setCoins(prev => prev + 5);
      } else {
        setMessage('😢 Try Again!');
      }
    }, 500);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>💰 Coins: {coins}</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {slots.map((symbol, index) => (
          <Slot key={index} symbol={symbol} isSpinning={isSpinning} />
        ))}
      </div>
      <button onClick={spin} style={{ marginTop: '20px', fontSize: '1.5rem' }}>
        Spin
      </button>
      <p>{message}</p>
    </div>
  );
}
