const express = require("express");
const app = express();
const path = require("path");

const PORT = 3000;

app.listen(PORT, () => console.log("App listening to port: " + PORT));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/vista/home.html");
});

app.get("/usuarios/:usuarioId", (req, res) => {
  const usuarioId = req.params.usuarioId;
  res.sendFile(__dirname + "/vista/usuario" + usuarioId + ".html");
});
