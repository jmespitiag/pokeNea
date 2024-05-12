const pokeneas = require('../utils/pokenea');
const os = require("os")

const show = () => {

    const indiceAleatorio = Math.floor(Math.random() * pokeneas.length)
    const pokeneaAleatorio = pokeneas[indiceAleatorio];

    return pokeneaAleatorio;
    
};

module.exports = { show, os };