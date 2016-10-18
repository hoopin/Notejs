import axios from 'axios'

// TODO: if you think that some actions are needed or not needed
// notify the slack group so we can discuss
export const CREATE_NOTE = 'CREATE_NOTE'
export const CREATE_FOLDER = 'CREATE_FOLDER'

// TODO: update axios requests with backend endpoints
export function createNote () {
  const request = axios.get(``)
  return {
    type: CREATE_NOTE,
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
