'use strict';

const botonRegistromenu = document.querySelector('#btn-registro');
const inputNombremenu = document.querySelector('#txt-nombre-menu');
const inputDescripcionmenu = document.querySelector('#txt-descripcion-menu');

const obtenerDatos = () => {
    console.log(inputNombremenu.value);
    console.log(inputDescripcionmenu.value);
};
const validar = () => {
    let error = false;
    if (inputNombremenu.value == '') {
        error = true;
        inputNombremenu.classList.add('error-box');
    } else {
        inputNombremenu.classList.remove('error-box');
    }

    if (inputDescripcionmenu.classList.value == '') {
        error = true;
        inputDescripcionmenu.classList.add('error-box');
    } else {
        inputDescripcionmenu.classList.remove('error-box');
    }

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

botonRegistromenu.addEventListener('click', validar);