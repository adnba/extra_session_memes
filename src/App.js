import React, { Component } from "react"
import Memes from "./components/Memes"
import { Link, Route, Switch } from "react-router-dom"
import AboutUs from "./components/AboutUs"

class App extends Component {
  render() {
    return (
      <>
        <Link to="/">Memes</Link>
        <Link to="/about-us">About us</Link>
        <Switch>
          <Route exact path="/" render={() => <Memes />} />
          <Route path="/about-us" render={() => <AboutUs />} />
        </Switch>
      </>
    )
  }
}

export default App
