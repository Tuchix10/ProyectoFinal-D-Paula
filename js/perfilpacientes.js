// General

const cookie = document.cookie.slice(11);
let perfiles = JSON.parse(localStorage.getItem("usuarios"));
let indice = perfiles.findIndex(buscarUsuarioPerfil);
let perfilUsuarioActual = perfiles.find(buscarUsuarioPerfil);

class Usuario {
    constructor ( nombreValor , edadCalculada , fechavalor , telValor , mailValor , osValor , ) {
        this.nombre = nombreValor;
        this.dni = perfilUsuarioActual.dni;
        this.edad = edadCalculada;
        this.fecha = fechavalor;
        this.tel = telValor;
        this.mail = mailValor;
        this.os = osValor;
        this.medico = perfilUsuarioActual.medico;
        this.pass = perfilUsuarioActual.pass;
    }
}

// Definición de Variables

const nombrePerfil = document.getElementById("namePerfil");
const edadPerfil = document.getElementById("edadPerfil");
const dniPerfil = document.getElementById("dniPerfil");
const fechaPerfil = document.getElementById("fechaPerfil");
const telefonoPerfil = document.getElementById("telefonoPerfil");
const emailPerfil = document.getElementById("emailPerfil");
const osPerfil = document.getElementById("osPerfil");
const mcPerfil = document.getElementById("mcPerfil");
const saveEdit = document.getElementById("saveEdit")
const divBotonGuardar = document.getElementById("botonEditGuardar");
const botonEdit = document.getElementById("botonEdit")
const datosVaciosEdicion = document.getElementById("datosVaciosEdicion");
const imagenNoticias = document.getElementById("imagenNoticia");
const linkNoticias = document.getElementById("linkNoticia");
const tituloNoticias = document.getElementById("tituloNoticia");
const imagenNoticias1 = document.getElementById("imagenNoticia1");
const linkNoticias1 = document.getElementById("linkNoticia1");
const tituloNoticias1 = document.getElementById("tituloNoticia1");
const imagenNoticias2 = document.getElementById("imagenNoticia2");
const linkNoticias2 = document.getElementById("linkNoticia2");
const tituloNoticias2 = document.getElementById("tituloNoticia2");
const imagenNoticias3 = document.getElementById("imagenNoticia3");
const linkNoticias3 = document.getElementById("linkNoticia3");
const tituloNoticias3 = document.getElementById("tituloNoticia3");
const imagenNoticias4 = document.getElementById("imagenNoticia4");
const linkNoticias4 = document.getElementById("linkNoticia4");
const tituloNoticias4 = document.getElementById("tituloNoticia4");

// Variables Edición

const inputEditNombre = document.getElementById("editNamePerfil");
const inputEditfecha = document.getElementById("editFechaPerfil");
const inputEditTel = document.getElementById("editTelefono");
const inputEditMail = document.getElementById("editMailPerfil");
const inputEditOs = document.getElementById("editObraSocial");

// Comprobaciones

function buscarUsuarioPerfil(arreglo) {
    if((arreglo.dni === cookie)) {
        return true
    }
    return false
}

// Ingreso de datos

function ingresoDeDatos() {
    nombrePerfil.innerText = perfilUsuarioActual.nombre.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase());
    edadPerfil.innerText = perfilUsuarioActual.edad;
    dniPerfil.innerText = perfilUsuarioActual.dni;
    emailPerfil.innerText = perfilUsuarioActual.mail;
    fechaPerfil.innerText = perfilUsuarioActual.fecha;
    telefonoPerfil.innerText = perfilUsuarioActual.tel;
    osPerfil.innerText = perfilUsuarioActual.os;
    mcPerfil.innerText = perfilUsuarioActual.medico;
}

ingresoDeDatos();

// Calculo de edad

const calcularEdad = (inputEditfecha) => {
    const fechaActual = new Date();
    const anoActual = parseInt(fechaActual.getFullYear());
    const mesActual = parseInt(fechaActual.getMonth()) + 1;
    const diaActual = parseInt(fechaActual.getDate());
    const anoNacimiento = parseInt(String(inputEditfecha).substring( 0 , 4 ));
    const mesNacimiento = parseInt(String(inputEditfecha).substring( 5 , 7 ));
    const diaNacimiento = parseInt(String(inputEditfecha).substring( 8 , 10));
    let edad = anoActual - anoNacimiento;
    if (mesActual < mesNacimiento) {
        edad--;
    } else if (mesActual === mesNacimiento) {
        if(diaActual < diaNacimiento) {
            edad--;
        }
    }
    return edad;
};

