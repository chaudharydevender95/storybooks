var passport = require('passport')

module.exports.authenticateUser = ()=>{
    console.log('authenticateUser')
    passport.authenticate('google', { scope: ['profile'] })
}

module.exports.handleCallback = () =>{
    passport.authenticate('google', { failureRedirect: '/login' }),
        function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    }
}