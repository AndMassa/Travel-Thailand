import {CHOOSE_INTERESTS} from '../constants'
import {map, merge} from 'ramda'

const initialState = [
  {tag: 'history', checked: false},
  {tag: 'shopping', checked: false}
]

export const interests = (state=initialState, action) => {
  switch (action.type) {
    case CHOOSE_INTERESTS:
      return map(i => i.tag === action.payload.tag ? merge(i, {checked: action.payload.checked}) : i , state)
    default:
      return state
  }
}
