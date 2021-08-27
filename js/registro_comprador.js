'use strict';

const botonIngresar = document.querySelector('#btn-registro');
const inputCorreo = document.querySelector('#txt-correo');
const inputNombre = document.querySelector('#txt-nombre');
const inputApellido = document.querySelector('#txt-apellido');
const inputDatepicker = document.querySelector('#txt-datepicker');

const obtenerDatos = () => {
    console.log(inputNombre.value);
    console.log(inputApellido.value);
    console.log(inputCorreo.value);
    console.log(inputDatepicker.value);

    let datos = {
        nombre: inputNombre.value,
        apellido: inputApellido.value,
        nacimiento: inputDatepicker.value,
        correo: inputCorreo.value,
        contrasenna: 'placeholder',
        /*
        Estados
        1. Activo
        2. Inactivo
        3. Suspendido
        4. Pendiente de cambio de contraseña
        5. Pendiente de aprobación del administrador (solo para los dueños de restaurantes)
        Roles
        2. Dueño de restaurantes
        */
        estado: 1,
        rol: 4,
    };

    //LLAMAR A LA FUNCION SERVICIO-GENERAL.JS - AUTOMATIZAR
    registrarDatos(datos, '/registro-cliente');

};
const validar = () => {
    let error = false;
    if (inputNombre.value == '') {
        error = true;
        inputNombre.classList.add('error-box');
    } else {
        inputNombre.classList.remove('error-box');
    }
    if (inputApellido.value == '') {
        error = true;
        inputApellido.classList.add('error-box');
    } else {
        inputApellido.classList.remove('error-box');
    }
    if (inputCorreo.value == '') {
        error = true;
        inputCorreo.classList.add('error-box');
    } else {
        inputCorreo.classList.remove('error-box');
    }
    if (inputDatepicker.value == '') {
        error = true;
        inputDatepicker.classList.add('error-box');
    } else {
        inputDatepicker.classList.remove('error-box');
    }
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
            window.location.href = 'registro_comprador_2.html';


        });
        obtenerDatos();

    }
};

botonIngresar.addEventListener('click', validar);