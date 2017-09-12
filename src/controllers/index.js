const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

const home = require('./home');
const multichoice = require('./multichoice');
const choosequestion = require('./choosequestion');
const congratulations = require('./congratulations');
const summary = require('./summary');
const extract = require('./extract');
const intro = require('./intro');



router.get('/', home.get);
// included /:number to allow for random questions
router.get('/choosequestion', choosequestion.get);
router.get('/multichoice/:number', multichoice.get);
router.get('/summary', summary.get);
router.get('/intro/:number', intro.get);
router.get('/congratulations', congratulations.get);
router.get('/extract/:number', extract.get);
module.exports = router;
