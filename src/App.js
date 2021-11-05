import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Error from './pages/Error'
import Navbar from './Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </>
  )
}

export default App
