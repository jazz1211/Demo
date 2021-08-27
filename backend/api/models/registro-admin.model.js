'use strict';

// Llama la dependencia que hace como un puente entre la app (foodcourt) y la base de datos (mongoDB)
let mongoose = require('mongoose');

let schemaAdmin = new mongoose.Schema({
    nombre: { type: String, unique: false, required: true },
    apellido: { type: String, unique: false, required: true },
    nacimiento: { type: Date, unique: false, required: false },
    correo: { type: String, unique: true, required: true },
    ID_tipo: { type: String, unique: false, required: true },
    ID_numero: { type: Number, unique: true, required: true },
    provincia_CR: { type: String, unique: false, required: false },
    contrasenna: { type: String, unique: false, required: true },
    estado: { type: Number, unique: false, required: true },
    rol: { type: Number, unique: false, required: true },
});

//LO DEL PARENTESIS SIGNIFICA ('nombre de instancia', el schema que va a crear el modelo, nombre de la coleccion)
module.exports = mongoose.model('Admin', schemaAdmin, 'coleccionAdmins');