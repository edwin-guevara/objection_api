const Menu = require('../models/menu');

class MenuService {
  async getMenu(name = '') {
    return Menu.query()
      .select('name', 'price', 'description')
      .where('name', 'ilike', '%${name}%')
      .orWhere('description', 'ilike', '%${name}%');
  }

  async addItem(name, price, description) {
    const exists = await Menu.query().findOne('name', 'ilike', name);
    if (!exists) {
      return Menu.query().insert({ name, price, description });
    }
    return false;
  }

  async removeItem(name) {
    return Menu.query().delete().where('name', 'ilike', name);
  }

  async updateItem(name, price, description) {
    return Menu.query().update({ name, price, description }).where('name', 'ilike', name);
  }
}

module.exports = new MenuService();