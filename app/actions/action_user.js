import axios from 'axios'

export const CREATE_USER = 'CREATE_USER'
export const FETCH_USER = 'FETCH_USER'
export const DELETE_USER = 'DELETE_USER'

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
