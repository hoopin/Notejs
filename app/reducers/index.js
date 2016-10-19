import { combineReducers } from 'redux'
import NotesReducer from './reducer_notes'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  data: NotesReducer,
  form: formReducer
})

export default rootReducer
