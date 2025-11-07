const menuService = require('../services/menu');

class MenuController {
  static async getMenu(req, res) {
    try {
      const { name } = req.query;
      const result = await menuService.getMenu(name);
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async addItem(req, res) {
    try {
      const { name, price, description } = req.body;
      const result = await menuService.addItem(name, price, description);
      if (result) res.json(result);
      else res.status(400).json({ error: 'Item already exists' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async removeItem(req, res) {
    try {
      const { name } = req.body;
      const count = await menuService.removeItem(name);
      if (count > 0) res.json({ message: '${count} item(s) removed' });
      else res.status(404).json({ error: 'Item not found' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async updateItem(req, res) {
    try {
      const { name, price, description } = req.body;
      const count = await menuService.updateItem(name, price, description);
      if (count > 0) res.json({ message: '${count} item(s) updated' });
      else res.status(404).json({ error: 'Item not found' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = MenuController;