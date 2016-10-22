import axios from 'axios'

// TODO: if you think that some actions are needed or not needed
// notify the slack group so we can discuss
export const CREATE_USER = 'CREATE_USER'
export const FETCH_USER = 'FETCH_USER'
export const DELETE_USER = 'DELETE_USER'

// TODO: update axios requests with backend endpoints
export function fetchUser (props) {
  return (dispatch) => {
    console.log('inside the signin user callback', props)
    axios.post(`/api/users/signin`, props)
    .then((res) => {
      console.log('this is res after fetching user: ', res)
      console.log('what is this dispatch?', dispatch)
      dispatch({
        type: FETCH_USER,
        payload: res.data
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

export function deleteUser () {
  const request = axios.delete(``)
  return {
    type: DELETE_USER,
    payload: request
  }
}

export function createUser (props) {
  return (dispatch) => {
    console.log('inside the create user callback', props)
    axios.post(`/api/users/signup`, props)
    .then((res) => {
      dispatch({
        type: CREATE_USER,
        payload: res.data
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }
}
