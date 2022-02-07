const express = require("express");
const {
  listagemConvidados,
  cadastro,
  deletarNome,
  verificarNomeNaLista
} = require("./controladores/convidados");

const rotas = express();

rotas.get('/convidados', listagemConvidados);
rotas.get('/convidados/:nome', verificarNomeNaLista);
rotas.post('/convidados', cadastro);
rotas.delete('/convidados/:nome', deletarNome);
module.exports = rotas