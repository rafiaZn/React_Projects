import React, { useState } from 'react'

export default function FilterData({item}) {
    const [searchTerm,setSearchTerm] = useState('')
    const filteredItem = item.filter((item)=> item.toLowerCase().includes(searchTerm.toLowerCase()))
  return (
    <div>
      <input type='text' placeholder='search..' onChange={(e)=>setSearchTerm(e.target.value)}/>
     <ul>{filteredItem.map((item,index)=>(
        <li key = {index}>{item}</li>
     ))}</ul> 
    </div>
  )
}

