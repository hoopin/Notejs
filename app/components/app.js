import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar, {muiTheme} from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'

export default class App extends Component {
  render () {
    return (
      <div>
        <AppBar title='NoteJS' className='navbar' iconClassNameRight='muidocs-icon-navigation-expand-more' iconElementRight={<span><FlatButton label='Login' className='authButtons' /> <FlatButton label='Signup' className='authButtons' /></span>} />
        {this.props.children}
      </div>
    )
  }
}
