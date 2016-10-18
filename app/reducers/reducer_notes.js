// TODO: import needed actions
import { FETCH_NOTE, FETCH_FOLDER, FETCH_ALL } from '../actions/action_fetch'

const INITIAL_STATE = {
  folders: [], // Each folder in array has object props of {id: unique number, name: string, notes: []}
  notes: [], // Each note in array has object props of {id: unique number, name: string, content: string, folder: (folderId || null)}
  currentNote: null
}

// TODO: if needed action, create a case
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_FOLDER: // TODO: Update this case
      return {...state, folders: action.payload.data}
    case FETCH_NOTE:
      return {...state, currentNote: action.payload.data}
    case FETCH_ALL: // TODO: Update this case
      return {...state, notes: action.payload.data}
    default:
      return state
  }
}
