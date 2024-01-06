const List = require("../models/ListModel");
const User = require("../models/UserModel");
const verifyTokenUser = require("../helpers/verifyTokenUser");

module.exports = class ListController {
  static async createContact(req, res) {
    const { name, email, phone } = req.body;
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = await verifyTokenUser(token);

    try {
      const contact = {
        name,
        email,
        phone,
        UserId: decodedToken.userId,
      };
      await List.create(contact);

      res
        .status(200)
        .json({ isError: false, message: "Contato cadastrado com sucesso!" });
    } catch (error) {
      res.status(500).json({
        isError: true,
        message: "Erro durante o registro, tente novamente mais tarde.",
      });
    }
  }

  static async myContacts(req, res) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decodedToken = await verifyTokenUser(token);
      const userId = decodedToken.userId;

      const contacts = await User.findByPk(userId, {
        include: List,
        order: [["created_at"]],
      });

      const contatosFiltrados = { ...contacts.get() };
      delete contatosFiltrados.password;

      res.status(200).json({
        contatosFiltrados,
      });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ isError: true, message: "Erro ao obter contatos do usuário" });
    }
  }
};
