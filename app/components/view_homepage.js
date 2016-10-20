import React, { Component } from 'react'
import { Link } from 'react-router'

class HomePage extends Component {
  render () {
    return (
      <div>
        <h1>NoteJS</h1>
        <Link to='folders'> render folders</Link>
        <div>
          <Link to='signup'> sign up</Link>
        </div>
        <div>
          <Link to='signin'> sign in</Link>
        </div>
      </div>
    )
  }
}

export default HomePage
