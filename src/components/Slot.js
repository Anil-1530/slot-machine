import React from 'react';
import './Slot.css';

export default function Slot({ symbol, isSpinning }) {
  return (
    <div className={`slot ${isSpinning ? 'spin' : ''}`}>
      {symbol}
    </div>
  );
}
