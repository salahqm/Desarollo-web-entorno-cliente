window.addEventListener("load", inicio);

function inicio() {
  const body = document.body;
  const div = document.getElementById("contenedorP");
  const botonJugar = document.getElementById("jugar");
  const botonParar = document.createElement("button");
  const puntos = document.getElementById("sppuntos");
  const tiempo = document.createElement("p");
  botonParar.textContent = "Parar"; 
  div.appendChild(botonParar);
  div.appendChild(tiempo); 
  const cajaColor = document.createElement("div");
  body.appendChild(cajaColor);
  cajaColor.className = "fondo ";

  let puntuacion = 0;
  let pararJuego;
  let temporizador;
  let tiempoRestante =30; // Tiempo inicial en segundos
  let num1, num2;

  // vector de colores
  const colores = ["red", "green", "blue", "pink", "yellow"];

  botonJugar.addEventListener("click", () => {
    puntuacion = 0;
    
    puntos.textContent = "Puntos: " + puntuacion;
    tiempo.textContent = "Tiempo restante: " + tiempoRestante + "s";

    // clear intervar lo que hace es detener el intevalo
    clearInterval(pararJuego);
    clearInterval(temporizador);

    // Actualizar los colores cada cierto tiempo
    pararJuego = setInterval(() => {
      num1 = numRandom();
      num2 = numRandom();
      cajaColor.style.backgroundColor = colores[num1];
      cajaColor.textContent = colores[num2];
    }, 1500);

    // Temporizador que resta 1 cada segundo
    temporizador = setInterval(() => {
      tiempoRestante--;
      tiempo.textContent = "Tiempo restante: " + tiempoRestante + "s";

      if (tiempoRestante <= 0) {
        clearInterval(intervalo);
        clearInterval(temporizador);
        cajaColor.style.backgroundColor = ""; // Restablecer el fondo
        cajaColor.textContent = ""; // Limpiar el texto
        tiempo.textContent = "se termino el juego";
      }
    }, 1000);
    // Listener para el click en la caja
  cajaColor.addEventListener("click", () => {
    if (colores[num1] === colores[num2]) {
      puntuacion++;
    } else {
      puntuacion--;
    }
    puntos.textContent = "Puntos: " + puntuacion;
  });
  });
 

  botonParar.addEventListener("click", () => {
    clearInterval(intervalo);
    clearInterval(temporizador);
    cajaColor.style.backgroundColor = "";
    cajaColor.textContent = "";
    puntos.textContent = "Puntos: " + puntuacion;
    tiempo.textContent = "Juego detenido";
  });

  function numRandom() {
    return Math.floor(Math.random() * colores.length);
  }
}
