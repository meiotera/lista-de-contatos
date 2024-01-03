const User = require("../models/UserModel");
const bcrypt = require("bcrypt");

//import helpers
const verifyFields = require("../helpers/verifyFields");
const verifyEmailExists = require("../helpers/verifyEmailExists");

module.exports = class UserControler {
  static async register(req, res) {
    const { name, email, password, confirmPassword } = req.body;

    function sendErrorResponse(res, error) {
      return res.status(400).json({ isError: true, message: error });
    }

    const fields = verifyFields(req.body);
    if (fields) {
      return sendErrorResponse(res, fields.message);
    }

    const checkEmail = await verifyEmailExists(email);
    if (checkEmail) {
      return sendErrorResponse(res, checkEmail.message);
    }

    // crypt de senha
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    try {
      const user = {
        name,
        email,
        password: passwordHash,
      };
      const createdUser = await User.create(user);

      res
        .status(200)
        .json({ isError: false, message: "Registro realizado com sucesso!" });
    } catch (error) {
      res.status(500).json({
        isError: true,
        message: "Erro durante o registro, tente novamente mais tarde.",
      });

      console.log(error);
    }
  }
};
