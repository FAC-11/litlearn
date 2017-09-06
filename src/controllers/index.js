const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

const home = require('./home');
const multichoice = require('./multichoice');


router.get('/', home.get);
// included /:number to allow for random questions
router.get('/multichoice/:number', multichoice.get);
module.exports = router;