// Edición.

function habilitarEdicion () {
    nombrePerfil.style.display = "none";
    inputEditNombre.style.display = "block";
    fechaPerfil.style.display = "none";
    inputEditfecha.style.display = "block";
    telefonoPerfil.style.display = "none";
    inputEditTel.style.display = "block";
    osPerfil.style.display = "none";
    inputEditOs.style.display = "block";
    emailPerfil.style.display = "none";
    inputEditMail.style.display = "block";
    botonEdit.style.display = "none";
    divBotonGuardar.style.display = "block";
}

function deshabilitarEdicion () {
    guardarDatos ();
    cambiarDatos ();
    nombrePerfil.style.display = "block";
    inputEditNombre.style.display = "none";
    fechaPerfil.style.display = "block";
    inputEditfecha.style.display = "none";
    telefonoPerfil.style.display = "block";
    inputEditTel.style.display = "none";
    osPerfil.style.display = "block";
    inputEditOs.style.display = "none";
    emailPerfil.style.display = "block";
    inputEditMail.style.display = "none";
    botonEdit.style.display = "block";
    divBotonGuardar.style.display = "none";
}

function cambiarDatos () {
    perfilUsuarioActual = perfiles.find(buscarUsuarioPerfil);
    nombrePerfil.innerText = perfilUsuarioActual.nombre.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase());
    edadPerfil.innerText = perfilUsuarioActual.edad;
    emailPerfil.innerText = perfilUsuarioActual.mail;
    fechaPerfil.innerText = perfilUsuarioActual.fecha;
    telefonoPerfil.innerText = perfilUsuarioActual.tel;
    osPerfil.innerText = perfilUsuarioActual.os;
}

// Editar datos

function guardarDatos () {
    const nombreValor = inputEditNombre.value;
    const fechavalor = inputEditfecha.value;
    const edadCalculada = calcularEdad(fechavalor);
    const telValor = Number(inputEditTel.value);
    const mailValor = inputEditMail.value;
    const osValor = inputEditOs.value;
    if (nombreValor == "" || fechavalor == "" || edadCalculada == "" || telValor == "" || mailValor == "" || osValor == "") {
        Toast.fire({
            icon: 'error',
            title: 'Por favor llene todos los campos'
        })
        return
    }
    Toast.fire({
        icon: 'success',
        title: 'Edición correcta'
    })
    perfiles[indice] = (new Usuario ( nombreValor , edadCalculada , fechavalor , telValor , mailValor , osValor ));
    localStorage.setItem( "usuarios" , JSON.stringify(perfiles));
}

botonEdit.addEventListener("click", habilitarEdicion) 
saveEdit.addEventListener("click" , deshabilitarEdicion) 

// SweetAlert

const Toast = Swal.mixin({
    toast: true,
    position: 'top-right',
    iconColor: 'white',
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
    customClass: {
    popup: 'colored-toast'
    },
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true
})

// Noticias

fetch("https://newsapi.org/v2/top-headlines?country=ar&category=science&apiKey=04a7883b8712458fbd036fb6ded9f233")
    .then (response => response.json())
    .then (data =>{
        let arrDeNoticias = data.articles;
        arrDeNoticias.length = 5
        imagenNoticias.setAttribute("src" , arrDeNoticias[0].urlToImage)
        linkNoticias.setAttribute("href" , arrDeNoticias[0].url)
        tituloNoticias.innerText = arrDeNoticias[0].title;
        imagenNoticias1.setAttribute("src" , arrDeNoticias[1].urlToImage)
        linkNoticias1.setAttribute("href" , arrDeNoticias[1].url)
        tituloNoticias1.innerText = arrDeNoticias[1].title;
        imagenNoticias2.setAttribute("src" , arrDeNoticias[2].urlToImage)
        linkNoticias2.setAttribute("href" , arrDeNoticias[2].url)
        tituloNoticias2.innerText = arrDeNoticias[2].title;
        imagenNoticias3.setAttribute("src" , arrDeNoticias[3].urlToImage)
        linkNoticias3.setAttribute("href" , arrDeNoticias[3].url)
        tituloNoticias3.innerText = arrDeNoticias[3].title;
        imagenNoticias4.setAttribute("src" , arrDeNoticias[4].urlToImage)
        linkNoticias4.setAttribute("href" , arrDeNoticias[4].url)
        tituloNoticias4.innerText = arrDeNoticias[4].title;
    })
