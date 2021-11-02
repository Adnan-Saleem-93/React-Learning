import React from 'react'
import {Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'

const App = () => {
  return (
    <>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </>
  )
}

export default App
