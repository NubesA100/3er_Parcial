const express = require('express');
const mysql = require('mysql2');
const redis = require('redis');

const app = express();
const port = 3000;

// Conexión a MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Conexión a Redis
const redisClient = redis.createClient({
  host: process.env.REDIS_HOST
});

// Conexión a MySQL
db.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos MySQL:', err.stack);
    return;
  }
  console.log('Conectado a MySQL con éxito');
});

// Ruta principal
app.get('/', (req, res) => {
  res.send('¡Hola desde el servidor Node.js!');
});

// Ruta para almacenar datos en Redis
app.get('/set', (req, res) => {
  redisClient.set('mykey', 'Hello Redis!', (err, reply) => {
    if (err) {
      res.status(500).send('Error al escribir en Redis');
    } else {
      res.send(`Valor almacenado en Redis: ${reply}`);
    }
  });
});

// Ruta para obtener datos de Redis
app.get('/get', (req, res) => {
  redisClient.get('mykey', (err, reply) => {
    if (err) {
      res.status(500).send('Error al leer de Redis');
    } else {
      res.send(`Valor de Redis: ${reply}`);
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
