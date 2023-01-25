import { useState } from 'react'
import './App.css'
import { useMemo } from 'react';

const DEFAULT_WEIGHT = 50;
const DEFAULT_HEIGHT = 150;

function App() {
  const [height, setHeight] = useState(DEFAULT_HEIGHT)
  const [weight, setWeight] = useState(DEFAULT_WEIGHT)

  function onHeightChange(e){
    const inputHeight = e.target.value
    setHeight(inputHeight)
  }

  function onWeightChange(e){
    const inputWeight = e.target.value
    setWeight(inputWeight)
  }

  const output = useMemo(() => {
    const calculateHeight = height / 100
    return (weight / (calculateHeight * calculateHeight)).toFixed(1)
  },[weight, height])

  return (
    <main>
      <h1>Project 7: BMI CALCULATOR</h1>
      <div className="input-section">
        <p className="slider-output">Weight: {weight} kg</p>
        <input 
          type="range"
          className='input-slider'
          onChange={onWeightChange}
          step="1"
          min="40"
          max="220" 
        />
        <p className="slider-output">Height: {height} cm</p>
        <input 
          type="range"
          className='input-slider'
          onChange={onHeightChange}
          min="140"
          max="220" 
        />
      </div>
      <div className="output-section">
        <p>Your BMI is:</p>
        <p className="output">{output}</p>
      </div>
    </main>
  )
}

export default App
