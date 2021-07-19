const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
  petName:{
    type: 'string',
    required:[
      true,
      'Pet Name is required'
    ],
    minLength:[
      3,
      'Min length must be greater than 3 characters'
    ]
  },
  petType:{
    type: 'string',
    required:[
      true,
      'Pet Type is required'
    ],
    minLength:[
      3,
      'Min length must be greater than 3 characters'
    ]
  },
  petDescription:{
    type: 'string',
    required:[
      true,
      'Pet description is required'
    ],
    minLength:[
      3,
      'Min length must be greater than 3 characters'
    ]
  },
  skillOne:{
    type:'string'
  },
  skillTwo:{
    type:'string'
  },
  skillThree:{
    type:'string'
  },
}, {timestamps: true});

module.exports.Pet = mongoose.model('Pet', PetSchema);