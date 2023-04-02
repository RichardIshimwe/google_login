const express = require('express');
const nodemailer = require('nodemailer');

const app = express();


let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "",
        pass: ""
    }
})

let mailoptions = {
    from: "",
    to: "",
    subject: "",
    text: ""
}

transporter.sendMail(mailoptions, function(err,success){
    if(err){
        console.log(err);
    }else{
        console.log("email sent successfully")
    }
})

const port = 3001;
app.get('/', (req, res) =>{
    res.status(200).send({message:"helloooo home page"})
})

    console.log(`server is runing on http://localhost:${port}`)
app.listen(port)