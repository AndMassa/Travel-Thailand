import fetch from 'isomorphic-fetch'
import {
  SET_FEEDITEMS,
  GET_FEEDITEM
} from '../constants'
const url = 'http://localhost:5000'

export const getFeedItems = async (dispatch, getState) => {
  const feedItems = await fetch(`${url}/feeditems`).then(res => res.json())
  dispatch({type: SET_FEEDITEMS, payload: feedItems})
}

// export const getFeedItem = async (dispatch, getState) => {
//   const feedItem = await fetch(`${url}/feeditem/${id}`).then(res => res.json())
//   dispatch({type: GET_FEEDITEM, payload: feedItem})
// }
