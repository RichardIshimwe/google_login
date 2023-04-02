const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const GOOGLE_CLIENT_ID = '545273908838-nnbbmo1ov5dcdgnn06cmn4n9imr4sd8s.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5500/auth/google/redirect",
    passReqToCallback: true
  },
  function(request, accessToken, refreshToken, profile, done) {
      return done( null , profile);
  }
));

passport.serializeUser(function(user, done){
    done(null, user)
});

passport.deserializeUser(function(user, done){
    done(null, user)
})


