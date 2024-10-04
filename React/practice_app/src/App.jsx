import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './Component/Membership/Register'
import Login from './Component/Membership/Login'
import Navbar from './Component/Navbar'

function App() {

  return (
    <div>
      <Navbar/>
      <hr/>
      <Register/>
      <hr/>
      <Login/>
    </div>
  )
}

export default App
