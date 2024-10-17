import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Users from './Users'
import Friends from './Friends'

function App() {

  function handleClick() {
    alert("button clicked");
  }

  const handleClick2 = () => {
    alert("button 2 clicked")
  }

  return (
    <>
      <h3>React Core Concept 2</h3>
      <Friends></Friends>

      <Users></Users>

      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>

      <button onClick={handleClick2}>Click Me 2</button>
    </>
  )
}

export default App
