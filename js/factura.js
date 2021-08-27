"use strict";

const ivaFraccion = (13 / 100);
let cantidadProducto = document.getElementById('cantidad-actual-producto');
let nombrePlatillo = document.getElementById('nombre-platillo');
let precioProducto = document.getElementById('precio-producto-total');
let subtotalMiniFactura = document.getElementById('mini-factura-subtotal');
let ivaMiniFactura = document.getElementById('mini-factura-iva');
let totalMiniFactura = document.getElementById('mini-factura-total');

console.log(`Plato: ${nombrePlatillo.innerHTML}`);
console.log(`Precio: ${precioProducto.innerHTML}`);
console.log(`Cantidad: ${cantidadProducto.innerHTML}`);
console.log(`Subtotal: ${subtotalMiniFactura.innerHTML}`);
console.log(`IVA: ${ivaMiniFactura.innerHTML}`);
console.log(`Total: ${totalMiniFactura.innerHTML}`);


let listaPedidos = [{
    ID: 'BS0000',
    nombre: '',
    precio: ''
}, {
    ID: 'BS1234',
    nombre: 'Pizza de aceitunas',
    precio: '6000'
}, {
    ID: 'BS23456',
    nombre: 'Pizza de prosciutto',
    precio: '7000',
}, {
    ID: 'BS34567',
    nombre: 'Pizza de salame',
    precio: '5000',
}, {
    ID: 'BS45678',
    nombre: 'Pizza de peperoni',
    precio: '4500',
}, {
    ID: 'BS56789',
    nombre: 'Pizza de 4 quesos',
    precio: '5000',
}, {
    ID: 'BS67890',
    nombre: 'Pizza de espinaca con 3 quesos',
    precio: '5000',
}, {
    ID: 'BS78901',
    nombre: 'Pizza de piña',
    precio: '5000',
}, {
    ID: 'BS89012',
    nombre: 'Pizza de jamón',
    precio: '5500',
}, {
    ID: 'BS90123',
    nombre: 'Pizza de hongos',
    precio: '6000',
}, {
    ID: 'BS11234',
    nombre: 'Pizza de jamón y hongos',
    precio: '6500',
}, {
    ID: 'BS0001',
    nombre: 'Reserva',
    precio: '0',
}, ];


//DATOS DEL CARD DE PRODUCTOS//
cantidadProducto.innerHTML = parseInt(1);
let indexListaPedidos = (1);
nombrePlatillo.innerHTML = listaPedidos[indexListaPedidos].nombre;
precioProducto.innerHTML = listaPedidos[indexListaPedidos].precio;

let teste = 7289;
//CARD DE LA MINI FACTURA
const cargarDatosFactura = () => {
    nombrePlatillo.innerHTML = JSON.parse(localStorage.getItem('facturaUsuario')).nombrePlatilloFact;
    precioProducto.innerHTML = JSON.parse(localStorage.getItem('facturaUsuario')).precioProductoFact;
    cantidadProducto.innerHTML = JSON.parse(localStorage.getItem('facturaUsuario')).cantidadProductoFact;
    subtotalMiniFactura.innerText = JSON.parse(localStorage.getItem('facturaUsuario')).subtotalMiniFacturaFact;
    ivaMiniFactura.innerHTML = JSON.parse(localStorage.getItem('facturaUsuario')).ivaMiniFacturaFact;
    totalMiniFactura.innerText = JSON.parse(localStorage.getItem('facturaUsuario')).totalMiniFacturaFact;
};
cargarDatosFactura();