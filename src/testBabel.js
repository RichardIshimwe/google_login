import express from 'express';

const app = express();

app.get('/',(req, res) =>{
    res.status(200).send("welcome to the home page");
})

app.listen(3003,() =>{
    console.log(`server is running on port http://localhost:3003`)
});
