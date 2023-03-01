const express = require('express');
const router = express.Router();

const toyController = require('../app/controllers/ToyController');

router.get('/:toyID', toyController.show);

module.exports = router;