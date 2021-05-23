const Member = require('../models/memberModel');

const getMembers = async (req, res) => {
  try {
    let prjKey = req.params.prjKey;

    prjKey = prjKey.toLowerCase();
    const members = await Member.findAll(prjKey);
    res.end(JSON.stringify(members));
  } catch (err) {
    console.log(err);
  }
}

const createMember = (req, res) => {
  try {
    const member = req.body;

    member.prjKey = member.prjKey.toLowerCase();
    Member.created(member);
    // console.log(issue);
  } catch (err) {
    console.log(err);
  }
}


const updateMember = (req, res) => {
  try {
    const member = req.body;

    member.prjKey = member.prjKey.toLowerCase();
    Member.updated(member);
  } catch (err) {
    console.log(err);
  }
}

const deleteMember = (req, res) => {
  try {
    const member = req.body;

    member.prjKey = member.prjKey.replace(/\s/g, '_').toLowerCase();
    Member.deleted(member);
  } catch (err) {
    console.log(err);
  }
}


module.exports = {
  getMembers,
  createMember,
  updateMember,
  deleteMember
}
