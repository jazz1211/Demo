'use strict';

let listaUsuarios = [];
let cuerpoTabla = document.querySelector('#tbl-usuarios tbody');

const inicializarListas = async() => {
    let listaAdmins = await obtenerListaDatos('/listar-admins');
    let listaDuennos = await obtenerListaDatos('/listar-duennos');
    let listaEncargados = await obtenerListaDatos('/listar-encargados');
    let listaClientes = await obtenerListaDatos('/listar-clientes');

    listaUsuarios = listaAdmins.concat(listaDuennos, listaEncargados, listaClientes);
    mostrarTabla();
};

const mostrarTabla = async() => {
    cuerpoTabla.innerHTML = '';

    listaUsuarios.forEach(usuario => {

        let fila = cuerpoTabla.insertRow();

        fila.insertCell().innerText = usuario.nombre;
        fila.insertCell().innerText = usuario.correo;
        fila.insertCell().innerText = usuario.nacimiento;
    });

};
inicializarListas();
btnUsuario.addEventListener('click', abrirPerfilUsuario);

const cerrarSesion = () => {
    localStorage.clear();
    window.location.href = 'Inicio_Sesion.html';
};

btnSalir.addEventListener('click', cerrarSesion);


