'use strict';

const botonIngresar = document.querySelector('#btn-registro');
const inputNombre = document.querySelector('#txt-nombre-restaurante');
const inputNombreComercial = document.querySelector('#txt-nombre-comercial');
const inputCedulajuridica = document.querySelector('#cedula-juridica');
const inputDescripcion = document.querySelector('#descripcion-restaurante');
const inputNumerocontacto1 = document.querySelector('#numero-contacto-1');
const inputNumerocontacto2 = document.querySelector('#numero-contacto-2');
const inputCorreo = document.querySelector('#correo-electronico');
const inputAforo = document.querySelector('#aforo');
const inputFacebook = document.querySelector('#facebook-restaurante');
const inputInstagram = document.querySelector('#instagram-restaurante');
const inputNombreEncargado = document.querySelector('#nombre-encargado');
const inputCorreo2 = document.querySelector('#correo-electronico2');
const inputProvincia = document.querySelector("#provincia");
const inputCanton = document.querySelector('#canton');
const inputDistrito = document.querySelector('#distrito');
const inputUbicacion = document.querySelector('#ubicacion');
const inputLogo = document.querySelector('#output');
//const inputFotos = document.querySelector('#'),
const inputMonday1 = document.querySelector('#monday1');
const inputMonday2 = document.querySelector('#monday2');
const inputTuesday1 = document.querySelector('#tuesday1');
const inputTuesday2 = document.querySelector('#tuesday2');
const inputWednesday1 = document.querySelector('#wednesday1');
const inputWednesday2 = document.querySelector('#wednesday2');
const inputThursday1 = document.querySelector('#thursday1');
const inputThursday2 = document.querySelector('#thursday2');
const inputFriday1 = document.querySelector('#friday1');
const inputFriday2 = document.querySelector('#friday2');
const inputSaturday1 = document.querySelector('#saturday1');
const inputSaturday2 = document.querySelector('#saturday2');
const inputSunday1 = document.querySelector('#sunday1');
const inputSunday2 = document.querySelector('#sunday2');

const obtenerDatos = () => {
    let datos = {
        nombre: inputNombre.value,
        nombre_comercial: inputNombreComercial.value,
        cedula_juridica: inputCedulajuridica.value,
        descripcion: inputDescripcion.value,
        telefono_1: inputNumerocontacto1.value,
        telefono_2: inputNumerocontacto2.value,
        correo: inputCorreo.value,
        facebook_link: inputFacebook.value,
        instagram_link: inputInstagram.value,
        aforo_max: inputAforo.value,
        geolocalizacion_CR: inputUbicacion.value,
        logo: inputLogo.value,
        //fotos: XXX.value,
        provincia_CR: inputProvincia.value,
        canton_CR: inputCanton.value,
        distrito_CR: inputDistrito.value,
        //DATOS DEL ENCARGADO
        nombre_completo: inputNombreEncargado.value,
        correo_encargado: inputCorreo2.value,
        //HORARIOS DE ATENCION
        horario_lunes_inicio: inputMonday1.value,
        horario_lunes_cierre: inputMonday2.value,
        horario_martes_inicio: inputTuesday1.value,
        horario_martes_cierre: inputTuesday2.value,
        horario_miercoles_inicio: inputWednesday1.value,
        horario_miercoles_cierre: inputWednesday2.value,
        horario_jueves_inicio: inputThursday1.value,
        horario_jueves_cierre: inputThursday2.value,
        horario_viernes_inicio: inputFriday1.value,
        horario_viernes_cierre: inputFriday2.value,
        horario_sabado_inicio: inputSaturday1.value,
        horario_sabado_cierre: inputSaturday2.value,
        horario_domingo_inicio: inputSunday1.value,
        horario_domingo_cierre: inputSunday1.value,
    };
    //LLAMAR A LA FUNCION SERVICIO-GENERAL.JS - AUTOMATIZAR
    registrarDatos(datos, '/registro-restaurante');
};

