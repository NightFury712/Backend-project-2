const Issues = require('./controller/issueController');
const Projects = require('./controller/projectController')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//Import routers
const issueRouter = require('./routers/issueRouter');
const projectRouter = require('./routers/projectRouter');
const membetRouter = require('./routers/memberRouter');

app.use(bodyParser.json());

app.use('/issue', issueRouter);

app.use('/project', projectRouter);

app.use('/member', membetRouter);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})