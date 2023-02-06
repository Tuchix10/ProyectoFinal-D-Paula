// General

almacenamiento = validarBaseDeDatos();

function validarBaseDeDatos() {
    if (localStorage.length != 0) {
        return JSON.parse(localStorage.getItem("usuario"))
    }
    return [];
}

class Usuario {
    constructor (valorNuevoNombre , dni , edad , valorNuevaFecha , valorNuevoTel , valorNuevoMail , valorNuevaOs , medico , pass) {
        this.nombre = valorNuevoNombre;
        this.dni = dni;
        this.edad = edad;
        this.fecha = valorNuevaFecha;
        this.tel = valorNuevoTel;
        this.mail = valorNuevoMail;
        this.os = valorNuevaOs;
        this.medico = medico;
        this.pass = pass;
    }
}

// Cookie

let cookieA = document.cookie;
let cookieB = cookieA.slice(6);
let cookieObjeto = JSON.parse(cookieB);

// Definición de Variables

const dni = cookieObjeto.dni;
const edad = cookieObjeto.edad;
let medico = cookieObjeto.medico;
const pass = cookieObjeto.pass;
const botonEdit = document.getElementById("botonEdit")
let namePerfil = document.getElementById("namePerfil");
let editNamePerfil = document.getElementById("editNamePerfil");
let edadPerfil = document.getElementById("edadPerfil");
let dniPerfil = document.getElementById("dniPerfil");
let fechaPerfil = document.getElementById("fechaPerfil");
let editFechaPerfil = document.getElementById("editFechaPerfil");
let telefonoPerfil = document.getElementById("telefonoPerfil");
let editTelefono = document.getElementById("editTelefono");
let emailPerfil = document.getElementById("emailPerfil");
let editMailPerfil = document.getElementById("editMailPerfil");
let osPerfil = document.getElementById("osPerfil");
let mcPerfil = document.getElementById("mcPerfil");
let editObraSocial = document.getElementById("editObraSocial");
let saveEdit = document.getElementById("saveEdit")
let divBotonGuardar = document.getElementById("botonEditGuardar")

// Ingreso de datos default

function chequearAlmacenamiento () {
    if (almacenamiento[0] != undefined) {
        return true
    }
    return false
}

function ingresoNuevoUsuario () {
    if (chequearAlmacenamiento()) {
        if ((almacenamiento[0].dni) === (cookieObjeto.dni)) {
            namePerfil.innerText = almacenamiento[0].nombre.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase());
            edadPerfil.innerText = cookieObjeto.edad;
            dniPerfil.innerText = cookieObjeto.dni;
            emailPerfil.innerText = almacenamiento[0].mail;
            fechaPerfil.innerText = almacenamiento[0].fecha;
            telefonoPerfil.innerText = almacenamiento[0].tel;
            osPerfil.innerText = almacenamiento[0].os;
            mcPerfil.innerText = almacenamiento[0].medico;
            return
        }
    }
    namePerfil.innerText = cookieObjeto.nombre.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase());
    edadPerfil.innerText = cookieObjeto.edad;
    dniPerfil.innerText = cookieObjeto.dni;
    emailPerfil.innerText = cookieObjeto.mail;
    fechaPerfil.innerText = cookieObjeto.fecha;
    telefonoPerfil.innerText = cookieObjeto.tel;
    osPerfil.innerText = cookieObjeto.os;
    mcPerfil.innerText = cookieObjeto.medico;
    return
}

ingresoNuevoUsuario()

// Edición.

function habilitarEdicion () {
    namePerfil.style.display = "none"
    editNamePerfil.style.display = "block";
    fechaPerfil.style.display = "none"
    editFechaPerfil.style.display = "block";
    telefonoPerfil.style.display = "none"
    editTelefono.style.display = "block";
    osPerfil.style.display = "none"
    editObraSocial.style.display = "block";
    emailPerfil.style.display = "none"
    editMailPerfil.style.display = "block";
    botonEdit.style.display = "none"
    divBotonGuardar.style.display = "block";
}

function deshabilitarEdicion () {
    guardarDatos ()
    namePerfil.style.display = "block"
    editNamePerfil.style.display = "none";
    fechaPerfil.style.display = "block"
    editFechaPerfil.style.display = "none";
    telefonoPerfil.style.display = "block"
    editTelefono.style.display = "none";
    osPerfil.style.display = "block"
    editObraSocial.style.display = "none";
    emailPerfil.style.display = "block"
    editMailPerfil.style.display = "none";
    botonEdit.style.display = "block"
    divBotonGuardar.style.display = "none";
}

function guardarDatos () {
    almacenamiento = [];
    let valorNuevoNombre = editNamePerfil.value;
    let valorNuevaFecha = editFechaPerfil.value;
    let valorNuevoTel = editTelefono.value;
    let valorNuevoMail = editMailPerfil.value;
    let valorNuevaOs = editObraSocial.value;
    let usuarioEditado = new Usuario ( valorNuevoNombre , cookieObjeto.dni , cookieObjeto.edad , valorNuevaFecha , valorNuevoTel , valorNuevoMail , valorNuevaOs , cookieObjeto.medico , cookieObjeto.pass );
    almacenamiento.push(usuarioEditado)
    localStorage.setItem( "usuario" , JSON.stringify(almacenamiento));
    cambiarDatos(usuarioEditado)
}

function cambiarDatos (usuarioEditado) {
    namePerfil.innerText = usuarioEditado.nombre.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase());
    edadPerfil.innerText = usuarioEditado.edad;
    dniPerfil.innerText = usuarioEditado.dni;
    emailPerfil.innerText = usuarioEditado.mail;
    fechaPerfil.innerText = usuarioEditado.fecha;
    telefonoPerfil.innerText = usuarioEditado.tel;
    osPerfil.innerText = usuarioEditado.os;
    mcPerfil.innerText = usuarioEditado.medico;
}

botonEdit.addEventListener("click", habilitarEdicion) 
saveEdit.addEventListener("click" , deshabilitarEdicion) 