const Project = require('../models/projectModel');
const Timeline = require('../models/timelineModel');

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
    const timeline = {
      name: 'Hoàng Hải Đăng',
      activity: 'create a new',
      project_Key: prjKey.toLowerCase(),
      type: 'project'
    }
    Timeline.create(timeline)
    Project.create(prjKey, prjName);
    res.json({ message: "Create success!" });
  } catch (err) {
    console.log(err);
  }
}

const updateProject = (req, res) => {
  try {
    const prjKey = req.body.prjKey;
    const prjName = req.body.prjName;
    const timeline = {
      name: 'Hoàng Hải Đăng',
      activity: 'update a new name for',
      project_Key: prjKey.toLowerCase(),
      type: 'project'
    }
    Timeline.create(timeline)
    Project.updated(prjKey, prjName);
    res.json({ message: "Update  success!" });
  } catch (err) {
    console.log(err);
  }
}

const deleteProject = (req, res) => {
  try {

    const prjKey = req.body.prjKey.toLowerCase();
    const timeline = {
      name: 'Hoàng Hải Đăng',
      activity: 'delete the',
      project_Key: prjKey.toLowerCase(),
      type: 'project'
    }
    Timeline.create(timeline)
    Project.deleted(prjKey);
  } catch (err) {
    console.log(err);
  }
}


module.exports = {
  getProjects,
  createProject,
  deleteProject,
  updateProject
}