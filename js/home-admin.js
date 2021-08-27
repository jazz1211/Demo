'use strict';
//const btnUsuario = document.querySelector('#button1');
const btnSalir = document.querySelector('#button2');

const btnListarClientesActivos = document.querySelector('#listarClientesOn');
const btnListarClientesInactivos = document.querySelector('#listarClientesOff');
const btnListarDuennos = document.querySelector('#listarDuennos');
const btnListarEncargados = document.querySelector('#listarEncargados');
const tablaHeadPanelControl = document.querySelector('#tabla-panel-control thead');
const tablaBodyPanelControl = document.querySelector('#tabla-panel-control tbody');
const btnListarSolicitudesDuennos = document.querySelector('#listarsolicitudesDuennos');
const btnListarRestaurantes = document.querySelector('#listarRestaurantes');


btnSalir.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = 'Inicio_Sesion.html';
});

/*
Estados
1. Activo
2. Inactivo
3. Suspendido
4. Pendiente de cambio de contraseña
5. Pendiente de aprobación del administrador (solo para los dueños de restaurantes)

Roles
1. Administrador
2. Dueño de restaurantes
3. Encargado de un restaurante
4. Cliente
*/

let listaUsuarios = [];
let listarTodosUsers = () => {
    const inicializarListas = async() => {
        let listaAdmins = await obtenerListaDatos('/listar-admins');
        let listaDuennos = await obtenerListaDatos('/listar-duennos');
        let listaEncargados = await obtenerListaDatos('/listar-encargados');
        let listaClientes = await obtenerListaDatos('/listar-clientes');

        listaUsuarios = listaAdmins.concat(listaDuennos, listaEncargados, listaClientes);
    };
    inicializarListas();
};
listarTodosUsers();

btnListarClientesActivos.addEventListener('click', async() => {
    let listaClientes = await obtenerListaDatos('/listar-clientes');
    tablaHeadPanelControl.innerHTML = '';
    tablaBodyPanelControl.innerHTML = '';
    let fila = tablaHeadPanelControl.insertRow();
    fila.insertCell().innerText = 'Nombre';
    fila.insertCell().innerText = 'Apellido';
    fila.insertCell().innerText = 'Correo electrónico';
    fila.insertCell().innerText = 'Contraseña';
    fila.insertCell().innerText = 'Estado';
    fila.insertCell().innerText = 'Rol';

    listaClientes.forEach(objUsuario => {
        console.log(objUsuario);
        if (objUsuario.estado == 1) {
            fila = tablaBodyPanelControl.insertRow();
            fila.insertCell().innerText = objUsuario.nombre;
            fila.insertCell().innerText = objUsuario.apellido;
            fila.insertCell().innerText = objUsuario.correo;
            fila.insertCell().innerText = objUsuario.contrasenna;
            fila.insertCell().innerText = objUsuario.estado;
            fila.insertCell().innerText = objUsuario.rol;
        }
    });
});
btnListarClientesInactivos.addEventListener('click', async() => {
    let listaClientes = await obtenerListaDatos('/listar-clientes');
    tablaHeadPanelControl.innerHTML = '';
    tablaBodyPanelControl.innerHTML = '';
    let fila = tablaHeadPanelControl.insertRow();
    fila.insertCell().innerText = 'Nombre';
    fila.insertCell().innerText = 'Apellido';
    fila.insertCell().innerText = 'Correo electrónico';
    fila.insertCell().innerText = 'Contraseña';
    fila.insertCell().innerText = 'Estado';
    fila.insertCell().innerText = 'Rol';

    listaClientes.forEach(objUsuario => {
        console.log(objUsuario);
        if (objUsuario.estado != 1) {
            fila = tablaBodyPanelControl.insertRow();
            fila.insertCell().innerText = objUsuario.nombre;
            fila.insertCell().innerText = objUsuario.apellido;
            fila.insertCell().innerText = objUsuario.correo;
            fila.insertCell().innerText = objUsuario.contrasenna;
            fila.insertCell().innerText = objUsuario.estado;
            fila.insertCell().innerText = objUsuario.rol;
        }
    });
});
btnListarDuennos.addEventListener('click', async() => {
    let listaDuennos = await obtenerListaDatos('/listar-duennos');
    tablaHeadPanelControl.innerHTML = '';
    tablaBodyPanelControl.innerHTML = '';
    let fila = tablaHeadPanelControl.insertRow();
    fila.insertCell().innerText = 'Nombre';
    fila.insertCell().innerText = 'Apellido';
    fila.insertCell().innerText = 'Correo electrónico';
    fila.insertCell().innerText = 'Contraseña';
    fila.insertCell().innerText = 'Estado';
    fila.insertCell().innerText = 'Rol';

    listaDuennos.forEach(objUsuario => {
        console.log(objUsuario);
        if (objUsuario.estado == 1) {
            fila = tablaBodyPanelControl.insertRow();
            fila.insertCell().innerText = objUsuario.nombre;
            fila.insertCell().innerText = objUsuario.apellido;
            fila.insertCell().innerText = objUsuario.correo;
            fila.insertCell().innerText = objUsuario.contrasenna;
            fila.insertCell().innerText = objUsuario.estado;
            fila.insertCell().innerText = objUsuario.rol;
        }
    });
});
btnListarSolicitudesDuennos.addEventListener('click', async() => {
    let listaDuennos = await obtenerListaDatos('/listar-duennos');
    tablaHeadPanelControl.innerHTML = '';
    tablaBodyPanelControl.innerHTML = '';
    let fila = tablaHeadPanelControl.insertRow();
    fila.insertCell().innerText = 'Nombre';
    fila.insertCell().innerText = 'Apellido';
    fila.insertCell().innerText = 'Correo electrónico';
    fila.insertCell().innerText = 'Contraseña';
    fila.insertCell().innerText = 'Estado';
    fila.insertCell().innerText = 'Rol';

    listaDuennos.forEach(objUsuario => {
        console.log(objUsuario);
        if (objUsuario.estado != 1) {
            fila = tablaBodyPanelControl.insertRow();
            fila.insertCell().innerText = objUsuario.nombre;
            fila.insertCell().innerText = objUsuario.apellido;
            fila.insertCell().innerText = objUsuario.correo;
            fila.insertCell().innerText = objUsuario.contrasenna;
            fila.insertCell().innerText = objUsuario.estado;
            fila.insertCell().innerText = objUsuario.rol;
        }
    });
});
btnListarEncargados.addEventListener('click', async() => {
    let listaEncargados = await obtenerListaDatos('/listar-encargados');
    tablaHeadPanelControl.innerHTML = '';
    tablaBodyPanelControl.innerHTML = '';
    let fila = tablaHeadPanelControl.insertRow();
    fila.insertCell().innerText = 'Nombre';
    fila.insertCell().innerText = 'Apellido';
    fila.insertCell().innerText = 'Correo electrónico';
    fila.insertCell().innerText = 'Contraseña';
    fila.insertCell().innerText = 'Estado';
    fila.insertCell().innerText = 'Rol';

    listaEncargados.forEach(objUsuario => {
        console.log(objUsuario);
        if (objUsuario._id) {
            fila = tablaBodyPanelControl.insertRow();
            fila.insertCell().innerText = objUsuario.nombre;
            fila.insertCell().innerText = objUsuario.apellido;
            fila.insertCell().innerText = objUsuario.correo;
            fila.insertCell().innerText = objUsuario.contrasenna;
            fila.insertCell().innerText = objUsuario.estado;
            fila.insertCell().innerText = objUsuario.rol;
        }
    });
});
btnListarRestaurantes.addEventListener('click', async() => {
    let listaRestaurantes = await obtenerListaDatos('/listar-restaurantes');
    tablaHeadPanelControl.innerHTML = '';
    tablaBodyPanelControl.innerHTML = '';
    let fila = tablaHeadPanelControl.insertRow();
    fila.insertCell().innerText = 'Nombre comercial';
    fila.insertCell().innerText = 'Telefono';
    fila.insertCell().innerText = 'Aforo';
    fila.insertCell().innerText = 'Encargado';
    fila.insertCell().innerText = 'Provincia';

    listaRestaurantes.forEach(objUsuario => {
        console.log(objUsuario);
        if (objUsuario._id) {
            fila = tablaBodyPanelControl.insertRow();
            fila.insertCell().innerText = objUsuario.nombre_comercial;
            fila.insertCell().innerText = objUsuario.telefono_1;
            fila.insertCell().innerText = objUsuario.aforo_max;;
            fila.insertCell().innerText = objUsuario.nombre_completo;
            fila.insertCell().innerText = objUsuario.provincia_CR;
        }
    });
});

