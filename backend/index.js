const express = require("express");
const cors = require("cors");
const app = express();

// conexão
const conn = require("./db/conn");

app.use(express.json());

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  headers: "Origin,X-Requested-With,Content-Type,Accept,Authorization",
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.static("public"));

const UserRoutes = require("./routes/UserRoutes");
const ListRoutes = require("./routes/ListRoutes");

app.use("/", UserRoutes);
app.use("/", ListRoutes);

// const server = app.listen(5000, (err) => {
//   if (err) {
//     console.error("Erro ao iniciar o servidor:", err);
//   } else {
//     console.log("Servidor iniciado na porta 5000");
//   }
// });

conn
  .sync()
  .then(() => {
    app.listen(5000);
  })
  .catch((error) => {
    console.log(error);
  });
