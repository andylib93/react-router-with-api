import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './pages/Home'
import Filler from './pages/Filler'
import './css/main.css'

const App = () => {

  return (
    <Router>
      <Nav />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/:name' exact>
          <Filler />
        </Route>
      </Switch>
    </Router>
  )
}

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
    </nav>
  )
}

const About = () => {
  return (
    <>
      <h1>About</h1>
      <p>This is an about page</p>
    </>
  )
}

export default App
