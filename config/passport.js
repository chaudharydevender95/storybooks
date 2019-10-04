var GoogleStrategy = require('passport-google-oauth20').Strategy;
var keys = require('./keys')
var mongoose = require('mongoose')
var User = mongoose.model('users')

module.exports = (passport) => {
    passport.use(new GoogleStrategy({
        clientID: keys.GOOGLE_CLIENT_ID,
        clientSecret: keys.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback"
    },
        function (accessToken, refreshToken, profile, cb) {
            // console.log('accessToken',accessToken)
            // console.log('refreshToken',refreshToken)
            // console.log('profile',profile)

            var user = {
                email: profile._json.email,
                googleId: profile._json.sub,
                firstName: profile._json.given_name,
                lastName: profile._json.family_name,
                image: profile._json.picture
            }

            console.log(user)
            User.findOne({ googleId: user.googleId })
                .then(foundUser => {
                    if (!foundUser) {
                        new User(user)
                            .save()
                            .then(user => {
                                return cb(null, user)
                            })
                            .catch(err => {
                                return cb(err)
                            })
                    }else{
                        return cb(null, foundUser)
                    }
                })
                .catch(err => {
                    return cb(err)

                })
        }
    ));

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(null, user);
        });
    });
}