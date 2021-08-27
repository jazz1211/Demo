'use strict';

const botonIngresar = document.querySelector('#btn-registro');
const inputContrasenna = document.querySelector('#txt-contrasenna');
const inputTipoID = document.querySelector("#ids");
const inputId = document.querySelector('#txt-id');
const inputProvincia = document.querySelector("#provincia");
const inputNumerotarjeta = document.querySelector('#txt-numero-tarjeta');
const inputDatepicker = document.querySelector('#txt-datepicker');
const inputTarjetabiente = document.querySelector('#txt-tarjetabiente');
const botonVer = document.querySelector('#btn-ver');

const obtenerDatos = () => {
    console.log(inputContrasenna.value);
    console.log(inputTipoID.value);
    console.log(inputDatepicker.value);
    console.log(inputId.value);
    console.log(inputProvincia.value);
    console.log(inputNumerotarjeta.value);
    console.log(inputTarjetabiente.value);
};
const validar = () => {
    let error = false;
    if (inputContrasenna.value == '') {
        error = true;
        inputContrasenna.classList.add('error-box');
    } else {
        inputContrasenna.classList.remove('error-box');
    };
    if (inputTipoID.value == 'tipo-id-placeholder') {
        error = true;
        inputTipoID.classList.add('error-box');
    } else {
        inputTipoID.classList.remove('error-box');
    };
    if (inputId.value == '') {
        error = true;
        inputId.classList.add('error-box');
    } else {
        inputId.classList.remove('error-box');

    };
    if (inputProvincia.value == 'provincia-placeholder') {
        error = true;
        inputProvincia.classList.add('error-box');
    } else {
        inputProvincia.classList.remove('error-box');
    };
    if (inputNumerotarjeta.value == '') {
        error = true;
        inputNumerotarjeta.classList.add('error-box');
    } else {
        inputNumerotarjeta.classList.remove('error-box');
    };
    if (inputTarjetabiente.value == '') {
        error = true;
        inputTarjetabiente.classList.add('error-box');
    } else {
        inputTarjetabiente.classList.remove('error-box');
    };
    if (inputDatepicker.value == '') {
        error = true;
        inputDatepicker.classList.add('error-box');
    } else {
        inputDatepicker.classList.remove('error-box');
    };
    console.log(error);

    if (error == true) {
        Swal.fire({
            icon: 'warning',
            title: 'Registro incorrecto',
            text: 'Ingrese sus datos correctamente'
        });
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Registro exitoso',

        }).then(() => {
            window.location.href = 'index-usuario.html';


        });
        obtenerDatos();

    }
};

botonIngresar.addEventListener('click', validar);