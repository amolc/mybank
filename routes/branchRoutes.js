const express = require('express');
const router = express.Router();
const Branch = require('../models/Branch');

// GET all branches
router.get('/', async (req, res) => {
  try {
    const branches = await Branch.findAll();
    res.json(branches);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET one branch
router.get('/:id', async (req, res) => {
  try {
    const branch = await Branch.findByPk(req.params.id);
    if (!branch) return res.status(404).json({ message: 'Branch not found' });
    res.json(branch);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST create branch
router.post('/', async (req, res) => {
  try {
    const branch = await Branch.create(req.body);
    res.status(201).json(branch);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update branch
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Branch.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ message: 'Branch not found' });
    const updatedBranch = await Branch.findByPk(req.params.id);
    res.json(updatedBranch);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE branch
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Branch.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ message: 'Branch not found' });
    res.json({ message: 'Branch deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;