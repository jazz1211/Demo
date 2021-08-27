'use strict';


const botonPublicar = document.querySelector('#btn-registro-platillo');
const inputNombrePlatillo = document.querySelector('#txt-nombre-platillo');
const inputDescripcion = document.querySelector('#txt-descripcion-platillo');
const inputPrecio = document.querySelector('#txt-precio');


const obtenerDatos = () => {
    console.log(inputNombrePlatillo.value);
    console.log(inputDescripcion.value);
    console.log(inputPrecio.value);

};
const validar = () => {
    let error = false;
    if (inputNombrePlatillo.value == '') {
        error = true;
        inputNombrePlatillo.classList.add('error');
    } else {
        inputNombrePlatillo.classList.remove('error');
    }
    if (inputDescripcion.value == '') {
        error = true;
        inputDescripcion.classList.add('error');
    } else {
        inputDescripcion.classList.remove('error');
    }

    if (error == true) {
        swal("Oops!", "Something went wrong, you should choose again!", "error");
        Swal.fire({
            title: "<i>Title</i>",
            html: "Testno  sporocilo za objekt: <b>test</b>",
            confirmButtonText: "V <u>redu</u>",
        });
    } else {
        obtenerDatos();
        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: `Save`,
            denyButtonText: `Don't save`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        });
    }
};

botonPublicar.addEventListener('click', validar);