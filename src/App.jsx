import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './componenet/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './componenet/Footer/Footer'
// import React from 'react';

// import App from './App';
import React, { useEffect } from 'react';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Header/>
  <Outlet/>
  <Footer/>

    </>
  )
}

export default App
