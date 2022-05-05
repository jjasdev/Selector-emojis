const range = document.querySelector('.encuesta__input-range');
const containerEmojis = document.querySelector('.encuesta__emoji');
const containerValores = document.querySelector('.encuesta__valores');
const resultado = document.querySelector('.encuesta__resultado');
const nota = document.querySelector('.encuesta__nota');
const valoraciones = {
    deficiente: 'rgba(255,0,9,1)',
    regular: 'rgba(255,111,0,1)',
    aceptable: 'rgba(255,168,0,1)',
    excelente: 'rgba(58,181,164,1)'
}

function obtenerKeyValoraciones (indice) {
    let contador = 0;
    for (let key in valoraciones) { 
        if (contador === indice){
            return key
        }
        contador ++;
    }
}

let style = document.createElement('style');
document.head.appendChild(style);
//Damos valor a la barra de progreso del range
range.style.setProperty("--value", range.value);

if (range) {
    range.addEventListener('input', (e) => {
        let step = 11.1;
        let rangeValue = (e.target.value / step) + 1;        
        range.style.setProperty("--value", range.value);
        //Cambiamos el emoji
        if(navigator.userAgent.indexOf("Chrome") > -1) {
            style.innerHTML += `input[type=range]::-webkit-slider-thumb {background-image: url(../assets/imgs/${String(rangeValue)}.png);}`;
        } else if (sUsrAg.indexOf("Safari") > -1) {
            style.innerHTML += `input[type=range]::-webkit-slider-thumb {background-image: url(../assets/imgs/${String(rangeValue)}.png);}`;
        } else if (sUsrAg.indexOf("Opera") > -1) {
            style.innerHTML += `input[type=range]::-webkit-slider-thumb {background-image: url(../assets/imgs/${String(rangeValue)}.png);}`;
        } else if (sUsrAg.indexOf("Firefox") > -1) {
            style.innerHTML += `input[type=range]::-moz-range-thumb {background-image: url(../assets/imgs/${String(rangeValue)}.png);}`;
        } else if (sUsrAg.indexOf("MSIE") > -1) {
            style.innerHTML += `input[type=range]::-ms-thumb {background-image: url(../assets/imgs/${String(rangeValue)}.png);}`;
        }
        if (rangeValue <= 2) {
            if(navigator.userAgent.indexOf("Chrome") > -1) {
                style.innerHTML += `input[type=range]::-webkit-slider-runnable-track {background-image:linear-gradient(to right, ${valoraciones.deficiente} calc(var(--value)*1%), var(--background-primary-color) 0);}`;
            } else if (sUsrAg.indexOf("Safari") > -1) {
                style.innerHTML += `input[type=range]::-webkit-slider-runnable-track {background-image:linear-gradient(to right, ${valoraciones.deficiente} calc(var(--value)*1%), var(--background-primary-color) 0);}`;
            } else if (sUsrAg.indexOf("Opera") > -1) {
                style.innerHTML += `input[type=range]::-webkit-slider-runnable-track {background-image:linear-gradient(to right, ${valoraciones.deficiente} calc(var(--value)*1%), var(--background-primary-color) 0);}`;
            } else if (sUsrAg.indexOf("Firefox") > -1) {
                style.innerHTML += `input[type=range]::input[type=range]::-moz-range-track {background-image:linear-gradient(to right, ${valoraciones.deficiente} calc(var(--value)*1%), var(--background-primary-color) 0);}`;
            } else if (sUsrAg.indexOf("MSIE") > -1) {
                style.innerHTML += `input[type=range]::input[type=range]::-ms-track {background-image:linear-gradient(to right, ${valoraciones.deficiente} calc(var(--value)*1%), var(--background-primary-color) 0);}`;
            }
            //Actualizamos el resultado
            resultado.innerHTML = obtenerKeyValoraciones (0);
            resultado.style.color = valoraciones.deficiente;
            nota.innerHTML = `(${rangeValue})`;
        } else if (rangeValue > 2 && rangeValue <= 5){
            if(navigator.userAgent.indexOf("Chrome") > -1) {
                style.innerHTML += `input[type=range]::-webkit-slider-runnable-track {background-image:linear-gradient(to right, ${valoraciones.regular} calc(var(--value)*1%), var(--background-primary-color) 0);}`;
            } else if (sUsrAg.indexOf("Safari") > -1) {
                style.innerHTML += `input[type=range]::-webkit-slider-runnable-track {background-image:linear-gradient(to right, ${valoraciones.regular} calc(var(--value)*1%), var(--background-primary-color) 0);}`;
            } else if (sUsrAg.indexOf("Opera") > -1) {
                style.innerHTML += `input[type=range]::-webkit-slider-runnable-track {background-image:linear-gradient(to right, ${valoraciones.regular} calc(var(--value)*1%), var(--background-primary-color) 0);}`;
            } else if (sUsrAg.indexOf("Firefox") > -1) {
                style.innerHTML += `input[type=range]::input[type=range]::-moz-range-track {background-image:linear-gradient(to right, ${valoraciones.regular} calc(var(--value)*1%), var(--background-primary-color) 0);}`;
            } else if (sUsrAg.indexOf("MSIE") > -1) {
                style.innerHTML += `input[type=range]::input[type=range]::-ms-track {background-image:linear-gradient(to right, ${valoraciones.regular} calc(var(--value)*1%), var(--background-primary-color) 0);}`;
            }
            //Actualizamos el resultado
            resultado.innerHTML = obtenerKeyValoraciones (1);
            resultado.style.color = valoraciones.regular;
            nota.innerHTML = `(${rangeValue})`;
        } else if (rangeValue > 5 && rangeValue <= 8){
            if(navigator.userAgent.indexOf("Chrome") > -1) {
                style.innerHTML += `input[type=range]::-webkit-slider-runnable-track {background-image:linear-gradient(to right, ${valoraciones.aceptable} calc(var(--value)*1%), var(--background-primary-color) 0);}`;
            } else if (sUsrAg.indexOf("Safari") > -1) {
                style.innerHTML += `input[type=range]::-webkit-slider-runnable-track {background-image:linear-gradient(to right, ${valoraciones.aceptable} calc(var(--value)*1%), var(--background-primary-color) 0);}`;
            } else if (sUsrAg.indexOf("Opera") > -1) {
                style.innerHTML += `input[type=range]::-webkit-slider-runnable-track {background-image:linear-gradient(to right, ${valoraciones.aceptable} calc(var(--value)*1%), var(--background-primary-color) 0);}`;
            } else if (sUsrAg.indexOf("Firefox") > -1) {
                style.innerHTML += `input[type=range]::input[type=range]::-moz-range-track {background-image:linear-gradient(to right, ${valoraciones.aceptable} calc(var(--value)*1%), var(--background-primary-color) 0);}`;
            } else if (sUsrAg.indexOf("MSIE") > -1) {
                style.innerHTML += `input[type=range]::input[type=range]::-ms-track {background-image:linear-gradient(to right, ${valoraciones.aceptable} calc(var(--value)*1%), var(--background-primary-color) 0);}`;
            }
            //Actualizamos el resultado
            resultado.innerHTML = obtenerKeyValoraciones (2);
            resultado.style.color = valoraciones.aceptable;
            nota.innerHTML = `(${rangeValue})`;
        }else if (rangeValue > 8){
            if(navigator.userAgent.indexOf("Chrome") > -1) {
                style.innerHTML += `input[type=range]::-webkit-slider-runnable-track {background-image:linear-gradient(to right, ${valoraciones.excelente} calc(var(--value)*1%), var(--background-primary-color) 0);}`;
            } else if (sUsrAg.indexOf("Safari") > -1) {
                style.innerHTML += `input[type=range]::-webkit-slider-runnable-track {background-image:linear-gradient(to right, ${valoraciones.excelente} calc(var(--value)*1%), var(--background-primary-color) 0);}`;
            } else if (sUsrAg.indexOf("Opera") > -1) {
                style.innerHTML += `input[type=range]::-webkit-slider-runnable-track {background-image:linear-gradient(to right, ${valoraciones.excelente}calc(var(--value)*1%), var(--background-primary-color) 0);}`;
            } else if (sUsrAg.indexOf("Firefox") > -1) {
                style.innerHTML += `input[type=range]::input[type=range]::-moz-range-track {background-image:linear-gradient(to right, ${valoraciones.excelente} calc(var(--value)*1%), var(--background-primary-color) 0);}`;
            } else if (sUsrAg.indexOf("MSIE") > -1) {
                style.innerHTML += `input[type=range]::input[type=range]::-ms-track {background-image:linear-gradient(to right, ${valoraciones.excelente} calc(var(--value)*1%), var(--background-primary-color) 0);}`;
            }
            //Actualizamos el resultado
            resultado.innerHTML = obtenerKeyValoraciones (3);
            resultado.style.color = valoraciones.excelente;
            nota.innerHTML = `(${rangeValue})`;
        }
    });
}
