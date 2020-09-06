const express = require("express");
const app = express();

const errorLibrary = require("./errorLibrary");

const checagem = (req, _res, next) => {
  const {n1, n2} = req.params;

  if (!n1.match(/^[0-9]*$/) || !n2.match(/^[0-9]*$/)) {
    return next(errorLibrary.unpro("Parâmetros não são números"));
  }

  next();
};

const soma = (req, res, next) => {
  const {operacao, n1, n2} = req.params;

  if (operacao !== "soma") {
    return next();
  }

  res.status(200).json({"resultado": parseInt(n1) + parseInt(n2)});
};

const subtracao = (req, res, next) => {
  const {operacao, n1, n2} = req.params;

  if (operacao !== "subtracao") {
    return next();
  }

  res.status(200).json({"resultado": parseInt(n1) - parseInt(n2)})
}

const divisao = (req, res, next) => {
  const {operacao, n1, n2} = req.params;

  if (operacao !== "divisao") {
    return next();
  }

  res.status(200).json({"resultado": parseInt(n1) / parseInt(n2)});
}

const multiplicacao = (req, res, next) => {
  const {operacao, n1, n2} = req.params;

  if (operacao !== "multiplicacao") {
    return next();
  }

  res.status(200).json({"resultado": parseInt(n1) * parseInt(n2)});
}

const erro2 = (_req, _res, next) => {
  next(errorLibrary.badRequest("Operação Inválida"));
}

const erro = (err, _req, res, _next) => {
  const {errorLibrary, status, message} = err;

  if(errorLibrary) {
    return res.status(status).json({"mensagem": message});
  }

  res.status(500).json({"mensagem": "Erro no servidor"});
}

app.get("/:operacao/:n1/:n2", checagem, soma, subtracao, divisao, multiplicacao, erro2);

app.use(erro);

app.listen(3000, () => console.log("Ouvindo a porta 3000"));
