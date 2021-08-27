'use strict';

const spanNombre = document.querySelector('#txt-idUsuario')
let usuarioConectado = obtenerUsuarioConectado();



spanNombre.innerText = usuarioConectado.nombre;