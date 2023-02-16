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

// Mails

function validarMails(mailReg , cmailReg) {
    if (mailReg === cmailReg) {
        return true
    }
    Toast.fire({
        icon: 'error',
        title: 'Los E-Mails no coinciden'
    })
    return false
}

// Passwords

function passwordSeisCaracteres (passReg) {
    if (passReg.length < 6) {
        Toast.fire({
        icon: 'error',
        title: 'La contraseña debe ser mayor a seis caracteres'
    })
    return false
    }
    return true
}

function validarIgualdad(passReg , cpassReg) {
    if (passReg === cpassReg) {
        return true
    }
    Toast.fire({
        icon: 'error',
        title: 'Las contraseñas no coinciden'
    })
    return false
}

function validarPasswords(passReg , cpassReg) {
    if ((validarIgualdad(passReg , cpassReg)) && (passwordSeisCaracteres(passReg))) {
        return true
    }
    return false
}

// DNI y Edad

function validarNumeros(dniReg , edadReg) {
    if (!isNaN(dniReg) && (!isNaN(edadReg))) {
        return true
    }
    Toast.fire({
        icon: 'error',
        title: 'Ingrese solo números en DNI y Edad'
    })
    return false
}

// Repetición de usuario

function validarUsuarios(usuarios) {
    const dniReg = document.getElementById("dniReg").value;
    if((usuarios.dni === dniReg)) {
        Toast.fire({
            icon: 'error',
            title: 'Usuario ya registrado'
        })
        return true;
    }
    return false;
}

// Inputs

function validarIngresos(nameReg , dniReg , edadReg , mailReg , cmailReg , passReg , cpassReg) {
    if (nameReg == "" || dniReg == "" || edadReg == "" || mailReg == "" || cmailReg == "" || passReg == "" || cpassReg == "") {
        Toast.fire({
            icon: 'error',
            title: 'Llene todos los campos'
        })
        return false;
    }
    return true;
}

// Validaciones en conjunto

function validaciones(nameReg , dniReg , edadReg , mailReg , cmailReg , passReg , cpassReg) {
    let usuarioEncontrado = usuarios.find(validarUsuarios);
    if ((validarMails(mailReg , cmailReg)) && (validarNumeros(dniReg , edadReg)) && (validarPasswords(passReg , cpassReg)) && (validarIngresos(nameReg , dniReg , edadReg , mailReg , cmailReg , passReg , cpassReg) && (usuarioEncontrado == undefined))) {
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
        formRegister.reset();
        Toast.fire({
            icon: 'success',
            title: 'Registro Correcto'
        })
    }
})

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

// Evento Login

sendLog.addEventListener("click" , function () {
    let resultadoFind = usuarios.find(buscarUsuario);
    const dniLog = document.getElementById("dniLog").value;
    if ((validarDniLog(dniLog)) && (resultadoFind != undefined)) {
        console.log("Ingreso Correcto")
        console.log(resultadoFind)
        document.cookie = "dniIngreso=" + dniLog;
        location.href = "perfilpacientes.html";
        return
    }
    Toast.fire({
        icon: 'error',
        title: 'Usuario no encontrado'
    })
})
