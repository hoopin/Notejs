import axios from 'axios'

// TODO: if you think that some actions are needed or not needed
// notify the slack group so we can discuss
export const FETCH_ALL = 'FETCH_ALL'
export const DELETE_ALL = 'DELETE_ALL'

// TODO: update axios requests with backend endpoints
export function fetchAll () {
  const request = axios.get(``)
  return {
    type: FETCH_ALL,
    payload: request
  }
}

export function deleteAll () {
  const request = axios.get(``)
  return {
    type: DELETE_ALL,
    payload: request
  }
}
