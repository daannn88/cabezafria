let barraDesplazamiento = document.getElementById('header__container__section-2__marks-bar');
let velocidadDesplazamiento = 5;
let desplazamiento = 0;
setInterval(() => {
    desplazamiento += velocidadDesplazamiento;
    barraDesplazamiento.scrollLeft = desplazamiento;

    if (desplazamiento >= barraDesplazamiento.scrollWidth - barraDesplazamiento.clientWidth) {
        desplazamiento = 0;
    }
    }, 50);