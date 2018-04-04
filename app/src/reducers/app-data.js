import { ERROR } from '../constants'
import { merge } from 'ramda'

function getAppState() {
  return {
    appName: 'Travel Thailand',
    errorMsg: null
  }
}

export default (state = getAppState(), action) => {
  switch (action.type) {
    case ERROR:
      return merge(state, { errorMsg: action.payload })
    default:
      return state
  }
}
