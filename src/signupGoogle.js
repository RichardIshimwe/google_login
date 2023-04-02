const express = require('express');
var session = require('express-session');
const passport = require('passport');
require('./auth')

function isLogedin(req, res, next){
  req.user ? next() : res.status(401).send("you are not loged in");
}

const app = express();

app.use(session({secret: 'keyboard cat'}));
app.use(passport.initialize());
app.use(passport.session());

const port = 5500;

app.get('/',(req, res) =>{
    res.status(200).send('<a href="/auth/google">Authenticate with Google</a>')
});

app.get('/auth/google', 
passport.authenticate('google', { scope: ['email', 'profile'] })
)

app.get('/auth/google/redirect', 

passport.authenticate('google', {

successRedirect: '/protected',
failureRedirect: '/auth/failure'

})
);

app.get('/auth/failure', (req, res) =>{
  res.status(200).send("something ")
})

app.get('/protected', isLogedin,(req, res) => {
  res.status(200).send('hellooo');
})

app.listen(port,() =>{
    console.log(`the server is running at http://localhost:${port}`)
})

// google servce app
// client id:545273908838-nnbbmo1ov5dcdgnn06cmn4n9imr4sd8s.apps.googleusercontent.com
// client secret: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

// microsoft azure
// client id:2a88b2c2-f444-4692-8ec5-0c20a4c378bb

// secret id:c6ef395c-0bde-4271-a8c5-07b6d6893f02

