const Issue = require('../models/issueModel');
const Timeline = require('../models/timelineModel');


//Get all Issues
const getIssues = async (req, res) => {
  try {
    prjKey = req.params.prjKey;
    const issues = await Issue.findAll(prjKey);
    res.json(issues);
  } catch (err) {
    console.log(err);
  }
}

const createIssue = (req, res) => {
  try {
    const issue = req.body;
    const timeline = {
      name: 'Hoàng Hải Đăng',
      activity: 'add a new',
      project_Key: issue.prjKey.toLowerCase(),
      type: 'issue'
    }

    Timeline.create(timeline);
    issue.prjKey = issue.prjKey.toLowerCase();
    Issue.created(issue);
    // console.log(issue);
  } catch (err) {
    console.log(err);
  }
}

const updateIssue = (req, res) => {
  try {
    const issue = req.body;
    const timeline = {
      name: 'Hoàng Hải Đăng',
      activity: 'update a',
      project_Key: issue.prjKey.toLowerCase(),
      type: 'issue'
    }

    Timeline.create(timeline);
    issue.prjKey = issue.prjKey.toLowerCase();
    Issue.updated(issue);
    // console.log(issue);
  } catch (err) {
    console.log(err);
  }
}

const deleteIssue = (req, res) => {
  try {
    const issue = req.body;
    const timeline = {
      name: 'Hoàng Hải Đăng',
      activity: 'delete the',
      project_Key: issue.prjKey.toLowerCase(),
      type: 'issue'
    }

    Timeline.create(timeline);
    issue.prjKey = issue.prjKey.toLowerCase();
    Issue.deleted(issue);
  } catch (err) {
    console.log(err);
  }
}


module.exports = {
  getIssues,
  createIssue,
  updateIssue,
  deleteIssue
}