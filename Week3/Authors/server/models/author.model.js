const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
  name:{type: 'string'}
}, {timestamps: true});

module.exports.Author = mongoose.model('Author', AuthorSchema);