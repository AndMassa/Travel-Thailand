import fetch from 'isomorphic-fetch'
import {
  SET_TIPS,
  GET_TIP
} from '../constants'
const url = 'http://localhost:5000'

export const getTips = async (dispatch, getState) => {
  const tips = await fetch(`${url}/tips`).then(res => res.json())
  dispatch({type: SET_TIPS, payload: feedItems})
}

export const getTip = async (dispatch, getState) => {
  const tip = await fetch(`${url}/tips/${id}`).then(res => res.json())
  dispatch({type: GET_FEEDITEM, payload: feedItem})
}
