import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFolders, createFolder } from '../actions/action_folder'
import { Link } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar, {muiTheme} from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

class ViewFolders extends Component {

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
    this.props.fetchFolders()
    console.log('viewing folders:', this.props.folders)
  }

  handleName (e) {
    this.setState({newName: e.target.value})
    this.props.fetchFolders()
  }

  onFolderClick (id) {
    this.setState({clicked: true})
    console.log('I am clicking folder ID: ', id)
  }

  onHandleSubmit (e) {
    e.preventDefault()
    this.props.createFolder({
      'folderName': this.state.newName,
      'userId': 1
    })
    setTimeout(() => {
      this.props.fetchFolders()
      this.renderFolders()
    }, 300)
    // this.setState({newName: ''})
  }

  renderForm () {
    return (
      <form onSubmit={this.onHandleSubmit}>
        <input
          type='text'
          placeholder='new folder name'
          value={this.state.newName}
          onChange={this.handleName}
        />
        <input type='submit' value='Create New Folder' />
      </form>
    )
  }

  renderFolders () {
    return this.props.folders.map(folder => {
      return (
        <div className='folderView'>
          <Link to={'folders/' + folder.id} className='folder' onClick={this.onFolderClick.bind(this, folder.id)} key={folder.id}>
          </Link>
          <br />
          <span className='folderName'><strong> {folder.folderName} </strong></span>
        </div>
      )
    })
  }

  render () {
    return (
      <div>
        <AppBar title='NoteJS' className='navbar' iconClassNameRight='muidocs-icon-navigation-expand-more' iconElementRight={<form onSubmit={this.onHandleSubmit}>
          <TextField
            className='addInputField'
            placeholder='Create new folder'
            value={this.state.newName}
            onChange={this.handleName}
          />
          <RaisedButton label='Submit' type='submit' />
        </form>} />
        <div>{ this.renderFolders() }</div>
      </div>
      )
  }

}

function mapStateToProps (state) {
  return { folders: state.data.folders }
}

export default connect(mapStateToProps, { fetchFolders, createFolder })(ViewFolders)
