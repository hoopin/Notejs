import axios from 'axios'

// TODO: if you think that some actions are needed or not needed
// notify the slack group so we can discuss
export const UPDATE_NOTE = 'UPDATE_NOTE'
export const UPDATE_FOLDER = 'UPDATE_FOLDER'

// TODO: update axios requests with backend endpoints
export function updateNote () {
  const request = axios.get(``)
  return {
    type: UPDATE_NOTE,
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
