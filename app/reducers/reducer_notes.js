// TODO: import needed actions
// import { FETCH_NOTE, FETCH_FOLDER, FETCH_ALL } from '../actions/action_fetch'
import { FETCH_FOLDERS, FETCH_FOLDER } from '../actions/action_folder'

const INITIAL_STATE = {
  folders: [], // Each folder in array has object props of {id: unique number, name: string, notes: []}
  notes: [], // array of notes being displayed from the folder {id: unique number, name: string, content: string, folder: (folderId || null)}
  currentNote: null,
  currentFolder: null
}

// TODO: if needed action, create a case
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_FOLDERS: // TODO: Update this case
      console.log('This is action get all folders:', action.payload)
      return {...state, folders: action.payload}
    case FETCH_FOLDER:
      console.log('This is the state of the current folder before return:', state)
      console.log('This is action for fetch one folder:', action.payload)
      return {...state, currentFolder: action.payload}
    // case FETCH_NOTE:
    //   return {...state, currentNote: action.payload.data}
    // case FETCH_ALL: // TODO: Update this case
    //   return {...state, notes: action.payload.data}
    default:
      return state
  }
}
