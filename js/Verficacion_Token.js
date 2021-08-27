'use strict';

const botonEnviar = document.querySelector('#btn-enviar');
const inputCodigo = document.querySelector('#txt-codigo');


const obtenerCodigo = () => {

    validarCodigo(inputCodigo.value);
}

const validar = () => {
    let error = false;

    if (inputCodigo.value == '') {
        error = true;
        inputCodigo.classList.add('error');

    } else {
        inputCodigo.classList.remove('error');
    }

    if (error == true) {

        Swal.fire({
            icon: 'warning',
            title: 'No hay datos ingresados',
            text: 'Por favor revise los campos resaltados'
        });

    } else {
        obtenerCodigo();
    }

};




botonEnviar.addEventListener('click', validar);