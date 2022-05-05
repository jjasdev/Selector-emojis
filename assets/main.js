//para el input
let range = document.querySelector('.encuesta__input-range');
range.style.setProperty("--value", range.value);

if (range) {
    range.addEventListener("input", function() {
        range.style.setProperty("--value", range.value);
    },false);
}