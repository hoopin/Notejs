import axios from 'axios'

export const FETCH_ALL = 'FETCH_ALL'
export const DELETE_ALL = 'DELETE_ALL'

export function fetchAll () {
  const request = axios.get(``)
  return {
    type: FETCH_ALL,
    payload: request
  }
}

export function deleteAll () {
  const request = axios.get(``)
  return {
    type: DELETE_ALL,
    payload: request
  }
}
