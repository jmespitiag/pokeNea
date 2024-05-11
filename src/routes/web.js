const express = require('express');
const router = express.Router();
const { show } = require('../controllers/PokeneaController');

router.get('/pokenea/showJSON', show);

router.get('/pokenea/showView', show);



module.exports = router;