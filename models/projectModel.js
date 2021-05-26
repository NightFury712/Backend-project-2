const conn = require('../config/connectDB');


const findAll = () => {
  return new Promise((resolve, reject) => {
    const sql = `select * from project_name`;
    conn.connection('project_test').query(sql, function (err, results) {
      if (err) throw err;
      resolve(results);
    });
  })
}

const create = async (prjKey, prjName) => {
  await createProjectDB(prjKey);
  saveProjectName(prjKey, prjName);
  createIssueTable(prjKey);
  createMemberTable(prjKey);
};

const saveProjectName = (prjKey, prjName) => {
  const sql = `insert into project_name (project_Name, project_Key) values ('${prjName}', '${prjKey}')`;
  conn.connection('project_test').query(sql, (err) => {
    if (!err) {
      console.log('Insert new project success!');
    } else {
      console.log('Error inserting a new project:' + err);
    }
  });
}

const createProjectDB = (prjKey) => {
  return new Promise((resolve, reject) => {
    const sql = `create database if not exists ${prjKey}`;
    conn.connection('project_test').query(sql, (err) => {
      if (!err) {
        console.log('Create database success!');
        resolve();
      } else {
        console.log('Error creating project DB: ' + err);
      }
    });
  })
};

const createIssueTable = (prjKey) => {
  const sql = `create table if not exists issues (
    type varchar(50),
    id int auto_increment primary key,
    subject varchar(150),
    description varchar(300),
    status varchar(50),
    priority varchar(50),
    category varchar(100),
    dueDate varchar(100),
    created varchar(100),
    updated varchar(100),
    assignee varchar(50),
    milestone varchar(50),
    version varchar(50)
  );`;
  conn.connection(prjKey).query(sql, (err) => {
    if (!err) {
      console.log('Create Issue table success!');
    } else {
      console.log('Error creating Issue table: ' + err);
    }
  });
};

const createMemberTable = (prjKey) => {
  const sql = `create table if not exists members (
    id int auto_increment primary key,
    name varchar(50),
    email varchar(100),
    role varchar(50),
    time_invite varchar(100)
  );`;
  conn.connection(prjKey).query(sql, (err) => {
    if (!err) {
      console.log('Create member table success!');
    } else {
      console.log('Error creating Member table:' + err);
    }
  });
};


const updated = (prjKey, prjName) => {
  const sql = `update project_name set project_Name = '${prjName}' where project_Key = '${prjKey}'`;
  conn.connection('project_test').query(sql, (err) => {
    if (!err) {
      console.log('Update project success!');
    } else {
      console.log('Update error:' + err);
    }
  });
}

const deleted = (prjKey) => {
  const sql = `delete from project_name where project_Key = '${prjKey}'`;
  conn.connection('project_test').query(sql, (err) => {
    if (!err) {
      console.log('Delete project success!');
    } else {
      console.log('Delete error:' + err);
    }
  });
  dropProjectDB(prjKey);
}

const dropProjectDB = (prjKey) => {
  const sql = `drop database ${prjKey}`;
  conn.connection(prjKey).query(sql, (err) => {
    if (!err) {
      console.log('Drop database success!');
    } else {
      console.log('Drop err:' + err);
    }
  })
}

module.exports = {
  findAll,
  create,
  deleted,
  updated
}
