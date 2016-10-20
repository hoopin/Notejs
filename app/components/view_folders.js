import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFolder } from '../action/action_folder'

class ViewFolder extends Component {

  constructor (props) {
    super(props)
    this.state = {clicked: false}
    this.onFolderClick = this.onFolderClick.bind(this)
  }

  componentWillMount () {
    this.props.fetchPost(this.props.params.id)
  }

  onFolderClick () {
    this.setState({clicked: true})
  }

  render () {
    return (
      <div>
        Folder <span>{this.state.clicked}</span>
        <div><button onClick={this.onFolderClick}>Like Me</button></div>
      </div>
    )
  }

}

function mapStateToProps (state) {
  return { folder: state.posts.post }
}

export default connect(mapStateToProps, { fetchFolder })(ViewFolder)
