const Timeline = require('../models/timelineModel')

const getTimeline = async (req, res) => {
  try {
    const timeline = await Timeline.findAll();
    res.json(timeline);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getTimeline
}
