import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFolder } from '../actions/action_folder'
import { Link } from 'react-router'
import LinearProgress from 'material-ui/LinearProgress'

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
      return <LinearProgress mode="indeterminate" />
    }
    console.log(' rendering notes in folder', this.props.currentFolder)
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
      <div className='noteView'>
        { this.renderFolder() }
      </div>
      )
  }

}

function mapStateToProps (state) {
  return { currentFolder: state.data.currentFolder }
}

export default connect(mapStateToProps, { fetchFolder })(ViewFolder)
