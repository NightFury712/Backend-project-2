const express = require('express');
const router = express.Router();
const Members = require('../controller/memberController');

router.get('/getAll/:prjKey', (req, res) => {
  Members.getMembers(req, res);
})

router.post('/create', (req, res) => {
  console.log(req.body);
  Members.createMember(req, res);
})

router.put('/update', (req, res) => {
  Members.updateMember(req, res);
})

router.delete('/delete', (req, res) => {
  Members.deleteMember(req, res);
})

module.exports = router;
