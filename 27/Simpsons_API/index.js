const express = require('express');
const app = express();
const fs = require('fs').promises;
const path = require('path');
const rescue = require('express-rescue');
const bodyParser = require('body-parser');

const readSimpsonsFile = async () => {
  const content = await fs.readFile(path.resolve(__dirname, '.', 'simpsons.json'));
  console.log(content)
  return JSON.parse(content.toString('utf-8'));
};

const writeSimpsonsFile = async (content) => (
  fs.writeFile(
    path.resolve(__dirname, '.', 'simpsons.json'),
    JSON.stringify(content),
    (err) => {
      if (err) throw err;
    }
  ));

//Todos os endpoints devem receber um token de autenticação. Esse token deve vir no seguinte modelo: authorization: {token-aqui}. Nesse momento, como você não está salvando os tokens gerados no cadastro em nenhum lugar, só é preciso verificar que as requisições recebem um token no header que possua 16 caracteres.
//Caso o token seja inválido ou inexistente, a resposta deve voltar com status 401 Unauthorized e { message: 'Token inválido!' } no corpo.
app.use('*', (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization && authorization.length === 16) return next();
  return res.status(401).send({ message: 'Token inválido!' });
});

// Crie um endpoint do tipo GET na rota /simpsons que deve retornar a lista completa de personagens.
app.get('/simpsons', rescue(async (_req, res) => {
  const result = await readSimpsonsFile();
  res.status(200).send(result);
}));

//Crie um endpoint do tipo GET na rota /simpsons/:id que deve retornar apenas o personagem com o id informado na URL da requisição.
//Caso não exista nenhum personagem com o id especificado, deve ser retornado um array vazio.
app.get('/simpsons/:id', rescue (async (req, res) => {
  const id = req.params.id;
  const list = await readSimpsonsFile();
  const answer = list.filter((c) => c.id === id);
  res.status(200).send(answer);
}));

//Crie um endpoint do tipo POST na rota /simpsons que será responsável por cadastrar novos personagens.
//O corpo da requisição deve receber os campos id e name;
app.use(bodyParser.json());
app.post('/simpsons', rescue (async (req, res) => {
  const {id, name} = req.body;
  if (!id || !name) return res.status(400).json({ message: "missing data" });

  const list = await readSimpsonsFile();
  const exists = list.some((c) => parseInt(c.id) === parseInt(id));
  if (exists) return res.status(400).json({ message: "id duplicated!" });

  const newList = [...list, {id, name}];
  await writeSimpsonsFile(newList);
  return res.status(200).json({ message: "character created!" });

}));

//Caso algum endpoint que não consta nessa lista receber uma requisição, a resposta deve voltar com status 404 Not Found, sem corpo.
app.use('*', (_req, res) => {
  return res.status(404);
});

app.use(function (err, _req, res, _next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3001, () => console.log('ouvindo na porta 3001!'));