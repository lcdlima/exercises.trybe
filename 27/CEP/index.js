const express = require('express');
const bodyParser = require('body-parser');
const cepController = require('./controller/cep_controller');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/cep', cepController.renderForm);

app.post('/cep', cepController.searchCep);

app.listen(3000, () => {
  console.log('Ouvindo a porta 3000!');
});
