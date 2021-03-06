import axios from 'axios'

export const FETCH_FOLDER = 'FETCH_FOLDER'
export const FETCH_FOLDERS = 'FETCH_FOLDERS'
export const CREATE_FOLDER = 'CREATE_FOLDER'
export const DELETE_FOLDER = 'DELETE_FOLDER'
export const UPDATE_FOLDER = 'UPDATE_FOLDER'

export function fetchFolder (id) {
  return (dispatch) => {
    axios.get(`/api/folders/${id}`)
    .then((res) => {
      dispatch({
        type: FETCH_FOLDER,
        payload: res.data
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

export function fetchFolders () {
  return (dispatch) => {
    axios.get(`/api/folders/home/1`)
    .then((res) => {
      dispatch({
        type: FETCH_FOLDERS,
        payload: res.data
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

export function createFolder (props) {
  return (dispatch) => {
    console.log('inside the create folder callback', props)
    axios.post(`/api/folders`, props)
    .then((res) => {
      dispatch({
        type: CREATE_FOLDER,
        payload: res.data
      })
    })
    .catch((err) => {
      console.log(err)
    })
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
