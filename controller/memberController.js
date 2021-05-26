const Member = require('../models/memberModel');
const Timeline = require('../models/timelineModel');

const getMembers = async (req, res) => {
  try {
    let prjKey = req.params.prjKey;

    prjKey = prjKey.toLowerCase();
    const members = await Member.findAll(prjKey);
    res.json(members);
  } catch (err) {
    console.log(err);
  }
}

const createMember = (req, res) => {
  try {
    const member = req.body;
    const timeline = {
      name: 'Hoàng Hải Đăng',
      activity: 'add a new',
      project_Key: member.prjKey.toLowerCase(),
      type: 'member'
    }

    Timeline.create(timeline);

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
    const timeline = {
      name: 'Hoàng Hải Đăng',
      activity: 'delete a',
      project_Key: member.prjKey.toLowerCase(),
      type: 'member'
    }

    Timeline.create(timeline);

    member.prjKey = member.prjKey.toLowerCase();
    Member.deleted(member);
    
    res.json({message: 'Delete member success!'});
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
