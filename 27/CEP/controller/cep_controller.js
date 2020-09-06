const CepModel = require('../models/cep_model');
const rescue =require('express-rescue');

const renderForm = (_req, res) => {
  res.render('search_cep', { cep_encontrado: null, mensagem: null });
};

const searchCep = rescue(async (req, res) => {
  const { cep_typed }  = req.body;
  const ceps_stored = await CepModel.getAllCeps();

  if (!cep_typed || !cep_typed.match(/^\d{5}-?\d{3}$/)) {
    return res.status(402).render('search_cep', { cep_encontrado: null, mensagem: 'CEP inválido' });
  }

  const cep_exists = ceps_stored.filter((c) => String(c.cep.trim()) === String(cep_typed.replace(/-/g, "").trim()));

  if (cep_exists.length !== 0) {
    return res.render('search_cep', { cep_encontrado: cep_exists[0], mensagem: null });
  }
  
  const cep_consultado_api = await CepModel.consultApi(cep_typed);

  if (cep_consultado_api.length === 0) {
    return res.status(402).render('search_cep', { cep_encontrado: null, mensagem: 'CEP não encontrado' });
  }

  await CepModel.addCepToDatabase(cep_consultado_api);

  return res.render('search_cep', { cep_encontrado: cep_consultado_api, mensagem: null });
});

module.exports = {
  renderForm,
  searchCep,
};
