const User = require("../models/UserModel");

module.exports = async function verifyEmailExists(
  email,
  login = false,
  password
) {
  const user = await User.findOne({ where: { email: email } });

  switch (login) {
    case false:
      if (user) {
        return {
          message: "Email já cadastrado, tente outro email",
        };
      }
      break;

    case true:
      if (!user) {
        return {
          message: "Email não encontrado",
        };
      }

    // if (exists) {
    //   return verifyPassword(email, password);
    // }
    // break;
  }

  return;
};
