import { barcelona, roma, paris, londres } from "./ciudades.js"

//obtener los elementos del dom
//query es consulta en ingles
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')

//agregar un evento click a cada enlace
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        //remover active
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        });
        //agregar active al que corresponda
        this.classList.add('active')
        //obtener contenido correspondiente al enlace
        let contenido = obtenerContenido(this.textContent)
        //mostrar el contenido en el dom
        tituloElemento.innerHTML = contenido.titulo
        subTituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
    });
});

// trae la informacion correcta de ciudades
function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace]
}