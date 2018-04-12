import { createStore, combineReducers, applyMiddleware } from 'redux'

import { feedItems, feedItem } from './reducers/feeditems'
import { tips, tip } from './reducers/tips'
import appData from './reducers/app-data'
import drawer from './reducers/drawer'
import {interests} from './reducers/interests'

import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({ feedItems, feedItem, tips, tip, appData, drawer, interests}),
  applyMiddleware(thunk)
)

export default store
