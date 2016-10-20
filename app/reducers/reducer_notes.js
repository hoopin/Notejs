// TODO: import needed actions
// import { FETCH_NOTE, FETCH_FOLDER, FETCH_ALL } from '../actions/action_fetch'
import { FETCH_FOLDERS, FETCH_FOLDER } from '../actions/action_folder'
import { FETCH_NOTE } from '../actions/action_note'

const INITIAL_STATE = {
  folders: [], // Each folder in array has object props of {id: unique number, name: string, notes: []}
  currentNote: null,
  currentFolder: [],
}

// TODO: if needed action, create a case
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_FOLDERS: // TODO: Update this case
      console.log('FETCH_FOLDERS payload:', action.payload)
      return {...state, folders: action.payload}
    case FETCH_FOLDER:
      console.log('FETCH_FOLDER payload:', action.payload)
      return {...state, currentFolder: action.payload}
    case FETCH_NOTE:
      console.log('FETCH_NOTE payload:', action.payload)
      return {...state, currentNote: action.payload}
    // case FETCH_ALL: // TODO: Update this case
    //   return {...state, notes: action.payload.data}
    default:
      return state
  }
}
