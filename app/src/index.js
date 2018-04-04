import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import store from './store'
import { Provider } from 'react-redux'
import { getFeedItems } from './action-creators/feeditems'
import 'typeface-roboto'

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
)
registerServiceWorker()

store.dispatch(getFeedItems)
