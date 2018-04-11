import {SET_FEEDITEMS, GET_FEEDITEM} from '../constants'

export const feedItems = (state=[], action) => {
  switch (action.type) {
    case SET_FEEDITEMS:
      return action.payload
    default:
      return state
  }
}

export const feedItem = (state={}, action) => {
  switch (action.type) {
    case GET_FEEDITEM:
      return action.payload
    default:
      return state
  }
}
