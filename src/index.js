// const hbs = require('nodemailer-express-handlebars');
// const path = require('path')
// const express = require('express');
// const nodemailer = require('nodemailer');
// const cors = require('cors')
// const dotenv = require('dotenv');
// dotenv.config();

// const app = express();
// app.use(cors());
// let port = 4001;

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

// const handlebarOptions = {
// 	viewEngine: {
// 		partialsDir: path.resolve('./views/'),
// 		defaultLayout: false
// 	},
// 	viewPath: path.resolve('./views/')
// }

// transporter.use('compile', hbs(handlebarOptions))

// let mailOptions = {
// 	from: "techtitansatlp@gmail.com",
// 	to:" ishimwerichard26@gmail.com",
// 	subject: "welcome",
// 	template:'email',
// 	context: {
// 		verifyUrl:"http://localhost:4000/",
// 		content: "VERIFY YOUR EMAIL"
// 	}
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

// // require("dotenv").config();

// // module.exports = {
// //   development: {
// //     username: 'andelarwanda',
// //     password: null,
// //     database: 'andelarwanda',
// //     host: 'localhost',
// //     port: 5432,
// //     dialect: "postgres",
// //     logging: false,
// //   },
// //   test: {
// //     use_env_variable: "",
// //     username: 'andelarwanda',
// //     password: null,
// //     database: 'andelarwanda',
// //     host: 'localhost',
// //     port: 5432,
// //     dialect: "postgres",
// //     logging: false,
// //   },
// //   production: {
// //     use_env_variable: "DATABASE_URL",
// //     logging: false,
// //   },
// //   staging: {
// //     use_env_variable: "DATABASE_URL_STAGING",
// //     logging: false,
// //   },
// // };