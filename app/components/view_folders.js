import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFolders } from '../actions/action_folder'

class ViewFolder extends Component {

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

  onFolderClick () {
    this.setState({clicked: true})
  }

  renderFolders () {
    return (
      <div>
        {
          this.props.folders.map(folder => {
            return (
              <div key={folder.id}>
                {
                folder.folderName
              }
              </div>
            )
          })
      }
      </div>
    )
  }

  render () {
    return this.renderFolders()
  }

}

function mapStateToProps (state) {
  return { folders: state.data.folders }
}

export default connect(mapStateToProps, { fetchFolders })(ViewFolder)
