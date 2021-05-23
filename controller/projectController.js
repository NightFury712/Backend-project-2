const Project = require('../models/projectModel');

const getProjects = async (req, res) => {
  try {
    const project = await Project.findAll();
    res.json(project);
  } catch (err) {
    console.log(err);
  }
}

const createProject = (req, res) => {
  try {
    const prjKey = req.body.prjKey;
    const prjName = req.body.prjName;
    Project.create(prjKey, prjName);
    res.json({ message: "Create success!" });
  } catch (err) {
    console.log(err);
  }
}

const deleteProject = (req, res) => {
  try {

    const prjKey = req.body.prjKey;

    Project.deleted(prjKey);
  } catch (err) {
    console.log(err);
  }
}


module.exports = {
  getProjects,
  createProject,
  deleteProject
}