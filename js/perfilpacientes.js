// General

let perfiles = JSON.parse(localStorage.getItem("usuario"));

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
    alert(`Se produjo un ingreso erroneo porfavor volver a intentar`);
    return false
}

let perfilUsuarioActual = perfiles.find(buscarUsuarioPerfil);

function ingresoDatosDefault (perfilUsuarioActual) {
    nombrePerfil.innerText = perfilUsuarioActual.nombre.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase());
    edadPerfil.innerText = perfilUsuarioActual.edad;
    dniPerfil.innerText = perfilUsuarioActual.dni;
    emailPerfil.innerText = perfilUsuarioActual.mail;
    fechaPerfil.innerText = perfilUsuarioActual.fecha;
    telefonoPerfil.innerText = perfilUsuarioActual.tel;
    osPerfil.innerText = perfilUsuarioActual.os;
    mcPerfil.innerText = perfilUsuarioActual.medico;
}

ingresoDatosDefault(perfilUsuarioActual)


// Edición.

function habilitarEdicion () {
    nombrePerfil.style.display = "none"
    editNombrePerfil.style.display = "block";
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
    nombrePerfil.style.display = "block"
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

// Editar datos

function guardarDatos () {
    let valorNuevoNombre = editNombrePerfil.value;
    let valorNuevaFecha = editFechaPerfil.value;
    let valorNuevoTel = editTelefono.value;
    let valorNuevoMail = editMailPerfil.value;
    let valorNuevaOs = editObraSocial.value;
    perfiles.map(function(usuario) {
        if(usuario.dni === dniPerfil.value){
            this.nombre = valorNuevoNombre;
            this.fecha = valorNuevaFecha;
            this.tel = valorNuevoTel;
            this.mail = valorNuevoMail;
            this.os = valorNuevaOs;
        }
        return usuario;
    });
    localStorage.setItem( "usuario" , JSON.stringify(perfiles));
}

botonEdit.addEventListener("click", habilitarEdicion) 
saveEdit.addEventListener("click" , deshabilitarEdicion) 

