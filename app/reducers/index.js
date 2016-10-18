import { combineReducers } from 'redux'
import NotesReducer from './reducer_notes'

const rootReducer = combineReducers({
  data: NotesReducer
})

export default rootReducer
