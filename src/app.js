const express = require('express');
const app = express();
const port = 8081;

const knex = require('knex')(require('../knexfile.js')["development"])

app.get('/', (request, response) => {
  response.send('App is Running.')
})

app.listen(port, () => {
  console.log('Huge W')
})

app.get('/pets', (request, response) => {
  knex('pet')
    .select('*')
    .then(pets => {
      var petNames = pets.map(pet => pet.name)
      response.json(petNames);
    })
})

app.get('/pets/food', (request, response) => {
  knex('pet_food_type')
    .select('*')
    .then(food => {
      var petFoodNames = food.map(pet_food_type => pet_food_type)
      response.json(petFoodNames);
    })
})