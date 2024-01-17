const User = require("../models/UserModel");
const bcrypt = require("bcrypt");

//import helpers
const verifyFields = require("../helpers/verifyFields");
const verifyEmailExists = require("../helpers/verifyEmailExists");
const verifyPassword = require("../helpers/verifyPassword");
const createToken = require("../helpers/createToken");

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
    const passwordHash = bcrypt.hashSync(password, salt);

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
    }
  }

  static async login(req, res) {
    const { email, password } = req.body;
    const login = true;

    function sendErrorResponse(res, error) {
      return res.status(400).json({ isError: true, message: error });
    }

    try {
      if (!email) {
        return sendErrorResponse(res, "O email é obrigatório");
      }

      const user = await User.findOne({ where: { email: email } });

      if (!user) {
        return sendErrorResponse(
          res,
          "Usuário não encontrado. Verifique o email fornecido."
        );
      }

      // const checkEmail = await verifyEmailExists(email, login, password);
      // if (checkEmail) {
      //   return sendErrorResponse(res, checkEmail.message);
      // }

      const checkPassword = await verifyPassword(email, password);

      if (checkPassword) {
        return sendErrorResponse(res, checkPassword.message);
      }

      await createToken(user, req, res);
    } catch (error) {
      res.status(500).json({
        isError: true,
        error: error,
        message: "Erro durante o login, tente novamente mais tarde.",
      });
    }
  }
};
