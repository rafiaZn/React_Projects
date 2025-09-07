import React from 'react'
import { BrowserRouter,Link, Route, Routes } from 'react-router-dom'
import Mobile from './Mobile'
import FetchData from './FetchData'

export default function Router() {
  return (
    // first run: npm i react-router-dom
    <BrowserRouter>
      <nav>
        <ul>
             <li>
                <Link to='/'>FetchData</Link>
            </li>
            <li>
                <Link to='/mobile'>Mobile</Link>
            </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<FetchData/>}></Route>
        <Route path='/mobile' element={<Mobile/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
