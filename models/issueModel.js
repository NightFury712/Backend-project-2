const conn = require('../config/connectDB')

let findAll = (prjKey) => {
  return new Promise((resolve, reject) => {
    const sql = `select * from issues`;
    conn.connection(prjKey).query(sql, function (err, results) {
      if (err) throw err;
      resolve(results);
    });
  })
};


let created = (issue) => {
  const sql = `insert into issues (type,subject,description,status,priority,category,
    dueDate,created,assignee,milestone,version) values 
    ('${issue.type}', '${issue.subject}', '${issue.description}', '${issue.status}',
    '${issue.priority}', '${issue.category}', '${issue.dueDate}', '${issue.created}',
    '${issue.assignee}', '${issue.milestone}', '${issue.version}')`;
  conn.connection(issue.prjKey).query(sql, (err) => {
    if (!err) {
      console.log('Insert issues success!');
    } else {
      console.log('Insert error:' + err);
    }
  });
};

let deleted = (issue) => {
  const sql = `delete from issues where ID = '${issue.id}'`
  conn.connection(issue.prjKey).query(sql, (err) => {
    if (!err) {
      console.log('Delete issue success!');
    } else {
      console.log('Delete error:' + err);
    }
  });
}

let updated = (issue) => {
  const sql = `update issues set 
    type = '${issue.type}',
    subject = '${issue.subject}',
    description = '${issue.description}',
    status = '${issue.status}',
    priority = '${issue.priority}',
    category = '${issue.category}',
    dueDate = '${issue.dueDate}',
    created = '${issue.created}',
    assignee = '${issue.assignee}',
    milestone = '${issue.milestone}',
    version = '${issue.version}' where id = '${issue.id}'`;
  conn.connection(issue.prjKey).query(sql, (err) => {
    if (!err) {
      console.log('Update issues success!');
    } else {
      console.log('Update error:' + err);
    }
  });
}

module.exports = {
  findAll,
  created,
  deleted,
  updated
}