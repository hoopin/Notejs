import React from 'react'
import ReactDOM from 'react-dom'
import {Editor, EditorState, RichUtils} from 'draft-js'
// const {hasCommandModifier} = KeyBindingUtil
const content = EditorState.getCurrentContent()
console.log('str= ', EditorState.getCurrentContent())
console.log('content=', content)
class MyEditor extends React.Component {
  constructor (props) {
    super(props)
    this.state = {editorState: EditorState.createEmpty()}
    this.onChange = (editorState) => this.setState({editorState})
    this.handleKeyCommand = this.handleKeyCommand.bind(this)
  }
  // handleKeyCommand (command) {
  //   const newState = RichUtils.handleKeyCommand(this.state.editorState, command)
  //   if (command === 'ctrl+s'){
  //     console.log('ctrl+s pressed')
  //   }
  //   if (newState) {
  //     this.onChange(newState)
  //     return 'handled'
  //   }
  //   return 'unhandled'
  // }
  // myKeyBindingFn(e: SyntheticKeyboardEvent): string {
  //   if(e.keyCode === 83 && hasCommandModifier(e)) {
  //     return 'ctrl+s';
  //   }
  //   //  use default keys
  //   return getDefaultKeyBinding(e)
  // }
  _onBoldClick () {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'))
  }
  _onUnderlineClick () {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'))
  }
  render () {
    // const {EditorState} = this.state
    return (
      <div id='content'>
      <h1>Notejs</h1>
      <div id='editor'>
      <button onClick={this._onBoldClick.bind(this)}>Bold</button>
      <button onClick={this._onUnderlineClick.bind(this)}>Underline</button>
      <Editor editorState={this.state.editorState} onChange={this.onChange} />
      </div>
      </div>
    )
  }
}

ReactDOM.render(
  <MyEditor />,
  document.getElementById('app')
)
