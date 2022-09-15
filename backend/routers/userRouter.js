const express = require('express');
const router = express.Router();                        // mAKING instance of router
const userModel = require('../models/userModel');       // importing user model


router.get('/',(req,res)=>{
    res.send('Welcome to userPage');
})

router.post('/registeruser',(req,res)=>{
        new userModel(req.body).save()
        .then((result) => {
            res.json(result);
            console.log('User Registerd Successfully');
        }).catch((err) => {
            console.log(err);
            res.json(err);
        });
})

router.get('/getall',(req,res)=>{
    userModel.find()
    .then((result) => {
        console.log(result)
        res.json(result)
    }).catch((err) => {
        console.log(err)
        res.json(err);
    });
})

router.post('/login',(req,res)=>{

    console.log(req.body);
    const loginData = req.body;
    // res.json(req.body)
    userModel.findOne({username: loginData.username, password: loginData.password})
    .then((result) => {
        if(result){
            res.status(200).json(result);
        }else{
            res.status(401).json({status: 'Login Failed'});
        }
        // res.json(result);
        
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err)
    });
})


router.post('/getdetailofuser',(req,res)=>{
    console.log(req.body)
    userModel.findById(req.body)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    });
})

// exporting routes
module.exports = router;