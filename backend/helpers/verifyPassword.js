const User = require("../models/UserModel");
const bcrypt = require("bcrypt");

module.exports = async function verifyPassword(email, password) {
  if (!password) {
    return {
      message: "Digite sua senha!",
    };
  }
  const user = await User.findOne({ where: { email: email } });

  try {
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
  return;
};
