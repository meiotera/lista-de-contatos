const User = require("../models/UserModel");

module.exports = class UserControler {
  static async register(req, res) {
    const { name, email, password, confirmPassword } = req.body;

    const camposRequeridos = ["name", "email", "password", "confirmPassword"];
    const camposVazios = camposRequeridos.filter((campo) => !req.body[campo]);

    if (camposVazios.length > 0) {
      return res
        .status(400)
        .json({ error: `Campo obrigatório vazio: ${camposVazios.join(", ")}` });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: `Senhas não conferem` });
    }

    const user = {
      name,
      email,
      password,
    };

    try {
      const createdUser = await User.create(user);

      res.status(200).json({ message: "Resgistro realizado com sucesso!" });
    } catch (error) {
      res.status(500).json({
        error: "Erro durante o registro, tente novamente mais tarde.",
      });

      console.log(error);
    }
  }
};
