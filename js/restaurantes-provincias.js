'use strict';

const provinciaSinDatos = document.querySelectorAll('.sin-datos');

provinciaSinDatos.forEach(objProvincia => {
    objProvincia.addEventListener('click', function() {
        Swal.fire({
            icon: 'error',
            title: 'Página en construcción.',
            text: 'Vuelva a intentarlo pronto. Lo sentimos.',
        });
    });
});