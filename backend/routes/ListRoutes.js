const express = require("express");
const router = express.Router();
const ListController = require("../controllers/ListController");
const verifyTokenUser = require("../helpers/verifyTokenUser");

router.post("/criarcontato", verifyTokenUser, ListController.createContact);
router.get("/minha-lista", verifyTokenUser, ListController.myContacts);

module.exports = router;
