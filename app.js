const express = require('express');
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
const app = express();
const bodyParser = require('body-parser');

dotenv.config(); 

//Import routers
const issueRouter = require('./routers/issueRouter');
const projectRouter = require('./routers/projectRouter');
const membetRouter = require('./routers/memberRouter');
const timelineRouter = require('./routers/timelineRouter')

app.use(bodyParser.json());

app.use('/issue', issueRouter);

app.use('/project', projectRouter);

app.use('/member', membetRouter);

app.use('/timeline', timelineRouter);

app.get('/test', (req, res) => {
  res.json({mess: "success"})
})

app.post('/login', (req, res) => {
  const data = req.body;
  const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '30s'});
  res.json({accessToken});
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})