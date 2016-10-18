import React from 'react'
import {render} from 'react-dom'

class App extends React.Component {
  render () {
    return (
      <section className='row'>
      <textarea className='col-md-6 full-height' id='pad'>Test code here</textarea>
      </section>
    )
  }
}

render(<App/>, document.getElementById('app'))
