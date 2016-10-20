const Users = require('../db/db').Users

const register = (user) => {
  // This function accepts an object with a first name, last name, email, and password
  return Users.create(user)
    .then((result) => {
      return result
    })
    .catch((err) => {
      console.err(err)
    })
}

const deleteUser = (userId) => {
  return Users.findOne({
    where: {
      id: userId
    }
  })
  .then(user => {
    return user.destroy()
    .then(() => {
      console.log('Successfully deleted user')
    })
  })
}

module.exports = {
  register: register,
  deleteUser: deleteUser
}
