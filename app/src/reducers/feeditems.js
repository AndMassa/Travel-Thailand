import {SET_FEEDITEMS} from '../constants'

export const feedItems = (state=[], action) => {
  switch (action.type) {
    case SET_FEEDITEMS:
      return action.payload
    default:
      return state
  }
}
