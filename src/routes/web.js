const express = require('express');
const router = express.Router();
const { helloWorld } = require('../controllers/PokeneaController');

router.get('/', helloWorld);

module.exports = router;