const validar = () => {
    let error = false;

    if (localStorage.length == 0) {
        Swal.fire({
            icon: 'warning',
            title: 'Usuario no conectado',
            text: 'Inicie sesión para registrar un restaurante.'
        }).then(() => {
            window.location.href = 'Inicio_Sesion.html'

        });
    } else {
        if (inputNombreComercial.value == '') {
            error = true;
            inputNombreComercial.classList.add('error-box');
        } else {
            inputNombreComercial.classList.remove('error-box');
        };
        if (inputNombre.value == '') {
            error = true;
            inputNombre.classList.add('error-box');
        } else {
            inputNombre.classList.remove('error-box');
        };
        if (inputCedulajuridica.value == '') {
            error = true;
            inputCedulajuridica.classList.add('error-box');
        } else {
            inputCedulajuridica.classList.remove('error-box');
        };
        if (inputDescripcion.value == '') {
            error = true;
            inputDescripcion.classList.add('error-box');
        } else {
            inputDescripcion.classList.remove('error-box');
        };
        if (inputNumerocontacto1.value == '') {
            error = true;
            inputNumerocontacto1.classList.add('error-box');
        } else {
            inputNumerocontacto1.classList.remove('error-box');

        };
        /*
        if (inputNumerocontacto2.value == '') {
            error = true;
            inputNumerocontacto2.classList.add('error-box');
        } else {
            inputNumerocontacto2.classList.remove('error-box');
        }
        */
        if (inputCorreo.value == '') {
            error = true;
            inputCorreo.classList.add('error-box');
        } else {
            inputCorreo.classList.remove('error-box');
        };
        if (inputAforo.value == '') {
            error = true;
            inputAforo.classList.add('error-box');
        } else {
            inputAforo.classList.remove('error-box');
        };

        if (inputFacebook.value == '') {
            error = true;
            inputFacebook.classList.add('error-box');
        } else {
            inputFacebook.classList.remove('error-box');
        };
        if (inputInstagram.value == '') {
            error = true;
            inputInstagram.classList.add('error-box');
        } else {
            inputInstagram.classList.remove('error-box');
        };
        if (inputNombreEncargado.value == '') {
            error = true;
            inputNombreEncargado.classList.add('error-box');
        } else {
            inputNombreEncargado.classList.remove('error-box');

        };
        if (inputCorreo2.value == '') {
            error = true;
            inputCorreo2.classList.add('error-box');
        } else {
            inputCorreo2.classList.remove('error-box');

        };
        if (inputProvincia.value == 'provincia-placeholder') {
            error = true;
            inputProvincia.classList.add('error-box');
        } else {
            inputProvincia.classList.remove('error-box');
        };
        if (inputCanton.value == '') {
            error = true;
            inputCanton.classList.add('error-box');
        } else {
            inputCanton.classList.remove('error-box');
        };
        if (inputDistrito.value == '') {
            error = true;
            inputDistrito.classList.add('error-box');
        } else {
            inputDistrito.classList.remove('error-box');
        };
        if (inputUbicacion.value == '') {
            error = true;
            inputUbicacion.classList.add('error-box');
        } else {
            inputUbicacion.classList.remove('error-box');
        };
        if (inputMonday1.value == '') {
            error = true;
            inputMonday1.classList.add('error-box');
        } else {
            inputMonday1.classList.remove('error-box');
        };
        if (inputMonday2.value == '') {
            error = true;
            inputMonday2.classList.add('error-box');
        } else {
            inputMonday2.classList.remove('error-box');
        };
        if (inputTuesday1.value == '') {
            error = true;
            inputTuesday1.classList.add('error-box');
        } else {
            inputTuesday1.classList.remove('error-box');
        };
        if (inputTuesday2.value == '') {
            error = true;
            inputTuesday2.classList.add('error-box');
        } else {
            inputTuesday2.classList.remove('error-box');
        };
        if (inputWednesday1.value == '') {
            error = true;
            inputWednesday1.classList.add('error-box');
        } else {
            inputWednesday1.classList.remove('error-box');
        };
        if (inputWednesday2.value == '') {
            error = true;
            inputWednesday2.classList.add('error-box');
        } else {
            inputWednesday2.classList.remove('error-box');
        };
        if (inputThursday1.value == '') {
            error = true;
            inputThursday1.classList.add('error-box');
        } else {
            inputThursday1.classList.remove('error-box');

        };
        if (inputThursday2.value == '') {
            error = true;
            inputThursday2.classList.add('error-box');
        } else {
            inputThursday2.classList.remove('error-box');
        };
        if (inputFriday1.value == '') {
            error = true;
            inputFriday1.classList.add('error-box');
        } else {
            inputFriday1.classList.remove('error-box');
        };
        if (inputFriday2.value == '') {
            error = true;
            inputFriday2.classList.add('error-box');
        } else {
            inputFriday2.classList.remove('error-box');
        }
        if (inputSaturday1.value == '') {
            error = true;
            inputSaturday1.classList.add('error-box');
        } else {
            inputSaturday1.classList.remove('error-box');
        };
        if (inputSaturday2.value == '') {
            error = true;
            inputSaturday2.classList.add('error-box');
        } else {
            inputSaturday2.classList.remove('error-box');
        };
        if (inputSunday1.value == '') {
            error = true;
            inputSunday1.classList.add('error-box');
        } else {
            inputSunday1.classList.remove('error-box');
        }
        if (inputSunday2.value == '') {
            error = true;
            inputSunday2.classList.add('error-box');
        } else {
            inputSunday2.classList.remove('error-box');
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
                let usuarioConectadoString = localStorage.getItem("usuarioConectado");
                let usuarioConectado = JSON.parse(usuarioConectadoString);

                if (usuarioConectado.rol == 1) {
                    window.location.href = 'home-admin.html'
                    return
                }
                if (usuarioConectado.rol == 2) {
                    window.location.href = 'home-dueno.html';
                    return
                }
                if (usuarioConectado.rol == 3) {
                    window.location.href = 'home-encargado.html';
                    return
                }
                if (usuarioConectado.rol == 4) {
                    window.location.href = 'index-usuario.html';
                    return
                }
            });
        }
    };
};
botonIngresar.addEventListener('click', validar);