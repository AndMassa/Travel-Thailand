import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import store from './store'
import { Provider } from 'react-redux'
import { getFeedItems, getFeedItem } from './action-creators/feeditems'
import { getTips } from './action-creators/tips'
import { getInterests } from './action-creators/interests'
import 'typeface-roboto'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'
import indigo from 'material-ui/colors/indigo'
import purple from 'material-ui/colors/purple'
import red from 'material-ui/colors/red'

const customTheme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: purple,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2
  }
})

ReactDOM.render(
  <MuiThemeProvider theme={customTheme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
)
registerServiceWorker()

store.dispatch(getFeedItems)
store.dispatch(getTips)
store.dispatch(getFeedItem)
