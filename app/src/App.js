import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/home'
import FeedItems from './pages/feeditems'
import Interests from './pages/interests'
import FeedItem from './pages/feeditems/show'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/feeditems" component={FeedItems} />
            <Route exact path="/interests" component={Interests} />
            <Route exact path="/feeditems/:id" component={FeedItem} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
