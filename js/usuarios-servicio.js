'use strict';
const btnUsuario = document.querySelector('#button1');
const btnSalir = document.querySelector('#button2');

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

let listavelha = [{
    nombre: 'Jazmin Alfaro',
    correo: 'jazz@gmail.com',
    nacimiento: '12/11/1998',
    contrasenna: '12345',
    codigo: 'B1BA7K',
    estado: 1,
    rol: 1
}, {
    nombre: 'Paulina Solorzano',
    correo: 'pau@gmail.com',
    nacimiento: '01/01/2000',
    contrasenna: 'abcde',
    codigo: '7PWWLJ',
    estado: 2,
    rol: 2
}, {
    nombre: 'Guilherme',
    correo: 'gui@gmail.com',
    nacimiento: '11/23/1990',
    contrasenna: 'abc123',
    codigo: 'PR50IT',
    estado: 4,
    rol: 4
}];

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

};

const validarCorreo = (correo) => {

    let verificado = false;

    listaUsuarios.forEach(idUsuario => {

        if (correo == idUsuario.correo) {


            verificado = true;
            //  codigoGuardado = genera rCodigo(6);

            Swal.fire({

                icon: 'success',
                title: 'Correo de verificación enviado',
                text: 'Su codigo es ' + idUsuario.codigo


            }).then(() => {
                window.location.href = 'Verficacion_Token.html';

            });
        }
    })

    if (verificado == false) {
        // Else para correo que no existe
        Swal.fire({
            icon: 'warning',
            title: 'Usuario o contraseña incorrectos',
            text: 'Verifique sus credenciales'
        });

    }
};

const validarCodigo = (codigo) => {
    let verificado = false;

    listaUsuarios.forEach(idUsuario => {

        if (codigo == idUsuario.codigo) {

            verificado = true;
            Swal.fire({

                icon: 'success',
                title: 'Codigo verificado',
                text: 'su contraseña es: ' + idUsuario.contrasenna


            }).then(() => {
                window.location.href = 'Incio_Sesion.html';
            });
        }
    })
    if (verificado == false) {
        // Else para correo que no existe
        Swal.fire({
            icon: 'warning',
            title: 'Usuario o contraseña incorrectos',
            text: 'Verifique sus credenciales'

        });

    }
};

const abrirPerfilUsuario = () => {
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
};

btnUsuario.addEventListener('click', abrirPerfilUsuario);

const cerrarSesion = () => {
    localStorage.clear();
    window.location.href = 'Inicio_Sesion.html';
};
btnSalir.addEventListener('click', cerrarSesion);