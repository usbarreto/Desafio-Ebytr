const { MongoClient } = require('mongodb');

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// const MONGO_DB_URL = 'mongodb://mongodb:27017/auction';
const MONGO_DB_URL = 'mongodb://localhost:27017/auction';
const DB_NAME = 'auction';

let db = null;

const connection = () => (
  db
  ? Promise.resolve(db)
  : MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => {
      db = conn.db(DB_NAME);
      return db;
    }));

module.exports = connection;

// const { MongoClient } = require('mongodb');

// let db = null;
// const connection = async() => {
//   db?Promise.resolve(db):MongoClient.connect('mongodb://localhost:27017',
//   { useNewUrlParser: true, useUnifiedTopology: true}).then((conn) => {
//     db = conn.db('auction')
//     return db
//   })
// };

// module.exports = connection;

//const MONGO_DB_URL = 'mongodb://mongodb:27017/auction';
// const MONGO_DB_URL = 'mongodb://localhost:27017/auction';
