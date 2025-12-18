const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

// GET all transactions
router.get('/', async (req, res) => {
  try {
    const transactions = await Transaction.findAll();
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET one transaction
router.get('/:id', async (req, res) => {
  try {
    const transaction = await Transaction.findByPk(req.params.id);
    if (!transaction) return res.status(404).json({ message: 'Transaction not found' });
    res.json(transaction);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST create transaction
router.post('/', async (req, res) => {
  try {
    const transaction = await Transaction.create(req.body);
    res.status(201).json(transaction);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update transaction
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Transaction.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ message: 'Transaction not found' });
    const updatedTransaction = await Transaction.findByPk(req.params.id);
    res.json(updatedTransaction);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE transaction
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Transaction.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ message: 'Transaction not found' });
    res.json({ message: 'Transaction deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;