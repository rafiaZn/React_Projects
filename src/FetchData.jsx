import React, {useEffect, useState } from 'react'

function FetchData() {
const [data, setData] = useState()
const [seconds,setSeconds] = useState(0)
const [running,setRunning] = useState(false)
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error))
},[])

// TIMER or STOPWATCH Function
useEffect(()=>{
    let interval = null;
   if(running) { interval = setInterval(()=>{
       setSeconds(seconds  => seconds + 1)
    },100)}
    else if(!running){
        clearInterval(interval)
    }
    return () => clearInterval(interval)
},[running, seconds])
  return (
  <>
    Timer : {seconds}
    <button onClick={()=>(setRunning(true))}>Start</button>
    <button onClick={()=>(setRunning(false))}>Pause</button>
    <button onClick={()=>(setSeconds(0))}>Reset</button>
    {data ? <h3>{data.id} : {data.title}</h3> : <h3>Loading!!</h3>}
  </>
  )
}

export default FetchData
