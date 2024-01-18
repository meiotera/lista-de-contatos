module.exports = function verifyFields({ ...arg }) {
  const { name, email, password, confirmPassword } = arg;
  const camposRequeridos = ["name", "email", "password", "confirmPassword"];
  const camposVazios = camposRequeridos.filter((campo) => !arg[campo]);

  let campoLabel = "";

  switch (true) {
    case camposVazios.includes("name"):
      campoLabel = "Nome";
      break;
    case camposVazios.includes("email"):
      campoLabel = "E-mail";
      break;
    case camposVazios.includes("password"):
      campoLabel = "Senha";
      break;
    case camposVazios.includes("confirmPassword"):
      campoLabel = "Confirme sua senha";
      break;
    default:
      break;
  }

  if (camposVazios.length > 0) {
    return {
      message: `Campo obrigatório vazio: ${campoLabel}`,
    };
  }

  if (password !== confirmPassword) {
    return {
      message: `Senhas não conferem`,
    };
  }

  return null;
};
