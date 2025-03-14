/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pet_food_type').del()
  await knex('pet_food_type').insert([
    {id: 1, name: 'Seeds', description: 'What birds usually eat'},
    {id: 2, name: 'Kibble', description: 'What dogs usually eat'},
    {id: 3, name: 'Milk', description: 'What cats usually drink'},
    {id: 4, name: 'Plants', description: 'What fish usually eat I guess'}
  ]);
};
