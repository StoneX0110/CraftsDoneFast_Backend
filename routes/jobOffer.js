const express = require('express');
const router = express.Router();

// Load Book model
const jobOfferModel = require('../models/JobOffer');

// @route GET api/books/test
// @description tests books route
// @access Public
// router.get('/test', function(req, res) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.send('job offer route testing!'));
// })
router.get('/test', function (req, res) {
    // res.header("Access-Control-Allow-Origin", "*");
    res.send('Hello World');
})

router.post('/insert', function (req, res) {
    const jobOffer = req.body;
    console.log(jobOffer);

    jobOfferModel(jobOffer).save((error) => {
        if (error) {
            console.log(error)
            res.send(error)
        } else {
            res.send('insert successful');
        }
    })
})

router.get('/myJobOffers', function (req, res){
    jobOfferModel.find({}).then(function (jobs) {
        // console.log(jobs);
        res.send(jobs);
    })
})

router.get('/:id', function (req, res) {
    // console.log(req.params.id);
     jobOfferModel.find({_id: req.params.id}).then(function (job) {
        //  console.log(job[0]);
         res.send(job[0]);
     })
})



module.exports = router;