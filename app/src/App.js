import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/home'
import FeedItems from './pages/feeditems'
import Tips from './pages/tips'
import Interests from './pages/interests'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/feeditems" component={FeedItems} />
            <Route exact path="/tips" component={Tips} />
            <Route exact path="/interests" component={Interests} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
