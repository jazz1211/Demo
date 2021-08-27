"use strict";

const btnComprarPlatillo = document.querySelectorAll('.btn-comprar-platillo');
const horarioFuncionamento = document.getElementById('horario-atencion');
const mensajePaginaConstruccion = document.querySelectorAll('.alerta-en-construccion');

const abrirCarrito = () => {

    Swal.fire({
        icon: 'success',
        title: 'Pedido efectuado!',
        text: `Haga click en 'OK' para abrir su carrito de compras.`
    }).then(() => {
        window.location.href = '/html/proceso-pago.html';
    });
}

btnComprarPlatillo.forEach(btn => {
    btn.addEventListener('click', abrirCarrito)
})

let cardHorarios = () => {
    Swal.fire({
        icon: 'info',
        title: 'Horarios de atención:',
        html: '<div>Lunes: 11h - 21h.<br>Martes: 11h - 21h.<br>Miércoles: 11h - 21h.<br>Jueves: 11h - 21h.<br>Viernes: 11h - 21h.<br>Sábado: 11h - 21h.<br>Domingo: 11h - 21h.</div>'
    });
}
horarioFuncionamento.addEventListener('click', cardHorarios)

const mensajeErroConstruccion = () => {
    Swal.fire({
        icon: 'error',
        title: 'Esta página está en construcción',
        text: 'Por favor, vuelva a intentarlo pronto.',
    });
}
mensajePaginaConstruccion.forEach(link => {
    link.addEventListener('click', mensajeErroConstruccion)
})