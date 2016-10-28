import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import AppBar, {muiTheme} from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import axios from 'axios'

class PaymentInput extends Component {
  constructor (props) {
    super(props)
    this.state = {value: '', buttonValue: 'Continue'};
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(this.state.value);
  }
  render () {
    return (
      <div>
        
      </div>
      )
  }
}

export default PaymentInput
