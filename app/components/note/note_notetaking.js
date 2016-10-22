import React, {Component} from 'react'
import {Editor, EditorState, RichUtils, convertToRaw, convertFromRaw} from 'draft-js'
import AppBar, {muiTheme} from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import { connect } from 'react-redux'
// let currentNoteData = convertFromRaw(JSON.parse(this.props.currentNote.content))


class MyEditor extends Component {
  constructor (props) {
    super(props)
    this.state = { value: '', editorState: EditorState.createEmpty() }
    this.onChange = (editorState) => this.setState({editorState})
  }
  componentWillMount () {
    // this.props.fetchNote(this.props.params.id)
    // console.log('EDITING note id:', this.props.params.id)
    // console.log('this.props.noteData:', this.props)
  }
  _saveContent () {
    let noteId = this.props.idData
    let content = JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent()))
    let saveObj = {id: noteId,
    content: content}
    // console.log("update function:", this.props.updateNoteData)
    this.props.updateNoteData(saveObj)
  }
  _deleteNote () {
    let noteId = this.props.idData
    // console.log("this.pro÷ps", this.props);
    this.props.deleteNoteData(noteId)
  }
  _onBoldClick () {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'))
  }
  _onUnderlineClick () {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'))
  }
  _onItalicClick () {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'))
  }
  render () {
    console.log("this.props.noteData in david's", this.props.noteData)
    return (

      <div>
        <AppBar title='NoteJS' className='navbar' iconClassNameRight='muidocs-icon-navigation-expand-more' />

        <div id='content' className='noteView'>
          <div id='editor'>

            <button onClick={this._onBoldClick.bind(this)}>Bold</button>
            <button onClick={this._onUnderlineClick.bind(this)}>Underline</button>
            <button onClick={this._onItalicClick.bind(this)}>Italic</button>
            <button>Code Block</button>
            <Editor placeholder='Type Here' className='editNoteBlock' editorState={this.state.editorState} onChange={this.onChange} />
            <button onClick={this._saveContent.bind(this)}>Save</button>
            <button onClick={this._deleteNote.bind(this)}>DELETENOTE</button>

          </div>
        </div>

      </div>

    )
  }
}

export default MyEditor
