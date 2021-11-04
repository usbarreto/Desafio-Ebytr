const connection = require('./connection');

const create = async({ nome, precoInicial }) => {
  const db = await connection()
  await db.collection('product').insertOne({
    nome, precoInicial
  })
};

const getAll = async() => {
  const db = await connection()
  const products = await db.collection('product').find({ }).toArray()
  return products
};

module.exports = { create, getAll };
