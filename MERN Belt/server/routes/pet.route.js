const PetController = require('../controllers/pet.controller');

console.log('routes')

module.exports = function (app) {
  app.get('/api', PetController.index);
  app.post('/api/pet', PetController.create);
  app.get('/api/pet', PetController.getAll);
  app.get('/api/pet/:id', PetController.get);
  app.put('/api/pet/:id', PetController.update);
  app.delete('/api/pet/:id', PetController.delete);
}