const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

module.exports = router;
