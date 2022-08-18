let btnEncriptar = document.getElementById("btnEncriptar");
let btnDesencriptar = document.getElementById("btnDesencriptar");
let btnCopiar = document.getElementById("btnCopiar");
let cadena = document.getElementById("mensaje-origen");
let cadenarespuesta = document.getElementById("mensaje-desencriptado");

let texto = document.getElementById('texto');
let imagen = document.getElementById('imagen');

function encriptar(texto) {
    const palabrasReemplazo = ["ai", "enter", "imes", "ober", "ufat"];
    const palabrasBuscadas = ["a", "e", "i", "o", "u"];
    for (let index = 0; index < palabrasBuscadas.length; index++) {
        texto = texto.replaceAll(palabrasBuscadas[index], palabrasReemplazo[index]);
    }
    return texto;
}
function desencriptar(texto) {
    const palabrasReemplazo = ["ai", "enter", "imes", "ober", "ufat"];
    const palabrasBuscadas = ["a", "e", "i", "o", "u"];
    for (let index = palabrasBuscadas.length - 1; index >= 0; index--) {
        texto = texto.replaceAll(palabrasReemplazo[index], palabrasBuscadas[index]);
    }
    return texto;
}

function accionE() {
    imagen.style.display = 'none';
    texto.style.display = 'block';
    cadenarespuesta.value = encriptar(cadena.value);
}
function accionD() {
    imagen.style.display = 'none';
    texto.style.display = 'block';
    cadenarespuesta.value = desencriptar(cadena.value);
}
function copiarAPortapapeles() {
    cadenarespuesta.select();
    document.execCommand("copy");
}

btnEncriptar.onclick = accionE;
btnDesencriptar.onclick = accionD;
btnCopiar.onclick = copiarAPortapapeles;

