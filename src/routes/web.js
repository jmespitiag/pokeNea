const express = require('express');
const router = express.Router();
const { show } = require('../controllers/PokeneaController');
const { os }  = require('../controllers/PokeneaController')

router.get('/pokenea/showJSON', (req, res) => {

    // Obtener el JSON utilizando la función showJSON del controlador
    const pokeneaJSON = show();

    // Enviar el JSON y el nombre del host como respuesta
    const responseData = { pokenea: pokeneaJSON, hostname: os.hostname() };

    // Enviar el objeto como respuesta
    res.json(responseData);
});

router.get('/pokenea/showView', (req, res) => {
    const pokeneaJSON = show()
    // Llamando a la función show del controlador y pasando el resultado como dato a la vista
    res.render('showView', {pokenea: pokeneaJSON, hostname: os.hostname()});
});

module.exports = router;
