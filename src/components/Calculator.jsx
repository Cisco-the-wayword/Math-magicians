import React from 'react';
import Buttons from './Buttons';

export default function Calculator() {
  return (
    <>
      <div className="container">
        <input type="text" className="resultBar" placeholder="0" />
        <Buttons />
      </div>
    </>
  );
}