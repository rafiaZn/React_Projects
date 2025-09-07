import React, { useEffect, useState } from 'react'

export default function WeatherApi() {
    const [weather,setWeather] = useState('')
    useEffect(()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
              console.log("print", navigator)
              console.log("pr", position)

              const latitude = position.coords.latitude;
              const longitude = position.coords.longitude;

              fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=f7e41ce7e70845cc2b06568cfc7cfb4c`)
              .then((response)=>response.json())
              .then((data) => setWeather(data))
            })
        }
    },[])
         console.log("print Weather", {weather})
  return (
    <div>
 
       {weather ? (<div>
            <h3>Your Weather Details</h3>
           <p> Location : {weather.name}</p>
           <p> Temperature : {weather.main.temp}</p>
           <p> Conditions : {weather.weather[0].description}</p>
       </div> 
       ):(
         <h3>Loading..</h3>)
         }
    </div>
  )
}
