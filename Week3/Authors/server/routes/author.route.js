const AuthorController = require('../controllers/author.controller');

console.log('routes')

module.exports = function (app) {
  app.get('/api', AuthorController.index);
  app.post('/api/author', AuthorController.create);
  app.get('/api/author', AuthorController.getAll);
  app.get('/api/author/:id', AuthorController.get);
  app.put('/api/author/:id', AuthorController.update);
  app.delete('/api/author/:id', AuthorController.delete);
}