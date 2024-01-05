const User = require("../models/UserModel");

//helper
const verifyPassword = require("./verifyPassword");

module.exports = async function verifyEmailExists(
  email,
  login = false,
  password
) {
  const exists = await User.findOne({ where: { email: email } });

  switch (login) {
    case false:
      if (exists) {
        return {
          message: "Email já cadastrado, tente outro email",
        };
      }
      break;

    case true:
      if (!exists) {
        return {
          message: "Email não encontrado",
        };
      }

    // if (exists) {
    //   return verifyPassword(email, password);
    // }
    // break;
  }
  console.log(exists);
  return;
};
