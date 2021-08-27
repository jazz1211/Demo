"use strict";

const ivaFraccion = (13 / 100);
const btnBajarCantidad = document.getElementById('btn-bajar-cantidad-producto');
const btnSubirCantidad = document.getElementById('btn-subir-cantidad-producto');
const btnPagar = document.getElementById('btn-pagar-cuenta');
const btnBorrar = document.getElementById('borrar-producto');
let cantidadProducto = document.getElementById('cantidad-actual-producto');
let nombrePlatillo = document.getElementById('nombre-platillo');
let precioProducto = document.getElementById('precio-producto-total');
let subtotalMiniFactura = document.getElementById('mini-factura-subtotal');
let ivaMiniFactura = document.getElementById('mini-factura-iva');
let totalMiniFactura = document.getElementById('mini-factura-total');

const pageReload = () => {
    window.location.reload();
}
const pagar = () => {
    if (cantidadProducto.innerHTML == 0 || nombrePlatillo.innerHTML == '') {
        Swal.fire({
            icon: 'error',
            title: 'Su carrito está vacío.',
            text: `Inclua más productos y vuelva a intentar.`
        })
    } else {
        console.log(`Plato: ${nombrePlatillo.innerHTML}`);
        console.log(`Precio: ${precioProducto.innerHTML}`);
        console.log(`Cantidad: ${cantidadProducto.innerHTML}`);
        console.log(`Subtotal: ${subtotalMiniFactura.innerHTML}`);
        console.log(`IVA: ${ivaMiniFactura.innerHTML}`);
        console.log(`Total: ${totalMiniFactura.innerHTML}`);

        localStorage.setItem('facturaUsuario', JSON.stringify(facturaUsuario))
        Swal.fire({
            icon: 'success',
            title: 'Pedido efectuado!',
            text: `Su factura está siendo creada, aguarde un momento.`
        }).then(() => {
            window.location.href = '/html/factura.html';
        })
    }


};


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
let indexListaPedidos = (1);
cantidadProducto.innerHTML = parseInt(1);
nombrePlatillo.innerHTML = listaPedidos[indexListaPedidos].nombre;
precioProducto.innerHTML = listaPedidos[indexListaPedidos].precio;
subtotalMiniFactura.innerHTML = (listaPedidos[indexListaPedidos].precio) * (cantidadProducto.innerHTML);
ivaMiniFactura.innerHTML = ((listaPedidos[indexListaPedidos].precio) * (cantidadProducto.innerHTML)) * ivaFraccion;
totalMiniFactura.innerHTML = ((listaPedidos[indexListaPedidos].precio) * (cantidadProducto.innerHTML)) + (((listaPedidos[indexListaPedidos].precio) * (cantidadProducto.innerHTML)) * ivaFraccion);


let facturaUsuario = {
    indexLista: indexListaPedidos,
    nombrePlatilloFact: nombrePlatillo.innerHTML,
    precioProductoFact: precioProducto.innerHTML,
    cantidadProductoFact: cantidadProducto.innerHTML,
    subtotalMiniFacturaFact: subtotalMiniFactura.innerHTML,
    ivaMiniFacturaFact: ivaMiniFactura.innerHTML,
    totalMiniFacturaFact: totalMiniFactura.innerHTML,
};

const bajar = () => {
    if (cantidadProducto.innerHTML == 0 || cantidadProducto.innerHTML == '') {
        Swal.fire({
            icon: 'error',
            title: 'Ud no tiene productos en su carrito.',
        })
    } else {
        cantidadProducto.innerHTML -= 1;
        actualizarMiniFactura()
        facturaUsuario = {
            indexLista: indexListaPedidos,
            nombrePlatilloFact: nombrePlatillo.innerHTML,
            precioProductoFact: precioProducto.innerHTML,
            cantidadProductoFact: cantidadProducto.innerHTML,
            subtotalMiniFacturaFact: subtotalMiniFactura.innerHTML,
            ivaMiniFacturaFact: ivaMiniFactura.innerHTML,
            totalMiniFacturaFact: totalMiniFactura.innerHTML,
        };;
    }
}
const subir = () => {
    cantidadProducto.innerHTML = parseInt(cantidadProducto.innerHTML) + 1;
    actualizarMiniFactura()
    facturaUsuario = {
        indexLista: indexListaPedidos,
        nombrePlatilloFact: nombrePlatillo.innerHTML,
        precioProductoFact: precioProducto.innerHTML,
        cantidadProductoFact: cantidadProducto.innerHTML,
        subtotalMiniFacturaFact: subtotalMiniFactura.innerHTML,
        ivaMiniFacturaFact: ivaMiniFactura.innerHTML,
        totalMiniFacturaFact: totalMiniFactura.innerHTML,
    };;
};
//BOTONES DE SUBIR Y BAJAR CANTIDAD DEL MISMO PLATILLO
btnBajarCantidad.addEventListener('click', bajar);
btnSubirCantidad.addEventListener('click', subir);



//CARD DE LA MINI FACTURA
function actualizarMiniFactura() {
    subtotalMiniFactura.innerHTML = (listaPedidos[indexListaPedidos].precio) * (cantidadProducto.textContent);
    ivaMiniFactura.innerHTML = ((listaPedidos[indexListaPedidos].precio) * (cantidadProducto.textContent)) * ivaFraccion;
    totalMiniFactura.innerHTML = ((listaPedidos[indexListaPedidos].precio) * (cantidadProducto.textContent)) + (((listaPedidos[indexListaPedidos].precio) * (cantidadProducto.innerHTML)) * ivaFraccion);
}
//BORRAR PRODUCTO
const borrar = () => {
    cantidadProducto.textContent = 0;
    indexListaPedidos = 0;
    nombrePlatillo.innerHTML = listaPedidos[indexListaPedidos].nombre;
    precioProducto.innerHTML = listaPedidos[indexListaPedidos].precio;
    document.getElementById('foto-platillo').style.backgroundImage = 'url(/media/imagenes/foo-foto.png)';
    subtotalMiniFactura.innerHTML = 0;
    ivaMiniFactura.innerHTML = 0;
    totalMiniFactura.innerHTML = 0;

}

btnBorrar.addEventListener('click', borrar);
btnPagar.addEventListener('click', pagar);
document.addEventListener('load', actualizarMiniFactura);