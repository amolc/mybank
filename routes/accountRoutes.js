const express = require('express');
const router = express.Router();
const Account = require('../models/Account');

// GET all accounts
router.get('/', async (req, res) => {
  try {
    const accounts = await Account.findAll();
    res.json(accounts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET one account
router.get('/:id', async (req, res) => {
  try {
    const account = await Account.findByPk(req.params.id);
    if (!account) return res.status(404).json({ message: 'Account not found' });
    res.json(account);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST create account
router.post('/', async (req, res) => {
  try {
    const account = await Account.create(req.body);
    res.status(201).json(account);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update account
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Account.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ message: 'Account not found' });
    const updatedAccount = await Account.findByPk(req.params.id);
    res.json(updatedAccount);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE account
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Account.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ message: 'Account not found' });
    res.json({ message: 'Account deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;