import React, { useRef, useState } from 'react'
import './game.css'

import circle from "../Assets/circle.png"
import cross from "../Assets/cross.png"

let data = ["","","","","","","","",""];

const Game = () => {

  let [count,setCount] = useState(0);
  let [lock,setLock] = useState(false);
  // let titleRef =useRef(null);
  let box1 =useRef(null);
  let box2 =useRef(null);
  let box3 =useRef(null);
  let box4 =useRef(null);
  let box5 =useRef(null);
  let box6 =useRef(null);
  let box7 =useRef(null);
  let box8 =useRef(null);
  let box9 =useRef(null);
 
  let box_arr = [box1,box2,box3,box4,box5,box6,box7,box8, box9] 
  const toggle = (e,num) =>{
    if (lock){
      return 0;
    }
    if(count%2==0){
      e.target.innerHTML = `<img src = '${cross}'>`;
      data[num] = "x";
      setCount(++count);
    }
    else{
      e.target.innerHTML = `<img src = '${circle}'>`;
      data[num] = "o";
      setCount(++count);
    }
  }

  const reset = () =>{
    setLock(false);
    data = ["","","","","","","","",""];
    // titleRef.current.innerHTML = 'Game with <span>React</span>'
    box_arr.map((e)=>{
      e.current.innerHTML= "";
    })
  }

  return (
    <div className='container'>
      <h1 className='title'> Game with <span>React</span> </h1>
    <div className="board">
      <div className="row1">
        <div className="boxes" ref={box1} onClick={(e)=> {toggle(e,0)}}></div>
        <div className="boxes" ref={box2} onClick={(e)=> {toggle(e,1)}}></div>
        <div className="boxes" ref={box3} onClick={(e)=> {toggle(e,2)}}></div>
      </div>

      <div className="row2">
        <div className="boxes"ref={box4} onClick={(e)=> {toggle(e,3)}}></div>
        <div className="boxes" ref={box5}onClick={(e)=> {toggle(e,4)}}></div>
        <div className="boxes" ref={box6}onClick={(e)=> {toggle(e,5)}}></div>
      </div>

      <div className="row3">
        <div className="boxes" ref={box7}onClick={(e)=> {toggle(e,6)}}></div>
        <div className="boxes" ref={box8}onClick={(e)=> {toggle(e,7)}}></div>
        <div className="boxes" ref={box9} onClick={(e)=> {toggle(e,8)}}></div>
      </div>

    </div>
    <button className="reset" onClick={()=>{reset()}}>Reset</button>
    </div>
  )
}

export default Game


