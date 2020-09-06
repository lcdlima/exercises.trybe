const fetch = require('node-fetch');
const connection = require("./connection");

const getAllCeps = async () =>
  connection()
    .then((db) =>
      db
        .getTable('cep')
        .select(['cep', 'uf', 'cidade', 'bairro', 'logradouro'])
        .execute()
    )
    .then((results) => results.fetchAll())
    .then((ceps) => ceps.map(([cep, uf, cidade, bairro, logradouro]) => ({ cep, uf, cidade, bairro, logradouro })));


const consultApi = (cep) => {
  const url = `http://cep.la/${cep}`;
  return fetch(url, {
    headers: {
      'Accept': 'application/json',
    }
  })
    .then((resp) => resp.json())
    .catch((err) => err);
};

const addCepToDatabase = ({ cep, uf, cidade, bairro, logradouro }) =>
  connection().then((db) =>
    db
      .getTable('cep')
      .insert(['cep', 'uf', 'cidade', 'bairro', 'logradouro'])
      .values(cep, uf, cidade, bairro, logradouro)
      .execute()
  );

module.exports = {
  getAllCeps,
  consultApi,
  addCepToDatabase,
};
