import React, { Component } from 'react'
import { Link } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar, {muiTheme} from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'

class HomePage extends Component {
  render () {
    return (
      <div>
        <AppBar title='NoteJS' className='navbar' iconClassNameRight='muidocs-icon-navigation-expand-more' iconElementRight={<span><FlatButton label='Login' className='authButtons' /> <FlatButton label='Signup' className='authButtons' /></span>} />
        <div className='background'>
          <Link to='folders'> render folders</Link>
          <div>
            <Link to='signup'> sign up</Link>
          </div>
          <div>
            <Link to='signin'> sign in</Link>
          </div>

          <div>
            <h1 className='title'><strong>NoteJS</strong></h1>
            <h3 className='tagline'>The premier free note taking app for <strong>developers</strong></h3>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage
