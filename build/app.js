"use strict";

// const { Pool } = require('pg');
// const url = require('url');
// // Parse the database URL
// const params = url.parse('postgres://hcrzwnwqgenhel:2dbadbfa06fb79db4b13c40c47c23dd731804f6afc70d235eb33c0646e8f8f07@ec2-3-208-74-199.compute-1.amazonaws.com:5432/d6eo5nv3l6p49p');
// const auth = params.auth.split(':');
// // Create a new database pool
// const pool = new Pool({
//   user: auth[0],
//   password: auth[1],
//   host: params.hostname,
//   port: params.port,
//   database: params.pathname.split('/')[1],
//   ssl: {
//     rejectUnauthorized: false
//   }
// });

// pool.query('CREATE TABLE products (id SERIAL PRIMARY KEY, name TEXT, email TEXT)', (err, result) => {
//     if (err) {
//       console.error(err);
//       return;
//     }

//     console.log(result.rows);
//   });

// "scripts": {
//     "dev": "nodemon --exec babel-node src/index.js",
//     "build": "babel src -d build",
//     "start": "npm run build && nodemon build/index.js",
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },

var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://hcrzwnwqgenhel:2dbadbfa06fb79db4b13c40c47c23dd731804f6afc70d235eb33c0646e8f8f07@ec2-3-208-74-199.compute-1.amazonaws.com:5432/d6eo5nv3l6p49p', {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});
sequelize.authenticate().then(function () {
  console.log('Connection has been established successfully.');
})["catch"](function (err) {
  console.error('Unable to connect to the database:', err);
});