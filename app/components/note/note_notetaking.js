import React, {Component} from 'react'
import {Editor, EditorState, RichUtils, convertToRaw, convertFromRaw} from 'draft-js'
import AppBar, {muiTheme} from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import KeyBinding from 'react-keybinding-component'

// let currentNoteData = convertFromRaw(JSON.parse(this.props.currentNote.content))

const styleMap = {
  'CODE': {
    color: '#535353',
    background: 'none',
    backgroundColor: '#E4E3E4',
    textShadow: '0 1px rgba(0, 0, 0, 0.3)',
    fontFamily: 'monospace',
    textAlign: 'left',
    margin: 'none',
    padding: '7px',
    borderLeft: 'solid 4px #1EAAF1',
    fontSize: '14px',
    whiteSpace: 'pre',
    width: '100%',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: 2.0,
    hyphens: 'none'
  },
  'H1': {
    fontSize: '45px'
  },
  'H2': {
    fontSize: '35px'
  },
  'H3': {
    fontSize: '25px'
  },
  'P': {
    fontSize: '14px'
  }
}

class MyEditor extends Component {
  constructor (props) {
    super(props)
    this.state = { value: '', editorState: EditorState.createEmpty() }
    this.onChange = (editorState) => this.setState({editorState})
  }

  componentWillMount () {
    console.log('id in component', this.props.idData)
    console.log('this.props.noteData: ', this.props.noteData)
  }

  handleKeyEvent (e) {
    if (e === 192) {
      this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'CODE'))
    }
  }

  _saveContent () {
    let noteId = this.props.idData
    let content = JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent()))
    let saveObj = {id: noteId,
    content: content}
    // console.log("update function:", componentWillMount())
    this.props.updateNoteData(saveObj)
  }
  _deleteNote () {
    let noteId = this.props.idData
    // console.log("this.pro÷ps", this.props);
    this.props.deleteNoteData(noteId)
  }
  _onH1Click () {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'H1'))
  }
  _onH2Click () {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'H2'))
  }
  _onH3Click () {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'H3'))
  }
  _onPClick () {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'P'))
  }
  _onBoldClick () {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'))
  }
  _onCodeblockClick () {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'CODE'))
  }
  _onUnderlineClick () {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'))
  }
  _onItalicClick () {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'))
  }
  render () {
    // console.log("this.props.noteData in david's", this.props.noteData)
    return (

      <div>
        <AppBar title='NoteJS' className='navbar' iconClassNameRight='muidocs-icon-navigation-expand-more' />

        <div id='content' className='noteView'>
          <div id='editor'>

            <div className='stylingDiv'>
              <button className='noteStylingButtons' onClick={this._onH1Click.bind(this)}>H1</button>
              <button className='noteStylingButtons' onClick={this._onH2Click.bind(this)}>H2</button>
              <button className='noteStylingButtons' onClick={this._onH3Click.bind(this)}>H3</button>
              <button className='noteStylingButtons' onClick={this._onPClick.bind(this)}>P</button>
              <button className='noteStylingButtons' onClick={this._onBoldClick.bind(this)}>B</button>
              <button className='noteStylingButtons' onClick={this._onUnderlineClick.bind(this)}>U</button>
              <button className='noteStylingButtons' onClick={this._onItalicClick.bind(this)}>I</button>
              <button className='noteStylingButtons' onClick={this._onCodeblockClick.bind(this)}>Code</button>
            </div>
            <br /><br />
            <Editor placeholder="What's on your mind?" className='editNoteBlock' editorState={this.state.editorState} onChange={this.onChange} customStyleMap={styleMap} />
            <KeyBinding onKey={(e) => { handleKeyEvent(e) }} />
            <br /><br />
            <RaisedButton className='noteBottomButtons' label='Save' onClick={this._saveContent.bind(this)} />
            <RaisedButton className='noteBottomButtons' label='LogId' onClick={this.componentWillMount.bind(this)} />
            <RaisedButton className='noteBottomButtons' label='Delete Note' onClick={this._deleteNote.bind(this)} />

          </div>
        </div>

      </div>

    )
  }
}

export default MyEditor
