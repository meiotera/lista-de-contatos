const express = require("express");
const router = express.Router();
const UserControler = require('../controllers/UserController')

router.post("/registro", UserControler.register);
router.post("/login", UserControler.login);

module.exports = router;
