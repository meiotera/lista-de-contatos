module.exports = function verifyFields({ ...arg }) {
  const { name, email, password, confirmPassword } = arg;
  const camposRequeridos = ["name", "email", "password", "confirmPassword"];
  const camposVazios = camposRequeridos.filter((campo) => !arg[campo]);

  if (camposVazios.length > 0) {
    return {
      message: `Campo obrigatório vazio: ${camposVazios.join(", ")}`,
    };
  }

  if (password !== confirmPassword) {
    return {
      message: `Senhas não conferem`,
    };
  }

  return null;
};
