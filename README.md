Lista Telefônica App
Este é um projeto simples de Lista Telefônica desenvolvido como parte de um treinamento em Node.js.

Pré-requisitos
Antes de começar, certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo em nodejs.org.


Rotas
Registro de Usuário
Rota: /registro
Método: POST
Corpo da Requisição:
json
Copy code
{
  "name": "Seu Nome",
  "email": "seu-email@example.com",
  "password": "sua-senha",
  "confirmPassword": "sua-senha"
}
Resposta de Sucesso:
json
Copy code
{
  "isError": false,
  "message": "Registro realizado com sucesso!"
}
Resposta de Erro:
json
Copy code
{
  "isError": true,
  "message": "Mensagem de erro aqui"
}


Este é um projeto de treinamento.
