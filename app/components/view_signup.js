import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import { createUser } from '../actions/action_user'
import { Link } from 'react-router'

class NewUser extends Component {
  onSubmit (props) {
    this.props.createUser(props)
    this.context.router.push('/')
  }

  render () {
    const { fields: { firstName, lastName, email, password }, handleSubmit } = this.props
    return (
      <form  className='authForm' onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h1>Sign up</h1>

        <div className={`form-group ${firstName.touched && firstName.invalid ? 'has-danger' : ''}`}>
          <label>First Name</label>
          <input type='text' className='form-control' {...firstName} />
          <div className='text-help'>
            {firstName.touched ? firstName.error : ''}
          </div>
        </div>

        <div className={`form-group ${lastName.touched && lastName.invalid ? 'has-danger' : ''}`}>
          <label>Last Name</label>
          <input type='text' className='form-control' {...lastName} />
          <div className='text-help'>
            {lastName.touched ? lastName.error : ''}
          </div>
        </div>

        <div className={`form-group ${email.touched && email.invalid ? 'has-danger' : ''}`}>
          <label>email</label>
          <input type='text' className='form-control' {...email} />
          <div className='text-help'>
            {email.touched ? email.error : ''}
          </div>
        </div>

        <div className={`form-group ${password.touched && password.invalid ? 'has-danger' : ''}`}>
          <label>password</label>
          <input type='password' className='form-control' {...password} />
          <div className='text-help'>
            {password.touched ? password.error : ''}
          </div>
        </div>

        <button type='submit' className='signupButton'>Submit</button>
        <Link to='/' className='signupCancelButton'>Cancel</Link>
      </form>
    )
  }
}

NewUser.contextTypes = {
  router: PropTypes.object
}

function validate (values) {
  const errors = {}

  if (!values.firstName) {
    errors.firstName = 'Enter a first name'
  }
  if (!values.lastName) {
    errors.lastName = 'Enter a last name'
  }
  if (!values.email) {
    errors.email = 'Enter email'
  }
  if (!values.password) {
    errors.password = 'Enter password'
  }

  return errors
}

export default reduxForm({
  form: 'SignUpForm',
  fields: ['firstName', 'lastName', 'email', 'password'],
  validate
}, null, { createUser })(NewUser)
