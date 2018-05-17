var express = require('express'); //server.js
var session = require('express-session')
var bodyParser = require('body-parser')
var mongoose = require('mongoose');
var port = process.env.PORT || 8080;
var passport = require('passport');
var cookieParser = require('cookie-parser');
var user = require('./models/User.js');

app.use(session({
    secret: 'supertajnihash123',
    resave: true,
    saveUninitialized: false
  }));

app.get('/login', function(req, res) {
    var usernamee = req.body.username;
    var password = req.body.password;
    User.findOne({'username': usernamee}, function(err, user){
        if(user.validatePassword(password)) 
            res.redirect('/loginovanAcc'); //POSTAVITI POTREBNU RUTU
        else 
            return err;
    });
});

app.get('/register', function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var date = req.body.date;
    var number = req.body.number;

    var newUser = new User({username: username, password: password, firstName: firstName, 
        lastName: lastName, date: date, number: number});
    
    newUser.save(function(err){
        if(err) return err;
    });
});

app.get('/logout', function(req, res) {
    req.logout(); //metoda passport paketa
    res.redirect('/');
});

app.listen(port);