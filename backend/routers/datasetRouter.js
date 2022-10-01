const express = require('express');
const router = express.Router();
const datasetModel = require('../models/datasetModel.js');

router.get('/getall',(req,res)=>{
    datasetModel.find().populate('createdBy')
    .then((result) => {
        console.log(result)
        res.json(result);
        console.log('sending all the datasets');
    }).catch((err) => {
        res.json(err);
    });
})

router.post('/userdatasets',(req,res)=>{
    console.log(req.body._id);
    datasetModel.find({createdBy: req.body._id}).populate('createdBy')
    .then((result) => {
        console.log(result)
        res.json(result);
    }).catch((err) => {
        console.log(err);
    });
})

router.post('/add',(req,res)=>{
    console.log(req.body);
    new datasetModel(req.body).save()
    .then((result) => {
        console.log('Dataset Saved');
        res.json(result);
    }).catch((err) => {
        console.log(err);
    });
})

router.get('/find/:title',(req,res)=>{
    console.log(req.params.title);

    datasetModel.find({title: req.params.title})
    .then((result) => {
        console.log(result)
        res.json(result);
    }).catch((err) => {
        console.log(err);
    });
})

router.get('/details/:id',(req,res)=>{
    console.log(typeof req.params.id)

    datasetModel.findById(req.params.id).populate('createdBy')
    .then((result) => {
        console.log(result)
        // if(result.status === 200)
        // res.status(200).json(result)
        // else
        // res.status(401).json('Details not found')
        res.json(result)
    }).catch((err) => {
        res.json(err)
    });
})
router.post('/upvote/:id',(req,res)=>{
    console.log(req.body.upvoteBtn);
    console.log('id prams', req.params.id);
    // res.json(req.body)
    datasetModel.updateOne({_id:req.params.id},{upvote: req.body.upvoteBtn})
    .then((result) => {
        console.log(result);
        res.json(result);
    }).catch((err) => {
        res.json(err);
    });
})
router.post('/downvote/:id',(req,res)=>{
    console.log(req.body.downvoteBtn);
    console.log('id prams', req.params.id);
    // res.json(req.body)
    datasetModel.updateOne({_id:req.params.id},{downvote: req.body.downvoteBtn})
    .then((result) => {
        console.log(result);
        res.json(result);
    }).catch((err) => {
        res.json(err);
    });
})


module.exports = router;