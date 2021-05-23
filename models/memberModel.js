const conn = require('../config/connectDB');

let findAll = (prjKey) => {
  return new Promise((resolve, reject) => {
    const sql = `select * from members`;
    conn.connection(prjKey).query(sql, function (err, results) {
      if (err) throw err;
      results;
      resolve(results);
    });
  })
};

let created = (member) => {
  var date = new Date();
  const sql = `insert into members (name, email, role, time_invite) values 
    ('${member.name}', '${member.email}', '${member.role}', '${date.toUTCString()}')`;
  conn.connection(member.prjKey).query(sql, (err) => {
    if (!err) {
      console.log('Insert members success!');
    } else {
      console.log('Insert error:' + err);
    }
  });
};

let deleted = (member) => {
  const sql = `delete from members where ID = '${member.id}'`;
  conn.connection(member.prjKey).query(sql, (err) => {
    if (!err) {
      console.log('Delete members success!');
    } else {
      console.log('Delete error:' + err);
    }
  });
}

let updated = (member) => {
  const sql = `update members set 
    name = '${member.name}',
    email = '${member.email}',
    role = '${member.role}',
    time_invite = '${member.time_invite}' where id = '${member.id}'`
  conn.connection(member.prjKey).query(sql, (err) => {
    if (!err) {
      console.log('Update members success!');
    } else {
      console.log('Update error:' + err);
    }
  });
}

module.exports = {
  findAll,
  created,
  updated,
  deleted
}