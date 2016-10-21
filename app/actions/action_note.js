import axios from 'axios'

// TODO: if you think that some actions are needed or not needed
// notify the slack group so we can discuss
export const DELETE_NOTE = 'DELETE_NOTE'
export const FETCH_NOTE = 'FETCH_NOTE'
export const CREATE_NOTE = 'CREATE_NOTE'
export const UPDATE_NOTE = 'UPDATE_NOTE'

// TODO: update axios requests with backend endpoints
export function deleteNote () {
  const request = axios.get(``)
  return {
    type: DELETE_NOTE,
    payload: request
  }
}

export function fetchNote (id) {
  return (dispatch) => {
    axios.get(`/api/notes/${id}`)
    .then((res) => {
      dispatch({
        type: FETCH_NOTE,
        payload: res.data
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

export function createNote (props) {
  return (dispatch) => {
    console.log('inside the create note callback', props)
    axios.post(`/api/notes`, props)
    .then((res) => {
      dispatch({
        type: CREATE_NOTE,
        payload: res.data
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

export function updateNote () {
  const request = axios.get(``)
  return {
    type: UPDATE_NOTE,
    payload: request
  }
}
