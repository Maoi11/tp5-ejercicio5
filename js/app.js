let btnComenzar = document.getElementById("btnComenzar");
let btnDetener = document.getElementById("btnDetener");
let btnReiniciar = document.getElementById("btnReiniciar");
btnComenzar.addEventListener("click", comenzar);
btnDetener.addEventListener("click", detener);
btnReset.addEventListener("click", reiniciar);
let horas = 0;
let minutos = 0;
let segundos = 0;
let parrafoCronometro = document.getElementById("parrafoCronometro");

function mostrarHora() {
  if (segundos < 10) {
    segundos = `0${segundos}`;
  }
  if (minutos < 10) {
    minutos = `0${minutos}`;
  }
  
  parrafoCronometro.innerHTML = `${horas}:${minutos}:${segundos}$`;
  
}

function comenzar() {
  //...
    mostrarHora();
}

function detener() {
  //...
    mostrarHora();
}

function reiniciar() {
  //...
    mostrarHora();
}




window.setInterval(fechaYHora, 1000);
