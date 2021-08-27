'use strict';
const express = require('express');
const Duenno = require('../models/registro-duenno.model.js');
const router = express.Router();

//http://localhost:3000/api/registro-duenno
router.post('/registro-duenno', (req, res) => {
    let nuevoDuenno = new Duenno({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        nacimiento: req.body.nacimiento,
        correo: req.body.correo,
        ID_tipo: req.body.ID_tipo,
        ID_numero: req.body.ID_numero,
        provincia_CR: req.body.provincia_CR,
        cedula_juridica: req.body.cedula_juridica,
        nombre_comercial: req.body.nombre_comercial,
        nombre_comun: req.body.nombre_comun,
        contrasenna: req.body.contrasenna,
        estado: req.body.estado,
        rol: req.body.rol,

    });
    nuevoDuenno.save(error => {
        if (error) {
            res.json({
                error: error,
            });
        } else {
            res.json({
                msj: 'El usuario se registró con éxito.'
            });
        };
    });
});

//http://localhost:3000/api/listar-duennos
router.get('/listar-duennos', (req, res) => {
    Duenno.find((error, lista) => {
        if (error) {
            res.json({
                error: error,
            });
        } else {
            res.json({
                msj: 'Usuarios listados correctamente.',
                lista: lista,
            })
        }
    });

});


module.exports = router;