import React from 'react';

export default function Buttons() {
  return (
    <>
      <div className="keypad">
        <button type="button" className="singleButton">AC</button>
        <button type="button" className="singleButton">+/-</button>
        <button type="button" className="singleButton">%</button>
        <button type="button" className="singleButton">/</button>
        <button type="button" className="singleButton">7</button>
        <button type="button" className="singleButton">8</button>
        <button type="button" className="singleButton">9</button>
        <button type="button" className="singleButton">X</button>
        <button type="button" className="singleButton">4</button>
        <button type="button" className="singleButton">5</button>
        <button type="button" className="singleButton">6</button>
        <button type="button" className="singleButton">-</button>
        <button type="button" className="singleButton">1</button>
        <button type="button" className="singleButton">2</button>
        <button type="button" className="singleButton">3</button>
        <button type="button" className="singleButton">+</button>
        <button type="button" className="doubleButton">0</button>
        <button type="button" className="singleButton">.</button>
        <button type="button" className="singleButton">=</button>
      </div>
    </>
  );
}