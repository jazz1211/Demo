"use strict";
const botonIngresar = document.querySelector('#btn-registro');
const inputNombre = document.querySelector('#txt-nombre');
const inputApellido = document.querySelector('#txt-apellido');
const inputDatepicker = document.querySelector('#txt-datepicker');
const inputCorreo = document.querySelector('#txt-correo');
const inputTipoID = document.querySelector("#ids");
const inputNumID = document.querySelector("#txt-id");
const inputProvincia = document.querySelector("#provincia");
const inputContrasenna = document.querySelector("#txt-contrasenna");

/* BOTONES DEL NAV SUPERIOR */
const btnRegistro = document.querySelector('#button1');
const btnInicioSesion = document.querySelector('#button2');


const obtenerDatos = () => {
    //RETIRAR DESPUES DE LOS TESTES FINALES
    console.log(inputNombre.value);
    console.log(inputApellido.value);
    console.log(inputDatepicker.value);
    console.log(inputCorreo.value);
    console.log(inputTipoID.value);
    console.log(inputNumID.value);
    console.log(inputProvincia.value);
    console.log(inputContrasenna.value);

    let datos = {
        nombre: inputNombre.value,
        apellido: inputApellido.value,
        nacimiento: inputDatepicker.value,
        correo: inputCorreo.value,
        ID_tipo: inputTipoID.value,
        ID_numero: inputNumID.value,
        provincia_CR: inputProvincia.value,
        contrasenna: inputContrasenna.value,
        /*
        Estados
        1. Activo
        2. Inactivo
        3. Suspendido
        4. Pendiente de cambio de contraseña
        5. Pendiente de aprobación del administrador (solo para los dueños de restaurantes)
        Roles
        1. Administrador
        */
        estado: 1,
        rol: 1,
    };

    //LLAMAR A LA FUNCION SERVICIO-GENERAL.JS - AUTOMATIZAR
    registrarDatos(datos, '/registro-admin');

};
const validar = () => {
    let error = false;
    if (inputNombre.value == '') {
        error = true;
        inputNombre.classList.add('error-box');
    } else {
        inputNombre.classList.remove('error-box');
    };
    if (inputApellido.value == '') {
        error = true;
        inputApellido.classList.add('error-box');
    } else {
        inputApellido.classList.remove('error-box');
    };
    if (inputDatepicker.value == '') {
        error = true;
        inputDatepicker.classList.add('error-box');
    } else {
        inputDatepicker.classList.remove('error-box');
    };
    if (inputCorreo.value == '') {
        error = true;
        inputCorreo.classList.add('error-box');
    } else {
        inputCorreo.classList.remove('error-box');
    };
    if (inputTipoID.value == 'tipo-id-placeholder') {
        error = true;
        inputTipoID.classList.add('error-box');
    } else {
        inputTipoID.classList.remove('error-box');
    };
    if (inputNumID.value == '') {
        error = true;
        inputNumID.classList.add('error-box');
    } else {
        inputNumID.classList.remove('error-box');
    };
    if (inputProvincia.value == 'provincia-placeholder') {
        error = true;
        inputProvincia.classList.add('error-box');
    } else {
        inputProvincia.classList.remove('error-box');
    };
    if (inputContrasenna.value == '') {
        error = true;
        inputContrasenna.classList.add('error-box');
    } else {
        inputContrasenna.classList.remove('error-box');
    };

    console.log(error);
    if (error == true) {
        Swal.fire({
            icon: 'warning',
            title: 'Registro incorrecto',
            text: 'Ingrese sus datos correctamente'
        });
    } else {
        obtenerDatos();
        Swal.fire({
            icon: 'success',
            title: 'Registro exitoso',

        }).then(() => {
            window.location.href = 'Inicio_Sesion.html';
        });
    };
};

botonIngresar.addEventListener('click', validar);

/* BOTONES DEL NAV SUPERIOR */
btnRegistro.addEventListener('click', () => {
    window.location.href = 'quien-eres.html';
});

btnInicioSesion.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = 'Inicio_Sesion.html';
});