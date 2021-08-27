'use strict';
const express = require('express');
const Encargado = require('../models/registro-encargado.model.js');
const router = express.Router();

//http://localhost:3000/api/registro-encargado
router.post('/registro-encargado', (req, res) => {
    let nuevoEncargado = new Encargado({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        nacimiento: req.body.nacimiento,
        ID_tipo: req.body.ID_tipo,
        ID_numero: req.body.ID_numero,
        provincia_CR: req.body.provincia_CR,
        correo: req.body.correo,
        contrasenna: req.body.contrasenna,
        estado: req.body.estado,
        rol: req.body.rol,

    });
    nuevoEncargado.save(error => {
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

//http://localhost:3000/api/listar-encargados
router.get('/listar-encargados', (req, res) => {
    Encargado.find((error, lista) => {
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