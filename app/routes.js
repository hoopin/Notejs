import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/app'
import ViewFolder from './components/view_folder'
import ViewAllFiles from './components/view_allfiles'
import ViewNoteIndex from './components/view_note_index'
import ViewSignIn from './components/view_signin'
import ViewSignUp from './components/view_signup'
import ViewHomePage from './components/view_homepage'
import ViewFolders from './components/view_folders'

export default (
  <Route path='/' component={App} >
    <IndexRoute component={ViewHomePage} />
    <Route path='note/:id' component={ViewNoteIndex} />
    <Route path='folder/:id' component={ViewFolder} />
    <Route path='signup' component={ViewSignUp} />
    <Route path='signin' component={ViewSignIn} />
    <Route path='all' component={ViewAllFiles} />
    <Route path='folders' component={ViewFolders} />
  </Route>
)
