// routes/api.js
const express = require('express');
const router = express.Router();
const Skill = require('../models/Skill');
const Project = require('../models/Project');

// GET /api/skills
router.get('/skills', async (req, res) => {
  try {
    const skills = await Skill.find().sort({ createdAt: -1 });
    res.json(skills);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching skills' });
  }
});

// GET /api/projects
router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching projects' });
  }
});

module.exports = router;
