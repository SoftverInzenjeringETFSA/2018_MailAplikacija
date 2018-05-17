const mongoose = require('mongoose')

const EmailSchema = mongoose.Schema({
    emailSubject:{
        type:String,
        required: false
    },
    categoryId:{
        type: String,
        required: true
    },
    sender:{
        type: String,
        required: false
    },
    message:{
        type: String,
        required: true
    }
});

const Email = module.exports  = mongoose.model('email',EmailSchema);