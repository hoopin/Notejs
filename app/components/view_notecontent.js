import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchNote } from '../actions/action_note'
import { Link } from 'react-router'
import AppBar, {muiTheme} from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'

class ViewNoteContent extends Component {

  constructor (props) {
    super(props)
    this.state = {
      clicked: false
    }
    this.onNoteClick = this.onNoteClick.bind(this)
  }

  componentWillMount () {
    let self = this
    this.props.fetchNote(this.props.params.id)
    window.setTimeout(function () {
      self.context.router.push('/editNote/' + self.props.params.id)
    }, 150) // Won't work with < 150 for some reason
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
        <AppBar title='NoteJS' className='navbar' iconClassNameRight='muidocs-icon-navigation-expand-more' />
        <div className='noteView'>
          <h1> {this.props.currentNote.notesName ? this.props.currentNote.notesName : 'No name note' } </h1>
          <div> {this.props.currentNote.content} </div>
          <Link to={'/editNote/' + this.props.params.id}> EDIT NOTE </Link>
        </div>
      </div>
    )
  }

  render () {
    return (
      <div>
        { this.renderNote() }
      </div>
      )
  }

}

ViewNoteContent.contextTypes = {
  router: PropTypes.object
}

function mapStateToProps (state) {
  return { currentNote: state.data.currentNote }
}

export default connect(mapStateToProps, { fetchNote })(ViewNoteContent)
