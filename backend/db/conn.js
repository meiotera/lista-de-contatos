const { Sequelize } = require("sequelize");

// Definindo a conexão
const sequelize = new Sequelize("lista_telefonica", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

try {
  sequelize.authenticate();
  console.log("Conectado com sucesso");
} catch (error) {
  console.log("Não foi possivel conectar", error);
}

module.exports = sequelize;
