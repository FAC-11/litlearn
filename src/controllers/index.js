const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

const home = require('./home');
const multichoice = require('./multichoice');
const congratulations = require('./congratulations');
const extract = require('./extract');


router.get('/', home.get);
// included /:number to allow for random questions
router.get('/multichoice/:number', multichoice.get);
router.get('/congratulations', congratulations.get);
router.get('/extract', extract.get);
module.exports = router;
