import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFolders, createFolder } from '../actions/action_folder'
import { Link } from 'react-router'

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
        <Link to={'folders/' + folder.id} onClick={this.onFolderClick.bind(this, folder.id)} key={folder.id}>
          <strong> {folder.folderName} </strong>
        </Link>
      )
    })
  }

  render () {
    return (
      <div>
        <div>{ this.renderFolders() }</div>
        <div>{ this.renderForm() } </div>
      </div>
      )
  }

}

function mapStateToProps (state) {
  return { folders: state.data.folders }
}

export default connect(mapStateToProps, { fetchFolders, createFolder })(ViewFolders)
