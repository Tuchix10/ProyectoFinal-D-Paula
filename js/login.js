// Generales

let usuarios = validarBaseDeDatos();
const sendReg = document.getElementById("sendReg");
const sendLog = document.getElementById("sendLog");
const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
const datosVacios = document.getElementById("datosVacios");
const registroExitoso = document.getElementById("registroExitoso")
const mailErroneo = document.getElementById("mailErroneo")
const passErronea = document.getElementById("passErronea")
const numerosError = document.getElementById("numerosError")
const dniErroneo = document.getElementById("dniErroneo")
const usuarioNoEncontrado = document.getElementById("usuarioNoEncontrado")

// Prevent Defaults

document.getElementById("sendReg").addEventListener("click", function(event) {
    event.preventDefault()
});
document.getElementById("sendLog").addEventListener("click", function(event) {
    event.preventDefault()
});

// Estilo

document.getElementById("goLog").addEventListener("click", iniciarSesion);
document.getElementById("goReg").addEventListener("click", registro);
window.addEventListener("resize", anchoPagina);

const formLogin = document.querySelector(".form-login");
const formRegister = document.querySelector(".form-registro");
const contenedorForms = document.querySelector(".contenedor-forms");
const backLogin = document.querySelector(".contenedor-back-login");
const backRegister = document.querySelector(".contenedor-back-registro");

// Funciones del estilo

function anchoPagina() {
    if (window.innerWidth > 916) {
        backRegister.style.display = "block";
        backLogin.style.display = "block";
    } else {
        backRegister.style.display = "block";
        backRegister.style.opacity = "1";
        backLogin.style.display = "none";
        formLogin.style.display = "block";
        contenedorForms.style.left = "0px";
        formRegister.style.display = "none";   
    }
}

anchoPagina();

    function iniciarSesion() {
        if (window.innerWidth > 916) {
            formLogin.style.display = "block";
            contenedorForms.style.left = "10px";
            formRegister.style.display = "none";
            backRegister.style.opacity = "1";
            backLogin.style.opacity = "0";
        } else {
            formLogin.style.display = "block";
            contenedorForms.style.left = "0px";
            formRegister.style.display = "none";
            backRegister.style.display = "block";
            backLogin.style.display = "none";
        }
    }

    function registro() {
        if (window.innerWidth > 916) {
            formRegister.style.display = "block";
            contenedorForms.style.left = "410px";
            formLogin.style.display = "none";
            backRegister.style.opacity = "0";
            backLogin.style.opacity = "1";
        } else {
            formRegister.style.display = "block";
            contenedorForms.style.left = "0px";
            formLogin.style.display = "none";
            backRegister.style.display = "none";
            backLogin.style.display = "block";
            backLogin.style.opacity = "1";
        }
    }

// Registro

class Usuario {
    constructor (nameReg , dniReg , edadReg , mailReg , passReg) {
        this.nombre = nameReg;
        this.dni = dniReg;
        this.edad = edadReg;
        this.fecha = 0
        this.tel = 0
        this.mail = mailReg;
        this.os = 0
        this.medico = 0
        this.pass = passReg;
    }
}

function validarBaseDeDatos() {
    if (localStorage.length != 0) {
        return JSON.parse(localStorage.getItem("usuarios"))
    }
    return [];
}

// Validaciones

// Validaciones de Registro

function validarMails(mailReg , cmailReg) {
    if (mailReg === cmailReg) {
        mailErroneo.style.display = 'none';
        return true
    }
    datosVacios.style.display = 'none';
    mailErroneo.style.display = 'block';
    passErronea.style.display = 'none';
    return false
}

function validarPasswords(passReg , cpassReg) {
    if (passReg === cpassReg) {
        passErronea.style.display = 'none';
        return true
    }
    datosVacios.style.display = 'none';
    passErronea.style.display = 'block';
    mailErroneo.style.display = 'none';
    return false
}

function validarNumeros(dniReg , edadReg) {
    if (!isNaN(dniReg) && (!isNaN(edadReg))) {
        return true
    }
    numerosError.style.display = 'block';
    mailErroneo.style.display = 'none';
    passErronea.style.display = 'none';
    datosVacios.style.display = 'none';
    return false
}


function validarIngresos(nameReg , dniReg , edadReg , mailReg , cmailReg , passReg , cpassReg) {
    if (nameReg == "" || dniReg == "" || edadReg == "" || mailReg == "" || cmailReg == "" || passReg == "" || cpassReg == "") {
        datosVacios.style.display = 'block';
        passErronea.style.display = 'none';
        numerosError.style.display = 'none';
        mailErroneo.style.display = 'none';
        return false;
    }
    datosVacios.style.display = 'none';
    return true;
}

function validaciones(nameReg , dniReg , edadReg , mailReg , cmailReg , passReg , cpassReg) {
    if ((validarMails(mailReg , cmailReg)) && (validarNumeros(dniReg , edadReg)) && (validarPasswords(passReg , cpassReg)) && (validarIngresos(nameReg , dniReg , edadReg , mailReg , cmailReg , passReg , cpassReg))) {
        return true
    }
    return false
}

// Validaciones de Login //

function validarDniLog(dniLog) {
    if (!isNaN(dniLog)) {
        return true;
    }
    return false;
}

// Busqueda

function buscarUsuario(usuarios) {
    const dniLog = document.getElementById("dniLog").value;
    const passLog = document.getElementById("passLog").value;
    if((usuarios.dni === dniLog ) && (usuarios.pass === passLog)) {
        return true
    }
    return false
}

// Eventos //

// Evento de Registro 

sendReg.addEventListener("click" , function () {
    let nombre = removeAccents(document.getElementById("nombreReg").value);
    let nameReg = nombre.toLowerCase();
    const dniReg = document.getElementById("dniReg").value;
    const edadReg = document.getElementById("edadReg").value;
    const mailReg = document.getElementById("mailReg").value;
    const cmailReg = document.getElementById("cmailReg").value;
    const passReg = document.getElementById("passReg").value;
    const cpassReg = document.getElementById("cpassReg").value;
    if (validaciones(nameReg , dniReg , edadReg , mailReg , cmailReg , passReg , cpassReg)) {
        usuarios.push(new Usuario ( nameReg , dniReg , edadReg , mailReg , passReg ));
        localStorage.setItem( "usuarios" , JSON.stringify(usuarios));
        registroExitoso.style.display = 'block';
    console.log(usuarios)
    console.log(localStorage)
    }
})

// Evento Login

sendLog.addEventListener("click" , function () {
    let resultadoFind = usuarios.find(buscarUsuario);
    document.cookie = "datos=" + JSON.stringify(resultadoFind);
    const dniLog = document.getElementById("dniLog").value;
    if ((validarDniLog(dniLog)) && (resultadoFind != undefined)) {
        console.log("Ingreso Correcto")
        console.log(resultadoFind)
        location.href = "perfilpacientes.html";
        return
    }
    usuarioNoEncontrado.style.display = 'block';
    console.log("Ingreso Incorrecto")
    console.log(resultadoFind)
})
