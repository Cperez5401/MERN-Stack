const express = require('express');

const faker = require('faker');

const port = 8000;

const app = express();

class User {
  constructor (){
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}

class Company {
  constructor() {
    this.name = faker.company.companyName();
    this.address = faker.address.streetAddress();
  }
}

app.get('/', (req, res) => {
  res.send("Hello World!")
});

app.get('/api/users/new', (req, res) => {
  res.json( new User );
})

app.get('/api/companies/new', (req, res) => {
  res.json( new Company );
})

app.get('/api/user/company', (req, res) => {
  res.json({
    user: new User,
    company: new Company
  });
})

app.listen(port, () => {
  console.log(`Listening on port ${port} for requests to respond.`);
});