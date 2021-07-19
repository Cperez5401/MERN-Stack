const { Pet } = require("../models/pet.model");
module.exports.index = (request, response) => {
  response.json({
    message: "Hello world!",
  });
};

module.exports.create = (request, response) => {
  const { petName, petType, petDescription, skillOne, skillTwo, skillThree } = request.body;
  Pet.create({
    petName,
    petType,
    petDescription,
    skillOne,
    skillTwo,
    skillThree
  })
    .then((pet) => response.json(pet))
    .catch((err) =>response.status(400).json(err));
};

module.exports.getAll = (request, response) => {
  Pet.find({})
    .then((pets) => response.json(pets))
    .catch((err) => response.json(err));
};

module.exports.get = (request, response) => {
  Pet.findOne({ _id: request.params.id })
    .then((pet) => response.json(pet))
    .catch((err) => response.json(err));
};

module.exports.update = (request, response) => {
  Pet.findOneAndUpdate({_id: request.params.id }, request.body, {new:true,})
    .then((updatedPet) => response.json(updatedPet))
    .catch((err) => response.json(err));
};

module.exports.delete = (request, response) => {
  Pet.deleteOne({ _id: request.params.id })
    .then((deleteConfirmation) => response.json(deleteConfirmation))
    .catch((err) => response.json(err));
};
