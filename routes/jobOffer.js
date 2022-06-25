const express = require('express');
const router = express.Router();
const authJwt = require('../authentication/auth');
const verifyToken = authJwt.verifyToken;
// Load Book model
const jobOfferModel = require('../models/JobOffer');

const {getMatchingJobOffers, getMatchingJobOffersInRange,getMyJobOffers, getJobOffer, insertJobOffer,getRecentJobOffers, updateJobOffer, deleteJobOffer} = require('../controllers/jobOffer.js');

router.get('/test', function (req, res) {
    res.send('Hello World');
})

router.route('/insert').post([verifyToken], insertJobOffer);

router.route('/recentJobOffers').get(getRecentJobOffers);

router.route('/matchingJobOffers').get(getMatchingJobOffers);

router.route('/matchingJobOffersInRange').get(getMatchingJobOffersInRange);

router.route('/myJobOffers').get([verifyToken], getMyJobOffers);

router.get('/:id', getJobOffer);

router.route('/update').post([verifyToken], updateJobOffer);

router.route('/delete/:id').delete([verifyToken], deleteJobOffer)


module.exports = router;