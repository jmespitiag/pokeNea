const pokeneas = require('../utils/pokenea');


const show = (req, res) => {

    const indiceAleatorio = Math.floor(Math.random() * pokeneas.length)
    const pokeneaAleatorio = pokeneas[indiceAleatorio];

    res.json(pokeneaAleatorio)
    
};

module.exports = { show };