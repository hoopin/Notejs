import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchNote, updateNote, deleteNote } from '../actions/action_note'
import MyEditor from './note/note_notetaking'
import {EditorState, createWithContent, ContentState, createFromBlockArray, contentBlock, convertToRaw, convertFromRaw} from 'draft-js'

class ViewNoteEditContent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      clicked: false
    }

    this.onNoteClick = this.onNoteClick.bind(this)
  }

  componentWillMount () {
    this.props.fetchNote(this.props.params.id)
  }

  onNoteClick (id) {
    this.setState({clicked: true})
  }

  renderNote () {
    if (this.props.currentNote === null) {
      return <div>Loading Note Content</div>
    }
    return (
      <div>
        <h1> {this.props.currentNote.notesName ? this.props.currentNote.notesName : 'No name note' } </h1>
        <div> { this.state.content } </div>
      </div>
    )
  }

  render () {
    return (
      <MyEditor idData={this.props.params.id} updateNoteData={this.props.updateNote} noteData={this.props.currentNote.content} deleteNoteData={this.props.deleteNote} fetchNoteData={this.props.fetchNote} />
      )
  }

}

function mapStateToProps (state) {
  return { currentNote: state.data.currentNote }
}

export default connect(mapStateToProps, { fetchNote, updateNote, deleteNote })(ViewNoteEditContent)
