'use strict';

// Llama la dependencia que hace como un puente entre la app (foodcourt) y la base de datos (mongoDB)
let mongoose = require('mongoose');

let schemaDuenno = new mongoose.Schema({
    //estes son los forms del HLML de registro de dueño.
    nombre: { type: String, unique: false, required: true },
    apellido: { type: String, unique: false, required: true },
    nacimiento: { type: Date, unique: false, required: true },
    correo: { type: String, unique: true, required: true },
    ID_tipo: { type: String, unique: false, required: true },
    ID_numero: { type: Number, unique: true, required: true },
    provincia_CR: { type: String, unique: false, required: true },
    nombre_comercial: { type: String, unique: false, required: true },
    nombre_comun: { type: String, unique: false, required: true },
    cedula_juridica: { type: Number, unique: true, required: true },
    contrasenna: { type: String, unique: false, required: true },
    estado: { type: Number, unique: false, required: true },
    rol: { type: Number, unique: false, required: true },
});

//LO DEL PARENTESIS SIGNIFICA ('nombre de instancia', el schema que va a crear el modelo, nombre de la coleccion)
module.exports = mongoose.model('Duenno', schemaDuenno, 'coleccionDuennos');