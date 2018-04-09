import fetch from 'isomorphic-fetch'
import {
  CHOOSE_INTERESTS
} from '../constants'
const url = 'http://localhost:5000'

export const getInterests = async (dispatch, getState) => {
  const interests = await fetch(`${url}/interests`).then(res => res.json())
  dispatch({type: CHOOSE_INTERESTS, payload: interests})
}
