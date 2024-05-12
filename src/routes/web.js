const express = require('express');
const router = express.Router();
const { showView } = require('../controllers/PokeneaController');
const { showJSON } = require('../controllers/PokeneaController');

router.get('/pokenea/showJSON', showJSON);

router.get('/pokenea/showView', (req, res) => {
    const pokeneaJSON = showView()
    // Llamando a la función show del controlador y pasando el resultado como dato a la vista
    res.render('showView', {pokenea: pokeneaJSON});
});

module.exports = router;
