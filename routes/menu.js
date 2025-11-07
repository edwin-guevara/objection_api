const express = require('express');
const router = express.Router();
const Joi = require('joi');
const MenuController = require('../controllers/menu');


router.get('/menu', MenuController.getMenu);

router.post('/menu/add', (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().optional()
  });
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.detaisl[0].message });
  next();
}, MenuController.addItem);

router.delete('/menu/remove', (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(0
  });
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.detaisl[0].message });
  next();
}, MenuController.removeItem);

router.put('/menu/update', (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().optional()
  });
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
}, MenuController.updateItem);

module.exports = router;