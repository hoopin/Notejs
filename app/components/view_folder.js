import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFolder } from '../actions/action_folder'
import { createNote } from '../actions/action_note'
import { Link } from 'react-router'
import LinearProgress from 'material-ui/LinearProgress'
import promiseMiddleware from 'redux-promise'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar, {muiTheme} from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

class ViewFolder extends Component {

  constructor (props) {
    super(props)
    this.state = {
      clicked: false,
      newName: ''
    }
    this.onFolderClick = this.onFolderClick.bind(this)
    this.renderForm = this.renderForm.bind(this)
    this.onHandleSubmit = this.onHandleSubmit.bind(this)
    this.handleName = this.handleName.bind(this)
  }

  componentWillMount () {
    this.props.fetchFolder(this.props.params.id)
    console.log('rendering folder:', this.props.params.id)
  }

  handleName (e) {
    this.setState({newName: e.target.value})
  }

  onFolderClick (id) {
    this.setState({clicked: true})
    console.log('I am clicking folder ID: ', id)
  }

  onHandleSubmit (e) {
    e.preventDefault()
    this.props.createNote({
      'notesName': this.state.newName,
      'content': 'Testing content',
      'folderId': this.props.params.id
    })
    setTimeout(() => {
      this.props.fetchFolder(this.props.params.id)
      this.renderFolder()
    }, 300)
    // this.setState({newName: ''})
  }

  renderForm () {
    if (this.props.currentFolder === null) {
      return <div> Load </div>
    }

    return (
      <form onSubmit={this.onHandleSubmit}>
        <input
          type='text'
          placeholder='new note name'
          value={this.state.newName}
          onChange={this.handleName}
        />
        <input type='submit' value='Create New Note' />
      </form>
    )
  }

  renderFolder () {
    if (this.props.currentFolder === null) {
      return <LinearProgress mode="indeterminate" />
    }
    return this.props.currentFolder.map((note) => {
      return (
        <Link to={'notes/' + note.id} className='note' onClick={this.onFolderClick.bind(this, note.id)} key={note.id}>
          <strong> {note.notesName ? note.notesName : 'No name note'} </strong>
        </Link>
      )
    })
  }

  render () {
    return (
      <div>
        <AppBar title='NoteJS' className='navbar' iconClassNameRight='muidocs-icon-navigation-expand-more' iconElementRight={<form className='inputForm' onSubmit={this.onHandleSubmit}>
          <TextField
            className='addInputField'
            placeholder='Create new note'
            value={this.state.newName}
            onChange={this.handleName}
          />
          <RaisedButton label='Submit' type='submit' />
        </form>} />
        <div>{ this.renderFolder() }</div>
      </div>
      )
  }

}

function mapStateToProps (state) {
  return { currentFolder: state.data.currentFolder }
}

export default connect(mapStateToProps, { fetchFolder, createNote })(ViewFolder)
