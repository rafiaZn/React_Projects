import React from 'react'
import { useState, useEffect } from 'react';

export default function  () {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
 const [backgroundColor,setBackgroundColor] = useState('green');
 const handleColor = () => {
  const newColor = backgroundColor === 'green' ? 'lightblue' : 'orange'
  setBackgroundColor(newColor)
 }
  useEffect(()=>{
    let interval= null;
    if(running){
      interval = setInterval(()=>{
        setSeconds(second=>second+1)
      },1000)
    }
    else if(!running && seconds !==0){
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  },[running,seconds])
  return (
    <div>
      <h3>Timer : {seconds}</h3>
      <button style={{backgroundColor}} onClick={handleColor}>Click Me</button>
      <button onClick={()=>(setRunning(true))}>Start</button>
      <button onClick={()=> (setRunning(false))}>Pause</button>
      <button onClick={()=>(setSeconds(0))}>Reset</button>
    </div>
  )
}
