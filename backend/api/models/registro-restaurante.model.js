'use strict';

// Llama la dependencia que hace como un puente entre la app (foodcourt) y la base de datos (mongoDB)
let mongoose = require('mongoose');

let schemaRestaurante = new mongoose.Schema({
    //estes son los forms del HLML de registro de Restaurante.
    nombre: { type: String, unique: true, required: true },
    nombre_comercial: { type: String, unique: false, required: true },
    cedula_juridica: { type: Number, unique: true, required: true },
    descripcion: { type: String, unique: false, required: true },
    telefono_1: { type: Number, unique: true, required: true },
    telefono_2: { type: Number, unique: true, required: false },
    correo: { type: String, unique: true, required: true },
    facebook_link: { type: String, unique: false, required: false },
    instagram_link: { type: String, unique: false, required: false },
    aforo_max: { type: Number, unique: false, required: true },
    geolocalizacion_CR: { type: String, unique: false, required: true },
    logo: { type: String, unique: false, required: false },
    provincia_CR: { type: String, unique: false, required: true },
    canton_CR: { type: String, unique: false, required: true },
    distrito_CR: { type: String, unique: false, required: true },
    //fotos: { type: String, unique: false, required: false },
    //DATOS DEL ENCARGADO
    nombre_completo: { type: String, unique: false, required: true },
    correo_encargado: { type: String, unique: false, required: true },
    //HORARIOS DE ATENCION
    horario_lunes_inicio: { type: String, unique: false, required: true },
    horario_lunes_cierre: { type: String, unique: false, required: true },
    horario_martes_inicio: { type: String, unique: false, required: true },
    horario_martes_cierre: { type: String, unique: false, required: true },
    horario_miercoles_inicio: { type: String, unique: false, required: true },
    horario_miercoles_cierre: { type: String, unique: false, required: true },
    horario_jueves_inicio: { type: String, unique: false, required: true },
    horario_jueves_cierre: { type: String, unique: false, required: true },
    horario_viernes_inicio: { type: String, unique: false, required: true },
    horario_viernes_cierre: { type: String, unique: false, required: true },
    horario_sabado_inicio: { type: String, unique: false, required: true },
    horario_sabado_cierre: { type: String, unique: false, required: true },
    horario_domingo_inicio: { type: String, unique: false, required: true },
    horario_domingo_cierre: { type: String, unique: false, required: true },
});

//LO DEL PARENTESIS SIGNIFICA ('nombre de instancia', el schema que va a crear el modelo, nombre de la coleccion)
module.exports = mongoose.model('Restaurante', schemaRestaurante, 'coleccionRestaurantes');