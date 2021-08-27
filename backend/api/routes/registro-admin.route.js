'use strict';
const express = require('express');
const admin = require('../models/registro-admin.model');
const router = express.Router();

//http://localhost:3000/api/registro-admin
router.post('/registro-admin', (req, res) => {
    let nuevoAdmin = new admin({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        nacimiento: req.body.nacimiento,
        correo: req.body.correo,
        ID_tipo: req.body.ID_tipo,
        ID_numero: req.body.ID_numero,
        provincia_CR: req.body.provincia_CR,
        contrasenna: req.body.contrasenna,
        estado: req.body.estado,
        rol: req.body.rol,

    });
    nuevoAdmin.save(error => {
        if (error) {
            res.json({
                error: error,
            });
        } else {
            res.json({
                msj: 'El admin se registró con éxito.'
            });
        };
    });
});

//http://localhost:3000/api/listar-admins
router.get('/listar-admins', (req, res) => {
    admin.find((error, lista) => {
        if (error) {
            res.json({
                error: error,
            });
        } else {
            res.json({
                msj: 'Admins listados correctamente.',
                lista: lista,
            })
        }
    });

});


module.exports = router;