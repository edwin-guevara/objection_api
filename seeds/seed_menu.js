/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const fs = require('fs');

exports.seed = async function(knex) {
  const data = JSON.parse(fs.readFileSync('./seeds/menu.json'));
  await knex('molloyEats.menu').insert(data);
  // Deletes ALL existing entries 
};
