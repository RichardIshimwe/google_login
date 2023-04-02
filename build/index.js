"use strict";

// // import express from 'express'
// // import print from './utils/user.js'
// // import cors from 'cors'
// // import dotenv from 'dotenv'
// // dotenv.config();
// // const app = express()
// // app.use(cors());
// // const PORT  = process.env.PORT
// // // console.log(USER);

// // app.get('/', (req, res) =>
// // 	res.send('testing babel configuration')
// // )

// // app.listen(PORT, () => {
// // 	console.log(`server listening on http://localhost:${PORT}`)
// // })
// const express = require('express');
// const nodemailer = require('nodemailer');
// const cors = require('cors')
// const dotenv = require('dotenv');
// dotenv.config();

// const app = express();
// app.use(cors());
// let port = 4000;

// let transporter = nodemailer.createTransport({
// 	service:"gmail",
// 	auth:{
// 		user: "techtitansatlp@gmail.com",
// 		pass: "myrvldttttzgeutd"
// 	},
// 	tls:{
// 		rejectUnauthorized: false,
// 	}
// })

// let mailOptions = {
// 	from: "techtitansatlp@gmail.com",
// 	to:" ishimwerichard26@gmail.com",
// 	subject: "subject",
// 	text: "this is the message from node js"
// }

// transporter.sendMail(mailOptions,function(err, success){
// 	if(err){
// 		console.log(err)
// 	}else{
// 		console.log("email is sent")
// 	}
// })

// app.get('/',(req, res) =>{
// 	res.status(200).send({message:"welcome to the home page"})
// })

// app.listen(port,() =>{
// 	console.log(`app listening on port http://localhost:${port}`);
// })

// // npm install --save-dev  @babel/cli @babel/core @babel/node @babel/preset-env babel-plugin-module-resolver nodemon
// // "build": "babel src/server.js -d dist",
// // "start": "npm run build && node dist/server.js"

// import express from 'express'
// import print from './utils/user.js'
// import cors from 'cors'
// import dotenv from 'dotenv'
// dotenv.config();
// const app = express()
// app.use(cors());
// const PORT  = process.env.PORT
// // console.log(USER);

// app.get('/', (req, res) =>
// 	res.send('testing babel configuration')
// )

// app.listen(PORT, () => {
// 	console.log(`server listening on http://localhost:${PORT}`)
// })
var hbs = require('nodemailer-express-handlebars');
var path = require('path');
var express = require('express');
var nodemailer = require('nodemailer');
var cors = require('cors');
var dotenv = require('dotenv');
dotenv.config();
var app = express();
app.use(cors());
var port = 4001;
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "techtitansatlp@gmail.com",
    pass: "myrvldttttzgeutd"
  },
  tls: {
    rejectUnauthorized: false
  }
});
var handlebarOptions = {
  viewEngine: {
    partialsDir: path.resolve('./views/'),
    defaultLayout: false
  },
  viewPath: path.resolve('./views/')
};
transporter.use('compile', hbs(handlebarOptions));
var mailOptions = {
  from: "techtitansatlp@gmail.com",
  to: " ishimwerichard26@gmail.com",
  subject: "welcome",
  template: 'email',
  context: {
    verifyUrl: "http://localhost:4000/",
    content: "VERIFY YOUR EMAIL"
  }
};
transporter.sendMail(mailOptions, function (err, success) {
  if (err) {
    console.log(err);
  } else {
    console.log("email is sent");
  }
});
app.get('/', function (req, res) {
  res.status(200).send({
    message: "welcome to the home page"
  });
});
app.listen(port, function () {
  console.log("app listening on port http://localhost:".concat(port));
});

// npm install --save-dev  @babel/cli @babel/core @babel/node @babel/preset-env babel-plugin-module-resolver nodemon
// "build": "babel src/server.js -d dist",
// "start": "npm run build && node dist/server.js"