/**
 * @fileoverview Interactividad Emoji Slider range
 * @version 0.1
 * @author Juanjo Alonso Sánchez <jj.alonso@esla.com>
 * @copyright cgb@esla.com
 */
 "use strict";

const range = document.querySelector('.encuesta__input-range');
const resultado = document.querySelector('.encuesta__resultado');
const nota = document.querySelector('.encuesta__nota');
/**
  * Objeto que contiene todos los valores de las valoraciones
  * @type {Object}
  */
const valoraciones = {
    deficiente: 'rgba(255,0,9,1)',
    regular: 'rgba(255,111,0,1)',
    aceptable: 'rgba(255,168,0,1)',
    excelente: 'rgba(58,181,164,1)'
};
/**
  * Establece el año en el footer
  * @returns {void}
  */
 function establecerYear(){ 
    const today = new Date();
    const nodoYear = document.querySelector(".footer__copy-year"); 
    nodoYear.innerHTML = today.getFullYear();
}
/**
  * Obtiene las propiedades del Objeto valoraciones
  * @param {number} indice Indice de la key
  * @returns {string}
  */
function obtenerKeyValoraciones (indice) {
    let contador = 0;
    for (let key in valoraciones) { 
        if (contador === indice){
            return key;
        }
        contador ++;
    }
}
//CÓDIGO
establecerYear();
//Creamos el nodo estilos para guardar las nuevas modificaciones del input range
let style = document.createElement('style');
document.head.appendChild(style);

if (range) {
    //Damos valor a la barra de progreso del range
    range.style.setProperty("--value", range.value);
    range.addEventListener('input', (e) => {
        let step = 11.1;
        let rangeValue = (e.target.value / step) + 1;        
        range.style.setProperty("--value", range.value);
        //Cambiamos el emoji
        if(navigator.userAgent.indexOf("Chrome") > -1) {
            style.innerHTML = `input[type=range]::-webkit-slider-thumb {background-image: url(../assets/imgs/${String(rangeValue)}.png);}`;
        } else if (navigator.userAgent.indexOf("Safari") > -1) {
            style.innerHTML = `input[type=range]::-webkit-slider-thumb {background-image: url(../assets/imgs/${String(rangeValue)}.png);}`;
        } else if (navigator.userAgent.indexOf("Opera") > -1) {
            style.innerHTML = `input[type=range]::-webkit-slider-thumb {background-image: url(../assets/imgs/${String(rangeValue)}.png);}`;
        } else if (navigator.userAgent.indexOf("Firefox") > -1) {
            style.innerHTML = `input[type=range]::-moz-range-thumb {background-image: url(../assets/imgs/${String(rangeValue)}.png);}`;
        } else if (navigator.userAgent.indexOf("MSIE") > -1) {
            style.innerHTML = `input[type=range]::-ms-thumb {background-image: url(../assets/imgs/${String(rangeValue)}.png);}`;
        }
        if (rangeValue <= 2) {
            if (navigator.userAgent.indexOf("Firefox") > -1) {
                style.innerHTML += `input[type=range]::-moz-range-progress {background-color: ${valoraciones.deficiente}; height: 12px;}`;
            } else if (navigator.userAgent.indexOf("MSIE") > -1) {
                style.innerHTML += `input[type=range]::-ms-fill-lower {background-color: ${valoraciones.deficiente}; height: 12px;}`;
            } else {
                style.innerHTML += `input[type=range]::-webkit-slider-runnable-track {background-image:linear-gradient(to right, ${valoraciones.deficiente} calc(var(--value)*1%), var(--background-primary-color) 0);}`;
            }
            //Actualizamos el resultado
            resultado.innerHTML = obtenerKeyValoraciones (0);
            resultado.style.color = valoraciones.deficiente;
            nota.innerHTML = `(${rangeValue})`;
        } else if (rangeValue > 2 && rangeValue <= 5){
            if (navigator.userAgent.indexOf("Firefox") > -1) {
                style.innerHTML += `input[type=range]::-moz-range-progress {background-color: ${valoraciones.regular}; height: 12px;}`;
            } else if (navigator.userAgent.indexOf("MSIE") > -1) {
                style.innerHTML += `input[type=range]::-ms-fill-lower {background-color: ${valoraciones.regular}; height: 12px;}`;
            } else {
                style.innerHTML += `input[type=range]::-webkit-slider-runnable-track {background-image:linear-gradient(to right, ${valoraciones.regular} calc(var(--value)*1%), var(--background-primary-color) 0);}`;
            }
            //Actualizamos el resultado
            resultado.innerHTML = obtenerKeyValoraciones (1);
            resultado.style.color = valoraciones.regular;
            nota.innerHTML = `(${rangeValue})`;
        } else if (rangeValue > 5 && rangeValue <= 8){
            if (navigator.userAgent.indexOf("Firefox") > -1) {
                style.innerHTML += `input[type=range]::-moz-range-progress {background-color: ${valoraciones.aceptable}; height: 12px;}`;
            } else if (navigator.userAgent.indexOf("MSIE") > -1) {
                style.innerHTML += `input[type=range]::-ms-fill-lower {background-color: ${valoraciones.aceptable}; height: 12px;}`;
            } else {
                style.innerHTML += `input[type=range]::-webkit-slider-runnable-track {background-image:linear-gradient(to right, ${valoraciones.aceptable} calc(var(--value)*1%), var(--background-primary-color) 0);}`;
            }
            //Actualizamos el resultado
            resultado.innerHTML = obtenerKeyValoraciones (2);
            resultado.style.color = valoraciones.aceptable;
            nota.innerHTML = `(${rangeValue})`;
        }else if (rangeValue > 8){
            if (navigator.userAgent.indexOf("Firefox") > -1) {
                style.innerHTML += `input[type=range]::-moz-range-progress {background-color: ${valoraciones.excelente}; height: 12px;}`;
            } else if (navigator.userAgent.indexOf("MSIE") > -1) {
                style.innerHTML += `input[type=range]::-ms-fill-lower {background-color: ${valoraciones.excelente}; height: 12px;}`;
            } else {
                style.innerHTML += `input[type=range]::-webkit-slider-runnable-track {background-image:linear-gradient(to right, ${valoraciones.excelente}calc(var(--value)*1%), var(--background-primary-color) 0);}`;
            }
            //Actualizamos el resultado
            resultado.innerHTML = obtenerKeyValoraciones (3);
            resultado.style.color = valoraciones.excelente;
            nota.innerHTML = `(${rangeValue})`;
        }
    });
}
