import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'remotemysql.com',
  user: 'e21ieINjqn',
  password: 'Kxx9wc7hj4',
  database: 'e21ieINjqn'
});

connection.connect();

connection.query('SELECT 1 + 3 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()