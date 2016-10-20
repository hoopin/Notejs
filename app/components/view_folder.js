import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFolder } from '../actions/action_folder'


class ViewFolder extends Component {

  constructor (props) {
    super(props)
    this.state = {
      clicked: false
    }
    this.onFolderClick = this.onFolderClick.bind(this)
  }

  componentWillMount () {
    this.props.fetchFolder(this.props.params.id)
    console.log('rendering folder:', this.props.params.id)
  }

  onFolderClick (id) {
    this.setState({clicked: true})
    console.log('I am clicking folder ID: ', id)
  }

  renderFolder () {
    if (this.props.currentFolder === null) {
      return <div>Loading folder...</div>
    }
    console.log('folder rendering', this.props.currentFolder)
    return (
      <div>{this.props.currentFolder.message}</div>
    )
  }

  render () {
    return (
      <div>
        { this.renderFolder() }
      </div>
      )
  }

}

function mapStateToProps (state) {
  return { currentFolder: state.data.currentFolder }
}

export default connect(mapStateToProps, { fetchFolder })(ViewFolder)
