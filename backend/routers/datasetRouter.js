const express = require('express');
const router = express.Router();
const datasetModel = require('../models/datasetModel.js');

router.get('/getall',(req,res)=>{
    datasetModel.find()
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
    datasetModel.find({createdBy: req.body._id})
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

    datasetModel.findById(req.params.id)
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


module.exports = router;