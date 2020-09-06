const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Crie uma aplicação express que receba uma requisição do tipo GET no caminho /ping e retorne o JSON { "message": "Pong!" }
app.get('/ping', (_req, res) => {
  res.send({ 'message': 'Pong!' });
});

//Crie um endpoint que receba requisições do tipo POST no caminho /hello, contendo o JSON { "name": "<nome do usuário>" } e retorne um JSON { "message": "Hello, <nome do usuário>!" };
app.use(bodyParser.json());

app.post('/hello', (req, res) => {
  const name = req.body.name;
  res.send({ 'message': `Hello, ${name}!` });
});

//Crie um endpoint que receba requisições do tipo POST no caminho /hello, contendo o JSON { "name": "<nome do usuário>", "age": "<idade do usuário>" }. Caso o usuário tenha idade superior a 17 anos retorne um JSON { "message": "Hello, <nome do usuário>!" } com o status code 200. Caso contrário, retorne o JSON { "message": "Unauthorized"} com o status code 401;

app.post('/hello2', (req, res) => {
  if (parseInt(req.body.age) > 17) {
    return res.status(200).send({ 'message': `Hello, ${req.body.name}!`});
  }

  return res.status(401).send({ 'message': 'Unauthorized'});
});

//Crie um endpoint que receba requisições do tipo PUT no caminho /users/:name/:age e retorne o JSON { "message": "Seu nome é <name> e você tem <age> anos de idade" }.

app.put('/users/:name/:age', (req, res) => {
  res.send({'message': `Seu nome é ${req.params.name} e você tem ${req.params.age} anos de idade`});
});

app.listen(3000, () => console.log('Ouvindo na porta 3000'));