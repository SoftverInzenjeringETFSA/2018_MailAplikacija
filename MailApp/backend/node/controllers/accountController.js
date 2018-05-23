var Account = require('../models/account');
var md5 = require('md5');

exports.account_add_post = function(req, res) {
   // res.setHeader('Access-Control-Allow-Origin', '*');

    var newAccount = new Account({
        username: req.body.username, 
        email: req.body.email, 
        password: md5(req.body.password)
    });
    //test account validity
    console.log(req);
    console.log(newAccount);
    newAccount.save(function (err) {
        if (err) 
            res.send(err);
        else 
            res.send('Success');
      }); 
};