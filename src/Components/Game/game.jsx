import React from 'react'
import './game.css'

import circle from "../Assets/circle.jpg"
import cross from "../Assets/cross.jpg"

const game = () => {
  return (
    <div className='container'>
      <h1 className='title'> Game with <span>React</span> </h1>
    <div className="board">

    </div>
    <button className="reset">Reset</button>
    </div>
  )
}

export default game