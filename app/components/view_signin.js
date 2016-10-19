import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import { SignInUser } from '../actions/action_user'
import { Link } from 'react-router'

class existingUser extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  onsubmit (props) {
    this.props.SignInUser(props)
      .then(() => {
        this.context.router.push('/')
      })
  }
  render () {
    const { fields: { email, password }, handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Sign In</h3>

        <div className={`form-group ${email.touched && email.invalid ? 'has-danger' : ''}`}>
          <label>email</label>
          <textarea type='text' className='form-control' {...email} />
          <div className='text-help'>
            {email.touched ? email.error : ''}
          </div>
        </div>

        <div className={`form-group ${password.touched && password.invalid ? 'has-danger' : ''}`}>
          <label>password</label>
          <textarea type='text' className='form-control' {...password} />
          <div className='text-help'>
            {password.touched ? password.error : ''}
          </div>
        </div>

        <button type='submit' className='btn btn-primary'>Submit</button>
        <Link to='/' className='btn btn-danger'>Cancel</Link>
      </form>
    )
  }
}

function validate (values) {
  const errors = {}

  if (!values.email) {
    errors.email = 'Enter email'
  }
  if (!values.password) {
    errors.password = 'Enter password'
  }

  return errors
}

export default reduxForm({
  form: 'ExistingUserForm',
  fields: ['email', 'password'],
  validate
}, null, { SignInUser })(existingUser)
