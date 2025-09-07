import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User, {name} from './User'
import Info from './Info'
import Student from './Student'
import HelloWorld from './HelloWorld'
import FetchData from './FetchData'
import Mobile from './Mobile'
import Router from './Router'
import UploadImageFile from './UploadImageFile'
import WeatherApi from './WeatherApi'
import FilterData from './FilterData'

function App({}) {
const [counter,setCounter] = useState(0) 
const resetFunction=()=>{
  setCounter(0)
}
let [student,setStudent]=useState("")
let array = ['AMI','CLI','DMM']
let person={
  name:"Raf",
  email:"raf@gg.in",
  mobile:"9999"
  }
  let person1={
    name:"Asm",
    email:"Asm@gg.in",
    mobile:"8888"
    }
  let name="AMAN"

  return (
    <>
    <FilterData item={array}/>
    {/* <WeatherApi / >
    <UploadImageFile/>
    <FetchData /> */}
    {/* <Info />
    <Router/> */}
    {/* <Mobile /> */}
    {/* <FetchData /> */}
    {/* <HelloWorld /> */}















   {/* { student && <Student name={student} />}
   <button onClick={()=>{setStudent("HUMA")}}>Update Student Name</button>
    <User names={array[1]}/>
    <Info user={person}/>
    <Info user={person1}/>
    <User />
     <h2>Here is your counter {name} : "{counter}"</h2>
     <button onClick={()=>setCounter(counter+1)}>Increment</button>
     <button onClick={()=>setCounter(counter-1)}>Decrement</button>
     <button onClick={()=> resetFunction()}>Reset</button>
     <h2>
      {
        counter>0?`Number is ${counter}, Positive`:counter<0?`Number is ${counter}, Negative`:`Number is RESET to 0`
      }
     </h2> */}
    </>
  )
}


export default App
