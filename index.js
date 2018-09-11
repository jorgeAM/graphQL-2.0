const mongoose = require('mongoose');
const server = require('./app');

mongoose.connect('mongodb://localhost/graphql', { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Hubo un error'));
db.once('open', () => {
  console.log('Conexión exitosa 😎');
  server.listen().then(({ url }) => {
    console.log(`servidor corriento en ${url} 🚀`);
  });
});
