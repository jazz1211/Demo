'use strict';

const botonIngresar = document.querySelector('#btn-ingresar');
const inputCorreo = document.querySelector('#txt-idUsuario');
const inputContrasenna = document.querySelector('#txt-idContrasenna');
const botonVer = document.querySelector('#btn-ver');
const btnCrearCuenta = document.querySelector('#btn-cuenta');

const obtenerDatos = () => {
    validarCredenciales(inputCorreo.value, inputContrasenna.value);
};
const validar = () => {

    let error = false;


    if (inputCorreo.value == '') {
        error = true;
        inputCorreo.classList.add('error');
    } else {
        inputCorreo.classList.remove('error');
    }



    if (inputContrasenna.value == '') {
        error = true;
        inputContrasenna.classList.add('error');
    } else {
        inputContrasenna.classList.remove('error');
    }



    if (error == true) {
        Swal.fire({
            icon: 'warning',
            title: 'Inicio de sesión incorrecto',
            text: 'Por favor revise los campos resaltados'
        });
    } else {
        obtenerDatos();
    }

};

const verOcultarContrasenna = () => {
    if (inputContrasenna.type == 'password') {
        inputContrasenna.type = 'text';
    } else {
        inputContrasenna.type = 'password';
    }
};

const crearCuenta = () => {
    window.location.href = 'quien-eres.html';
}


botonIngresar.addEventListener('click', validar);
botonVer.addEventListener('click', verOcultarContrasenna);
btnCrearCuenta.addEventListener('click', crearCuenta);