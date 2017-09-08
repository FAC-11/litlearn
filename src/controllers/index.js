const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

const home = require('./home');
const multichoice = require('./multichoice');
const congratulations = require('./congratulations');
const summary = require('./summary');


router.get('/', home.get);
// included /:number to allow for random questions
router.get('/multichoice/:number', multichoice.get);
router.get('/summary', summary.get);
router.get('/congratulations', congratulations.get);
module.exports = router;
