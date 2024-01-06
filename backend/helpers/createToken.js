const jwt = require("jsonwebtoken");

const createToken = async (user, req, res) => {
  const payload = {
    userEmail: user.email,
    userId: user.id,
  };

  const secret = "meusegredo";

  const token = jwt.sign(payload, secret, {
    expiresIn: "1h",
  });

  res.status(200).json({
    isError: false,
    message: "Login efetuado com sucesso!",
    token: token,
    id: user.id,
  });
};

module.exports = createToken;
