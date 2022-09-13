const express = require('express');
const router = express.Router();
const datasetModel = require('../models/datasetModel.js');

router.get('/',(req,res)=>{
    datasetModel.find()
    .then((result) => {
        res.json(result);
        console.log('sending all the datasets');
    }).catch((err) => {
        res.json(err);
    });
})

router.post('/add',(req,res)=>{
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

    Model.find({title: req.params.title})
    .then((result) => {
        console.log(result)
        res.json(result);
    }).catch((err) => {
        console.log(err);
    });
})


module.exports = router;