import mysql from 'mysql';

// const env = process.env;

const queryDB = async (sql, params) => {

  const conn = mysql.createConnection({
    host: 'remotemysql.com',
    user: 'e21ieINjqn',
    password: 'Kxx9wc7hj4',
    database: 'e21ieINjqn'
  });

  let mainResults = {};

  mainResults.all = () => {
    return new Promise((resolve, reject) => {
      conn.query(sql, (err, results) => {
        if(err) {
          return reject(err)
        };

        // console.log(results);
        return resolve(results);
      });
      conn.end();
    })
  }

  return mainResults;
};

export default queryDB;