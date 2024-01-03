const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const verifyFields = require("../helpers/verifyFields");

module.exports = class UserControler {
  static async register(req, res) {
    const { name, email, password, confirmPassword } = req.body;

    const fields = verifyFields(req.body);

    if (fields) {
      return res.status(400).json(fields);
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
        .json({ isError: false, message: "Resgistro realizado com sucesso!" });
    } catch (error) {
      res.status(500).json({
        isError: true,
        message: "Erro durante o registro, tente novamente mais tarde.",
      });

      console.log(error);
    }
  }
};