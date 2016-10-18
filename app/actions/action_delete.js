import axios from 'axios'

// TODO: if you think that some actions are needed or not needed
// notify the slack group so we can discuss
export const DELETE_NOTE = 'DELETE_NOTE'
export const DELETE_FOLDER = 'DELETE_FOLDER'

// TODO: update axios requests with backend endpoints
export function deleteNote () {
  const request = axios.get(``)
  return {
    type: DELETE_NOTE,
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
