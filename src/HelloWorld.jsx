import React from 'react'
import { useState } from 'react'

export default function HelloWorld() {
    const [counter,setCounter] = useState(0)
    const [input,setInput] = useState()
    const items = ["Item1","Item2","Item3","Item4","Item5","Item6"]
    const [toggle,setToggle] = useState(false)
  return (
    <div>
      <h3 >Hello!</h3>
      <button onClick={()=> setCounter(counter+1)}>+</button>
       <span> {counter} </span>
      <button onClick={()=> setCounter(counter-1)}>-</button>
      <hr />
      <span> Name: {input}</span>
      <input type='text' value={input} onChange={(e)=>(setInput(e.target.value))}/>
      <span>Age:</span>
      <input type='text' value={input} onChange={(e)=>(setInput(e.target.value))}/>  
      <hr /> 
       <ul>{items.map((item,index)=>{
          return <li key={index}>{item}</li>
       })}
        </ul> 
      {toggle? <button onClick={()=>(setToggle(!toggle))}>Toggled</button> : <button onClick={()=>(setToggle(!toggle))}>Not Toggled</button>}

     </div> 
  )
}
