const express = require("express");
const router = express.Router();
const ListController = require("../controllers/ListController");
const verifyTokenUser = require("../helpers/verifyTokenUser");

router.post("/criarcontato", verifyTokenUser, ListController.createContact);
// router.post("/edit/:id", verifyTokenUser, ListController.editContact);

module.exports = router;
