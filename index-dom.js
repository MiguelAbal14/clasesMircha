import hamburgerMenu from "./js/menu_hamburguesa.js";
import { digitalClock, alarm } from "./js/reloj.js";
import { shortCuts, moveBall } from "./js/teclado.js"
import countDown from "./js/cuenta_regresiva.js";
import scrollUpButton from "./js/boton_scroll.js";
import darkTheme from "./js/tema_oscuro.js";



document.addEventListener("DOMContentLoaded", (e) => {

    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/alarmita.mp3", "#activar-alarma", "#desactivar-alarma");
    countDown("countdown", "Jun 29,2022 20:31:00", "Feliz cumpleaños solitario 😥");
    scrollUpButton(".scrollTopButton");

});


document.addEventListener("keydown", e => {
    shortCuts(e);
    moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");

