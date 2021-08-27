'use strict';
const express = require('express');
const cliente = require('../models/registro-cliente.model');
const router = express.Router();

//http://localhost:3000/api/registro-cliente
router.post('/registro-cliente', (req, res) => {
    let nuevoCliente = new cliente({
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
    nuevoCliente.save(error => {
        if (error) {
            res.json({
                error: error,
            });
        } else {
            res.json({
                msj: 'El cliente se registró con éxito.'
            });
        };
    });
});

//http://localhost:3000/api/listar-clientes
router.get('/listar-clientes', (req, res) => {
    cliente.find((error, lista) => {
        if (error) {
            res.json({
                error: error,
            });
        } else {
            res.json({
                msj: 'Clientes listados correctamente.',
                lista: lista,
            })
        }
    });

});


module.exports = router;