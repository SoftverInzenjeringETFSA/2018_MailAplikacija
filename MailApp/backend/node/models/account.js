var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Regex = /^\w+@((hotmail.com)|(gmail.com)|(live.com)|(etf.unsa.ba))$/;

var AccountSchema = new Schema(
  {
    username: String,
    email: {
      type: String,
      validate: [ Regex, 'Unsupported email']
    },
    password: String
  }
);

//Export model
module.exports = mongoose.model('Account', AccountSchema);