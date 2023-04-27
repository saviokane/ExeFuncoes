const express = require("express");
const app = express();
const rotas = require("./rotas");

app.use(express.json());
app.use(rotas);
require = require("./Config/dbConfig");

app.listen(8081);


