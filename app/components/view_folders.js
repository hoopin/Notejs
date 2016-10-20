import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFolders } from '../actions/action_folder'
import { Link } from 'react-router'

class ViewFolders extends Component {

  constructor (props) {
    super(props)
    this.state = {
      clicked: false
    }
    this.onFolderClick = this.onFolderClick.bind(this)
  }

  componentWillMount () {
    this.props.fetchFolders()
    console.log(this.props.folders)
  }

  onFolderClick (id) {
    this.setState({clicked: true})
    console.log('I am clicking folder ID: ', id)
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
        { this.renderFolders() }
      </div>
      )
  }

}

function mapStateToProps (state) {
  return { folders: state.data.folders }
}

export default connect(mapStateToProps, { fetchFolders })(ViewFolders)
