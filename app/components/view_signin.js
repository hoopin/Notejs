import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import { fetchUser } from '../actions/action_user'
import { Link } from 'react-router'

class existingUser extends Component {
  onSubmit (props) {
    console.log('PropTypes?!', PropTypes.object)
    this.props.fetchUser(props)
    console.log('this.context', this.context)
    this.context.router.push('/folder')
  }

  render () {
    const { fields: { email, password }, handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Sign In</h3>

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

        <button type='submit' className='btn btn-primary'>Submit</button>
        <Link to='/' className='btn btn-danger'>Cancel</Link>
      </form>
    )
  }
}

existingUser.contextTypes = {
  router: PropTypes.object
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
}, null, { fetchUser })(existingUser)