/*
            const validarCredenciales = (correo, contrasenna) => {
                let verificado = false;

                listaUsuarios.forEach(objUsuario => {

                    if (correo == objUsuario.correo) {

                        if ((contrasenna == objUsuario.contrasenna)) {
                            verificado = true;

                            switch (objUsuario.estado) {

                                case 1:
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Inicio de sesión correcto'
                                    }).then(() => {
                                        localStorage.setItem('usuarioConectado', JSON.stringify(objUsuario));

                                        if (objUsuario.rol == 1) {
                                            window.location.href = 'home-admin.html';

                                        }

                                        if (objUsuario.rol == 2) {
                                            window.location.href = 'home-dueno.html';

                                        }

                                        if (objUsuario.rol == 3) {
                                            window.location.href = 'home-encargado.html';

                                        }

                                        if (objUsuario.rol == 4) {
                                            window.location.href = 'index-usuario.html';

                                        }

                                    });
                                    break;

                                case 2:
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'El usuario se encuentra inactivo',
                                        text: 'Por favor contacte a la administración del sitio'
                                    }).then(() => {
                                        window.location.href = 'home.html#contacto';
                                    });
                                    break;

                                case 3:
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'El usuario se encuentra suspenso.',
                                        text: 'Por favor contacte a la administración del sitio'
                                    }).then(() => {
                                        window.location.href = 'home.html#contacto';
                                    });
                                    break;

                                case 4:
                                    Swal.fire({
                                        icon: 'warning',
                                        title: 'Debe modificar la contraseña'
                                    }).then(() => {
                                        window.location.href = 'Restablecer_Contrasenna.html';
                                    });
                                    break;

                                case 5:
                                    Swal.fire({
                                        icon: 'warning',
                                        title: 'Pendiente de aprobación del administrador.',
                                        text: 'Verifique su correo.'
                                    }).then(() => {
                                        window.location.href = 'Inicio_Sesion.html';
                                    });
                                    break;
                            }
                        }
                    }
                });

                if (verificado == false) {
                    // Else para correo que no existe
                    Swal.fire({
                        icon: 'warning',
                        title: 'Usuario o contraseña incorrectos',
                        text: 'Verifique sus credenciales.'
                    });

                }

};*/