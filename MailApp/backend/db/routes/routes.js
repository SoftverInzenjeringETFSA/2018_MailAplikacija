var express = require('express')
var router = express.Router(); 
const Email = require('../model/email');
const Category = require('../model/category');

// get all email from catagory
router.get('/getMailsByCategory/:id',(req,res,next)=>{
    Email.find({categoryId:req.params.id},function(err,emails){
        if(err){
            res.json(err);
        }
        else{
            res.json(emails);
        }
    })
})

// get all categories
router.get('/categories',(req,res,next)=>{
    Category.find(function(err,categories){
        if(err){
            res.json(err);
        }
        else{
            res.json(categories);
        }
    })
})
// dodavanje kategorije
router.post('/addCategory',(req,res,next)=>{
    let newCategory = new Category({
        categoryName: req.body.categoryName
    });
    newCategory.save((err,item)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json({msg:'Item added!'});
        }
    })
});
//dodavanje emaila
router.post('/addEmail',(req,res,next)=>{
    let newMail = new Email({
        emailSubject: req.body.emailSubject,
        categoryId: req.body.categoryId,
        sender: req.body.sender,
        message: req.body.message
    });
    newMail.save((err,item)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json({msg:'Email added!'});
        }
    })
});
// brisanje kategorije sa svim mailovima
router.delete('/category/:id',(req,res,next)=>{
    Category.remove({_id:req.params.id},function(err,result){
        if(err){
            res.send(err);
        }
        else{
            Email.remove({categoryId:req.params.id},function(err,result){
                if(err){
                    res.send(err);
                }
                else{
                    res.json("Category and emails deleted!");
                }
            })
        }
    })
});
// promjena kategorije maila
router.put('/email/:id',(req,res,next)=>{
    Email.findOneAndUpdate({_id:req.params.id}, {
        $set:{
            categoryId: req.body.categoryId
        }
    },
    function(err,result){
        if(err){
            res.send(err);
        }
        else{
            res.send(result);
        }
    });
});

module.exports = router ; 