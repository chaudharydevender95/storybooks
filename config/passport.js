var GoogleStrategy = require('passport-google-oauth20').Strategy;
var keys = require('./keys')

module.exports = (passport) => {
    passport.use(new GoogleStrategy({
        clientID: keys.GOOGLE_CLIENT_ID,
        clientSecret: keys.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback"
    },
        function (accessToken, refreshToken, profile, cb) {
            // User.findOrCreate({ googleId: profile.id }, function (err, user) {
                return cb(null, {id:'1'});
            // });
        }
    ));

    passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
      
      passport.deserializeUser(function(id, done) {
        // User.findById(id, function(err, user) {
          done(null, {id:'1'});
        // });
      });
}