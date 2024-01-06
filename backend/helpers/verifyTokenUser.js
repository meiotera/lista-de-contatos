const jwt = require("jsonwebtoken");

const verifyTokenUser = async (token, req, res, next) => {
  try {
    const decoded = jwt.verify(token, "meusegredo");
    return decoded;
  } catch (error) {
    console.log(error);
    return null;
  }

  next();
};

module.exports = verifyTokenUser;
