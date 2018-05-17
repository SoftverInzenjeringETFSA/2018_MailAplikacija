const mongoose = require('mongoose')

const CategorySchema = mongoose.Schema({
    categoryName:{
        type: String,
        required: true
    }
});

const Category = module.exports  = mongoose.model('category',CategorySchema);