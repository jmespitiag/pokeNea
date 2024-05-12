const express = require('express');
const app = express();
const port = 3000;
const path = require('path');



// Importar las rutas
const indexRouter = require('./routes/web');

// Importar la configuración del motor de plantillas desde config.js
const { configureApp } = require('./config');

// Configurar las vistas
configureApp(app);

// Usar las rutas
app.use('/', indexRouter);
// Configuración para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});