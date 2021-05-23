const express = require('express')
const router = express.Router();
const Projects = require('../controller/projectController')

router.get('/getAll', (req, res) => {
  Projects.getProjects(req, res);
})

router.post('/create', (req, res) => {
  Projects.createProject(req, res);
  console.log(req.body);
  res.json('success')
})

// router.patch('/update', (req, res) => {
//   Projects.up(req, res);
// })

router.delete('/delete', (req, res) => {
  Projects.deleteProject(req, res);
})

module.exports = router;