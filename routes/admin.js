// routes/admin.js
const express = require('express');
const router = express.Router();
const Skill = require('../models/Skill');

// GET /admin/skills - Show all skills and form
router.get('/skills', async (req, res) => {
  const skills = await Skill.find().sort({ createdAt: -1 });
  res.render('skills', { skills });
});

// POST /admin/skills - Add new skill
router.post('/skills', async (req, res) => {
  const { name, level, category } = req.body;
  await Skill.create({ name, level, category });
  res.redirect('/admin/skills');
});

// DELETE (optional later)
router.post('/skills/delete/:id', async (req, res) => {
  await Skill.findByIdAndDelete(req.params.id);
  res.redirect('/admin/skills');
});

const Project = require('../models/Project');

// GET /admin/projects - Show all projects and form
router.get('/projects', async (req, res) => {
  const projects = await Project.find().sort({ createdAt: -1 });
  res.render('projects', { projects });
});

// POST /admin/projects - Add new project
router.post('/projects', async (req, res) => {
  const { title, description, githubLink, liveLink, imageUrl, technologies } = req.body;
  const techArray = technologies.split(',').map(tech => tech.trim());
  await Project.create({ title, description, githubLink, liveLink, imageUrl, technologies: techArray });
  res.redirect('/admin/projects');
});

// DELETE project
router.post('/projects/delete/:id', async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.redirect('/admin/projects');
});



module.exports = router;
