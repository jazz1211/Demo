'use strict';
const express = require('express');
const Restaurante = require('../models/registro-restaurante.model');
const router = express.Router();

//http://localhost:3000/api/registro-restaurante
router.post('/registro-restaurante', (req, res) => {
    let nuevoRestaurante = new Restaurante({
        nombre: req.body.nombre,
        nombre_comercial: req.body.nombre_comercial,
        cedula_juridica: req.body.cedula_juridica,
        descripcion: req.body.descripcion,
        telefono_1: req.body.telefono_1,
        telefono_2: req.body.telefono_2,
        correo: req.body.correo,
        facebook_link: req.body.facebook_link,
        instagram_link: req.body.instagram_link,
        aforo_max: req.body.aforo_max,
        geolocalizacion_CR: req.body.geolocalizacion_CR,
        logo: req.body.logo,
        provincia_CR: req.body.provincia_CR,
        canton_CR: req.body.canton_CR,
        distrito_CR: req.body.distrito_CR,
        //fotos: req.body.fotos,
        //DATOS DEL ENCARGADO
        nombre_completo: req.body.nombre_completo,
        correo_encargado: req.body.correo_encargado,
        //HORARIOS DE ATENCION
        horario_lunes_inicio: req.body.horario_lunes_inicio,
        horario_lunes_cierre: req.body.horario_lunes_cierre,
        horario_martes_inicio: req.body.horario_martes_inicio,
        horario_martes_cierre: req.body.horario_martes_inicio,
        horario_miercoles_inicio: req.body.horario_miercoles_inicio,
        horario_miercoles_cierre: req.body.horario_miercoles_cierre,
        horario_jueves_inicio: req.body.horario_jueves_inicio,
        horario_jueves_cierre: req.body.horario_jueves_cierre,
        horario_viernes_inicio: req.body.horario_viernes_inicio,
        horario_viernes_cierre: req.body.horario_viernes_cierre,
        horario_sabado_inicio: req.body.horario_sabado_inicio,
        horario_sabado_cierre: req.body.horario_sabado_cierre,
        horario_domingo_inicio: req.body.horario_domingo_inicio,
        horario_domingo_cierre: req.body.horario_domingo_cierre,

    });
    nuevoRestaurante.save(error => {
        if (error) {
            res.json({
                error: error,
            });
        } else {
            res.json({
                msj: 'El restaurante se registró con éxito.'
            });
        };
    });
});

//http://localhost:3000/api/listar-restaurantes
router.get('/listar-restaurantes', (req, res) => {
    Restaurante.find((error, lista) => {
        if (error) {
            res.json({
                error: error,
            });
        } else {
            res.json({
                msj: 'Restaurantes listados correctamente.',
                lista: lista,
            })
        }
    });

});


module.exports = router;