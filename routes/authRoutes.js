var express = require('express');
var router = express.Router()
var passport = require('passport')
var userServices = require('../services/userServices')

router.get('/google', passport.authenticate('google', { scope: ['profile','email'] }))

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/deshboard');
    })


router.get('/logout',(req,res)=>{
    req.logOut()
    res.redirect('/')
})
module.exports = router