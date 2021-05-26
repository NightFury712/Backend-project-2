const express = require('express');
const router = express.Router();
const Timeline = require('../controller/timelineController');


router.get('/getAll', (req, res) => {
  Timeline.getTimeline(req, res);
})

module.exports = router;