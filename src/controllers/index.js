const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

const home = require('./home');
const multichoice = require('./multichoice');
const explain = require('./explain');
const choosequestion = require('./choosequestion');
const congratulations = require('./congratulations');
const summary = require('./summary');
const extract = require('./extract');
const intro = require('./intro');



router.get('/', home.get);
// included /:number to allow for random questions
router.get('/choosequestion', choosequestion.get);
router.get('/multichoice/', multichoice.get);
router.get('/explain/', explain.get);
router.get('/summary', summary.get);
router.get('/intro/:number', intro.get);
router.get('/congratulations', congratulations.get);
router.get('/extract/', extract.get);
module.exports = router;
