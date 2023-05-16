import React, { useState, useEffect } from 'react'
import Home from './components/Home'
import HashLoader from 'react-spinners/HashLoader'
import { Routes, Route } from 'react-router-dom'
import './styles/css/main.css'
import Navbar from './components/Navbar'

import AboutUs from './components/AboutUs'

function App () {
  const [loading, setLoading] = useState(true)
  const themes = ['blue', 'grey', 'red', 'yellow']
  const randIndex = Math.floor(Math.random() * 4)
  const mainTheme = themes[randIndex]

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 100)
  })

  function loadingPanel () {
    return (
      <div className='loadingPanel'>
        <HashLoader
          color='#ab3743'
          loading={loading}
          size={150}
          aria-label='Loading Spinner'
          data-testid='loader'
        />
      </div>
    )
  }

  function mainContent () {
    return (
      <>
        <Navbar mainTheme={mainTheme} />
        <Routes>
          <Route path='/' element={<Home themes={themes} mainTheme={mainTheme} />} />
          <Route path='/about' element={<AboutUs />} />
        </Routes>
      </>
    )
  }

  return (
    <div className='App'>
      {loading
        ? loadingPanel
        : mainContent}
    </div>

  )
}

export default App
