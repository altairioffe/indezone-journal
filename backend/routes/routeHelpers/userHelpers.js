const bcrypt = require("bcrypt");

//Check if user email exists

const doesEmailExist = function(email, users) {
  let foundUser;

  users.forEach(user => {

    if (user.email === email) {
      return (foundUser = user);
    }
  });
  return foundUser || false;
};

module.exports = {
  doesEmailExist
};