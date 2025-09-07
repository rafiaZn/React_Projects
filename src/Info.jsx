import { useState, useEffect

 } from "react";

function Info({user}){
const [toggle,setToggle]= useState(true);
const quotes = ['rafia', 'safia', 'ahmed', 'zohra']

useEffect(()=>{

},[]);
 const randomIndex = Math.floor(Math.random() * quotes.length)
 const random = quotes[randomIndex]
    return(
        <>
        <hr/>
        <h3>your quotes: {random}</h3>
        {/* <h2>{user.name}</h2>
        <h2>{user.email}</h2>
        <h2>{user.mobile}</h2>
         */}
        
        {/* <button onClick={()=>setToggle(!toggle)}>Toggle</button>
        {
            toggle? <h3>RAFFF</h3> : <h3>not found</h3>
        } */}
       
        </>
    )
   
}

export default Info;