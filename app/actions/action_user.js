import axios from 'axios'

// TODO: if you think that some actions are needed or not needed
// notify the slack group so we can discuss
export const CREATE_USER = 'CREATE_USER'
export const FETCH_USER = 'FETCH_USER'
export const DELETE_USER = 'DELETE_USER'

// TODO: update axios requests with backend endpoints
export function fetchUSER () {
  const request = axios.get(`/api/signin`)
  return {
    type: FETCH_USER,
    payload: request
  }
}

export function deleteUSER () {
  const request = axios.delete(``)
  return {
    type: DELETE_USER,
    payload: request
  }
}

export function createUSER (props) {
  const request = axios.post(`/api/signup`, props)
  return {
    type: CREATE_USER,
    payload: request
  }
}
