const ListModel = require("../models/ListModel");
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
      await ListModel.create(contact);

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
};
