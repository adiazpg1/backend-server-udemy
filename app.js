// Requires - Importacion de librerias 
var express = require('express');
var mongoose = require('mongoose');

// Inicializar variables
var app = express();


// COnexion a la base de datos

mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, resp) => {
    if(err) throw err;

    console.log('Conexion exitosa')
});




// Rutas 
app.get('/', (req, res, next ) => {
    res.status(200).json( {
        ok: true,
        message: 'Peticion realizada correctamente'
    })
})

// Escuchar peticiones

app.listen(3000), () => {
    console.log('Servidor funcionando');
};
