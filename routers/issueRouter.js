const express = require('express');
const router = express.Router();
const Issues = require('../controller/issueController');

router.get('/getAll/:prjKey', (req, res) => {
  Issues.getIssues(req, res);
})

router.post('/create', (req, res) => {
  Issues.createIssue(req, res);
})

router.put('/update', (req, res) => {
  console.log(req.body);
  Issues.updateIssue(req, res);
})

router.delete('/delete', (req, res) => {
  Issues.deleteIssue(req, res);
})

module.exports = router;
