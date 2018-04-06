import { createStore, combineReducers, applyMiddleware } from 'redux'

import { feedItems } from './reducers/feeditems'
import { tips } from './reducers/tips'
import appData from './reducers/app-data'
import drawer from './reducers/drawer'

import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({ feedItems, tips, appData, drawer}),
  applyMiddleware(thunk)
)

export default store
