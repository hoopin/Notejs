import axios from 'axios'

// TODO: if you think that some actions are needed or not needed
// notify the slack group so we can discuss
export const FETCH_FOLDER = 'FETCH_FOLDER'
export const CREATE_FOLDER = 'CREATE_FOLDER'
export const DELETE_FOLDER = 'DELETE_FOLDER'
export const UPDATE_FOLDER = 'UPDATE_FOLDER'

// TODO: update axios requests with backend endpoints
export function fetchFolder () {
  const request = axios.get(``)
  return {
    type: FETCH_FOLDER,
    payload: request
  }
}

export function createFolder () {
  const request = axios.get(``)
  return {
    type: CREATE_FOLDER,
    payload: request
  }
}

export function deleteFolder () {
  const request = axios.get(``)
  return {
    type: DELETE_FOLDER,
    payload: request
  }
}

export function updateFolder () {
  const request = axios.get(``)
  return {
    type: UPDATE_FOLDER,
    payload: request
  }
}
