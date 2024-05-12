const pokeneas = require('../utils/pokenea');


const showJSON = (req, res) => {

    const indiceAleatorio = Math.floor(Math.random() * pokeneas.length)
    const pokeneaAleatorio = pokeneas[indiceAleatorio];

    res.json(pokeneaAleatorio);
    
};

const showView = () => {

    const indiceAleatorio = Math.floor(Math.random() * pokeneas.length)
    const pokeneaAleatorio = pokeneas[indiceAleatorio];

    return pokeneaAleatorio;
    
};

module.exports = { showView, showJSON };