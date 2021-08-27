'use strict';

let listaDuennos = [];
let cuerpoTabla = document.querySelector('#tbl-duennos tbody');

const inicializarListas = async() => {
    listaDuennos = await obtenerListaDatos('/listar-duennos');
    console.log(listaDuennos);
    mostrarTabla();
};
const mostrarTabla = async() => {
    cuerpoTabla.innerHTML = '';
    listaDuennos.forEach(duenno => {
        let fila = cuerpoTabla.insertRow();
        fila.insertCell().innerText = duenno.nombre;
        fila.insertCell().innerText = duenno.correo;
        fila.insertCell().innerText = duenno.contrasenna;
        fila.insertCell().innerText = duenno.estado;
        fila.insertCell().innerText = duenno.rol;
    });
};

inicializarListas();