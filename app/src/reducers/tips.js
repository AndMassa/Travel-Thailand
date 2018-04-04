import {SET_TIPS} from '../constants'

export const tips = (state = [], action) => {
  switch (action.type) {
    case SET_TIPS:
      return action.payload
    default:
      return state
  }
}
