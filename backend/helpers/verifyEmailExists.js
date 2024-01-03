const User = require("../models/UserModel");

module.exports = async function verifyEmailExists(email) {
  const exists = await User.findOne({ where: { email: email } });

  if (exists) {
    return {
      isError: true,
      message: "Email já cadastrado, tente outro email",
    };
  }

  return null;
};
