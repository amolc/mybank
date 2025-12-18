const express = require('express');
const router = express.Router();
const Bank = require('../models/Bank');

// GET all banks
router.get('/', async (req, res) => {
  try {
    const banks = await Bank.findAll();
    res.json(banks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET one bank
router.get('/:id', async (req, res) => {
  try {
    const bank = await Bank.findByPk(req.params.id);
    if (!bank) return res.status(404).json({ message: 'Bank not found' });
    res.json(bank);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST create bank
router.post('/', async (req, res) => {
  try {
    const bank = await Bank.create(req.body);
    res.status(201).json(bank);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update bank
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Bank.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ message: 'Bank not found' });
    const updatedBank = await Bank.findByPk(req.params.id);
    res.json(updatedBank);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE bank
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Bank.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ message: 'Bank not found' });
    res.json({ message: 'Bank deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;