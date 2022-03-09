// VARIABLES DOM

const clave = document.getElementById("clave");
const caracteresLabel = document.getElementById("caracteres");
const mayusculasLabel = document.getElementById("mayusculas");
const minusculasLabel = document.getElementById("minusculas");
const numeroLabel = document.getElementById("numero");
const simbolosLabel = document.getElementById("simbolos");
const generarBtn = document.getElementById("generar");
const copiarLabel = document.getElementById("copiar");

const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minusculas = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const simbolos = "!@#$%^&*()_+=";


// FUNCIONES DE CADA LABEL

function getMinusculas() {
    return minusculas[Math.floor(Math.random() * minusculas.length)];
}

function getMayusculas() {
    return mayusculas[Math.floor(Math.random() * mayusculas.length)];
}

function getNumero() {
    return numeros[Math.floor(Math.random() * numeros.length)];
}

function getSimbolo() {
    return simbolos[Math.floor(Math.random() * simbolos.length)];
}



// Funcion que chequea que casillas estan marcadas del input
function generarClave() {
    const len = caracteresLabel.value;

    let password = "";

    if (mayusculasLabel.checked) {
        password += getMayusculas();
    }

    if (minusculasLabel.checked) {
        password += getMinusculas();
    }

    if (numeroLabel.checked) {
        password += getNumero();
    }

    if (simbolosLabel.checked) {
        password += getSimbolo();
    }

    for (let i = password.length; i < len; i++) {
        const x = generateX();
        password += x;
    }

    clave.innerText = password;
}

function generateX() {
    const xs = [];
    if (mayusculasLabel.checked) {
        xs.push(getMayusculas());
    }

    if (minusculasLabel.checked) {
        xs.push(getMinusculas());
    }

    if (numeroLabel.checked) {
        xs.push(getNumero());
    }

    if (simbolosLabel.checked) {
        xs.push(getSimbolo());
    }

    if (xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}

generarBtn.addEventListener("click", generarClave);


// Funcion para copiar clave generada
copiarLabel.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = clave.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    console.log("Password copied to clipboard");
});
