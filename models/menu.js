const { Model } = require('objection');
const knexconfig = require('../knexfile');
const Knex = require('knex');

const knex = Knex(knexConfig.development);
Model.knex(knex);

class Menu extends Model {
  static get tableName() {
    return 'molloyEats.menu';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'price'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        description: { type: ['string', 'null'] },
        price: { type: 'number' }
      }
    };
  }
}

module.exports = Menu;