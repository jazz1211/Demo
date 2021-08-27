'use strict';

const registrarDatos = async(pdatos, pendpoint) => {

    let url = 'http://localhost:3000/api' + pendpoint;
    await axios({
        method: 'post',
        url: url,
        data: pdatos,
    });

};

const obtenerListaDatos = async(pendpoint) => {
    let listaDatos = [];
    let url = 'http://localhost:3000/api' + pendpoint;

    await axios({
        method: 'get',
        url: url,
        responseType: 'json',
    }).then(response => {
        listaDatos = response.data.lista;
    })
    return listaDatos;
};