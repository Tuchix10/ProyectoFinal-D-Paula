// General

let perfiles = JSON.parse(localStorage.getItem("usuarios"));
let perfilObjeto = JSON.parse(localStorage.getItem("perfilActualizado"));
let perfilActual = validarStorage();
let perfilUsuarioActual = perfiles.find(buscarUsuarioPerfil);

// Cookie

let cookie = document.cookie.slice(11);

// Definición de Variables

const botonEdit = document.getElementById("botonEdit")
let nombrePerfil = document.getElementById("namePerfil");
let editNombrePerfil = document.getElementById("editNamePerfil");
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

function buscarUsuarioPerfil(perfiles) {
    if((perfiles.dni === cookie)) {
        return true
    }
    return false
}

function validarStorage() {
    if (perfilObjeto != null) {
        return JSON.parse(localStorage.getItem("perfilActualizado"))
    }
    return {
        nombre:perfilUsuarioActual.nombre,
        dni:perfilUsuarioActual.dni,
        edad:perfilUsuarioActual.edad,
        fecha:perfilUsuarioActual.fecha,
        tel:perfilUsuarioActual.tel,
        mail:perfilUsuarioActual.mail,
        os:perfilUsuarioActual.os,
        medico:perfilUsuarioActual.medico,
        pass:perfilUsuarioActual.pass,
    };
}

function ingresoDatosDefault () {
    nombrePerfil.innerText = perfilActual.nombre.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase());
    edadPerfil.innerText = perfilActual.edad;
    dniPerfil.innerText = perfilActual.dni;
    emailPerfil.innerText = perfilActual.mail;
    fechaPerfil.innerText = perfilActual.fecha;
    telefonoPerfil.innerText = perfilActual.tel;
    osPerfil.innerText = perfilActual.os;
    mcPerfil.innerText = perfilActual.medico;
}

ingresoDatosDefault()

// Edición.

function habilitarEdicion () {
    nombrePerfil.style.display = "none";
    editNombrePerfil.style.display = "block";
    fechaPerfil.style.display = "none";
    editFechaPerfil.style.display = "block";
    telefonoPerfil.style.display = "none";
    editTelefono.style.display = "block";
    osPerfil.style.display = "none";
    editObraSocial.style.display = "block";
    emailPerfil.style.display = "none";
    editMailPerfil.style.display = "block";
    botonEdit.style.display = "none";
    divBotonGuardar.style.display = "block";
}

function deshabilitarEdicion () {
    guardarDatos ();
    cambiarDatos ();
    nombrePerfil.style.display = "block";
    editNombrePerfil.style.display = "none";
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

function cambiarDatos () {
    nombrePerfil.innerText = perfilActual.nombre.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase());
    edadPerfil.innerText = perfilActual.edad;
    dniPerfil.innerText = perfilActual.dni;
    emailPerfil.innerText = perfilActual.mail;
    fechaPerfil.innerText = perfilActual.fecha;
    telefonoPerfil.innerText = perfilActual.tel;
    osPerfil.innerText = perfilActual.os;
    mcPerfil.innerText = perfilActual.medico;
}

// Editar datos

function guardarDatos () {
    localStorage.removeItem("perfilActualizado");
    perfilActual.nombre = editNombrePerfil.value;
    perfilActual.fecha = editFechaPerfil.value;
    perfilActual.tel = editTelefono.value;
    perfilActual.mail = editMailPerfil.value;
    perfilActual.os = editObraSocial.value;
    localStorage.setItem( "perfilActualizado" , JSON.stringify(perfilActual));
    console.log(perfilActual)
}

botonEdit.addEventListener("click", habilitarEdicion) 
saveEdit.addEventListener("click" , deshabilitarEdicion) 

