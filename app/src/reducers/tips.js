import {SET_TIPS, GET_TIP} from '../constants'

export const tips = (state = [], action) => {
  switch (action.type) {
    case SET_TIPS:
      return action.payload
    default:
      return state
  }
}

export const tip = (state={}, action) => {
  switch (action.type) {
    case GET_TIP:
      return action.payload
    default:
      return state
  }
}
