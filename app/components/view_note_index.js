import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchNote, updateNote, deleteNote } from '../actions/action_note'
import MyEditor from './note/note_notetaking'

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
    console.log('editing note:', this.props.params.id)
    console.log('this.props.currentNote.content', this.props.currentNote.content)
  }

  onNoteClick (id) {
    this.setState({clicked: true})
    console.log('I am clicking Note ID: ', id)
  }

  renderNote () {
    if (this.props.currentNote === null) {
      return <div>Loading Note Content</div>
    }
    console.log(' rendering note content in ->', this.props.currentNote)
    return (
      <div>
        <h1> {this.props.currentNote.notesName ? this.props.currentNote.notesName : 'No name note' } </h1>
        <div> {this.props.currentNote.content} </div>
      </div>
    )
  }

  render () {
    return (
      <MyEditor idData={this.props.params.id} updateNoteData={this.props.updateNote} noteData={this.props.currentNote.content} deleteNoteData={this.props.deleteNote}/>
      )
  }

}

function mapStateToProps (state) {
  console.log('mapStateToProps in note content:', state)
  return { currentNote: state.data.currentNote }
}

export default connect(mapStateToProps, { fetchNote, updateNote, deleteNote })(ViewNoteEditContent)
