'use strict';



const botonIngresar = document.querySelector('#btn-registro-platillo');
const inputNombre = document.querySelector('#txt-nombre-platillo');
const inputTipoID = document.querySelector("#ids");
const inputMenu = document.querySelector("#menu");
const inputDescripcion = document.querySelector('#txt-descripcion-platillo');
const inputPrecio = document.querySelector('#txt-precio');


const obtenerDatos = () => {
    console.log(inputNombre.value);
    console.log(inputDescripcion.value);
    console.log(inputPrecio.value);
    console.log(inputTipoID.value);
    console.log(inputMenu.value);


};
const validar = () => {
    let error = false;
    if (inputNombre.value == '') {
        error = true;
        inputNombre.classList.add('error-box');
    } else {
        inputNombre.classList.remove('error-box');

    };
    if (inputDescripcion.value == '') {
        error = true;
        inputDescripcion.classList.add('error-box');
    } else {
        inputDescripcion.classList.remove('error-box');
    };
    if (inputPrecio.value == '') {
        error = true;
        inputPrecio.classList.add('error-box');
    } else {
        inputPrecio.classList.remove('error-box');
    };
    if (inputTipoID.value == 'tipo-id-placeholder') {
        error = true;
        inputTipoID.classList.add('error-box');
    } else {
        inputTipoID.classList.remove('error-box');
    };
    if (inputMenu.value == 'tipo-id-placeholder') {
        error = true;
        inputMenu.classList.add('error-box');
    } else {
        inputMenu.classList.remove('error-box');
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
            window.location.href = 'home-encargado.html';


        });
        obtenerDatos();

    }
};

botonIngresar.addEventListener('click', validar /*obtenerDatos*/ );