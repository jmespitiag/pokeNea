const path = require('path');

function configureApp(app) {
    // Configuración del motor de plantillas EJS
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'views'));
}

module.exports = {
    configureApp
};
