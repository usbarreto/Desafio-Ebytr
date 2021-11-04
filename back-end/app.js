const express = require('express');
const app = express();
const http = require('http').createServer(app);
const productsRoutes = require('./controllers/products');
const cors = require('cors');

app.use(cors());
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    method: ['GET', 'POST']
  }
});

app.use(express.json());
app.use('/products', productsRoutes);

app.get('/auction', (req, res) => {
  res.json('Pegou')
});
http.listen(3001, () => {
  console.log('Funcionou')
});
