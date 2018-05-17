var express = require('express')
var mongoose = require('mongoose')
var bodyparser = require('body-parser')
var cors = require('cors')
var path = require('path')

const route = require('./routes/routes');
var app = express();

// connect to mongo db

mongoose.connect('mongodb://tbuza1:password123@ds227110.mlab.com:27110/emailapp')

//on connection

mongoose.connection.on('connected',()=>{
    console.log("Mongoose connected at port 27017")
})

// on erro
mongoose.connection.on('error',(err)=>{
    console.log(err)
})

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyparser.json());
app.use('/api',route);

app.listen(PORT,()=>{
    console.log('Server started at port:' + PORT)
})