const { Router } = require('express');
const model = require('../models/products');
const routes = Router(); 

routes.post('/', async(req, res) => {
  const { nome, precoInicial } = req.body
  await model.create({ nome, precoInicial })
  res.send()
});

routes.get('/', async(_req, res) => {
  const products = await model.getAll()
  res.json(products)
});

module.exports = routes;
