const Issue = require('../models/issueModel');


//Get all Issues
const getIssues = async (req, res) => {
  try {
    prjKey = req.params.prjKey;
    const issues = await Issue.findAll(prjKey);
    // res.writeHead(200, {'Content-Type': 'application/json'})
    // console.log(issues);
    res.json(issues);
  } catch (err) {
    console.log(err);
  }
}

const createIssue = (req, res) => {
  try {
    const issue = req.body;

    issue.prjKey = issue.prjKey.replace(/\s/g, '_').toLowerCase();
    Issue.created(issue);
    // console.log(issue);
  } catch (err) {
    console.log(err);
  }
}

const updateIssue = (req, res) => {
  try {
    const issue = req.body;
    issue.prjKey = issue.prjKey.replace(/\s/g, '_').toLowerCase();
    Issue.updated(issue);
    // console.log(issue);
  } catch (err) {
    console.log(err);
  }
}

const deleteIssue = (req, res) => {
  try {
    const issue = req.body;
    issue.prjKey = issue.prjKey.replace(/\s/g, '_').toLowerCase();
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