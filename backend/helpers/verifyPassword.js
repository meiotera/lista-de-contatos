const User = require("../models/UserModel");
const bcrypt = require("bcrypt");

module.exports = async function verifyPassword(email, password) {
  try {
    const user = await User.findOne({ where: { email: email } });
    const checkPassword = bcrypt.compareSync(password, user.password);

    if (!checkPassword) {
      return {
        message: "Senha inválida!",
      };
    }
  } catch (error) {
    return {
      isError: error,
      error: error,
      message: "Um erro aconteceu, aguarde ou tente mais tarde!",
    };
  }
};
