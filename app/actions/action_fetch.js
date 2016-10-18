import axios from 'axios'

// TODO: if you think that some actions are needed or not needed
// notify the slack group so we can discuss
export const FETCH_NOTE = 'FETCH_NOTE'
export const FETCH_FOLDER = 'FETCH_FOLDER'
export const FETCH_ALL = 'FETCH_ALL'

// TODO: update axios requests with backend endpoints
export function fetchNote () {
  const request = axios.get(``)
  return {
    type: FETCH_NOTE,
    payload: request
  }
}

export function fetchFolder () {
  const request = axios.get(``)
  return {
    type: FETCH_FOLDER,
    payload: request
  }
}

export function fetchAll () {
  const request = axios.get(``)
  return {
    type: FETCH_ALL,
    payload: request
  }
}
