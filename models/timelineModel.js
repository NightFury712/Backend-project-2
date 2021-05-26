const conn = require('../config/connectDB');

const findAll = () => {
  return new Promise((resolve, reject) => {
    const sql = `select * from timeline order by id desc`;
    conn.connection('project_test').query(sql, function (err, results) {
      if (err) throw err;
      resolve(results);
    });
  })
}

const create = (timeline) => {
  let date = new Date();
  const sql = `insert into timeline ( name, activity, project_Key, time, type) values 
  ('${timeline.name}', '${timeline.activity}', '${timeline.project_Key}', '${date.toUTCString()}', '${timeline.type}')`;
  conn.connection('project_test').query(sql, (err) => {
    if (!err) {
      console.log('Insert new project success!');
    } else {
      console.log('Error inserting a new project:' + err);
    }
  });
}


module.exports = {
  findAll,
  create
}