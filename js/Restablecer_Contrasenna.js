'use strict';

const botonEnviar = document.querySelector('#btn-enviar');
const inputCorreo = document.querySelector('#txt-usuario');

const obtenerDatos = () => {

    validarCorreo(inputCorreo.value);
};


const validar = () => {

    let error = false;

    if (inputCorreo.value == '') {
        error = true;
        inputCorreo.classList.add('error');

    } else {
        inputCorreo.classList.remove('error');
    }



    if (error == true) {

        Swal.fire({
            icon: 'warning',
            title: 'No hay datos ingresados',
            text: 'Por favor revise los campos resaltados'
        });

    } else {
        obtenerDatos();
    }

};

function generarCodigo(length) {

    var resultado = '';
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var caracteresLength = caracteres.length;
    for (var i = 0; i < length; i++) {
        resultado += caracteres.charAt(Math.floor(Math.random() * caracteresLength));
    }
    return resultado;

}


botonEnviar.addEventListener('click', validar);