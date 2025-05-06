
const cuadricula = document.querySelector(".cuadricula");
let cambio_cuadricula = 256;

let contador=0;

while(contador<cambio_cuadricula){
    const cuadrado = document.createElement("div");
    const texto_cuadra = document.createTextNode("prueba");
    cuadrado.classList.add("cuadrado");
    cuadricula.appendChild(cuadrado);
    cuadrado.appendChild(texto_cuadra);
    contador++;

    cuadrado.addEventListener("mouseover",cambiarcolor)

    function cambiarcolor(){
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        cuadrado.style.backgroundColor = `rgb(${r},${g},${b})`;
    } 
    
}

const boton_evento = document.querySelector(".boton1-evento");
    boton_evento.addEventListener("click",cambiarcuadro);

    
function cambiarcuadro(){
    let cantidad = parseInt(prompt("¿Cuántos cuadros por ladoo quieres? (Máximo 100)"));

  // Validación simple del número ingresado
  if (cantidad > 0 && cantidad <= 100) {
    // Calcula el tamaño de cada cuadrado
    let tamaño = 640 / cantidad;

    // Borra los cuadros anteriores
    cuadricula.innerHTML = "";

    // Empieza a crear los nuevos cuadros
    let contador = 0;
    let total = cantidad * cantidad;

    while (contador < total) {
      const cuadrado = document.createElement("div");

      // Le damos estilo en línea
      cuadrado.style.width = `${tamaño}px`;
      cuadrado.style.height = `${tamaño}px`;
      cuadrado.classList.add("cuadrado");

      // Cambia de color cuando pasa el mouse
      cuadrado.addEventListener("mouseover",cambiarcolor)

    function cambiarcolor(){
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        cuadrado.style.backgroundColor = `rgb(${r},${g},${b})`;
    }

      // Agrega el cuadro al contenedor
      cuadricula.appendChild(cuadrado);

      contador++;
    }
  } else {
    alert("Por favor escribe un número entre 1 y 100");
  }
    }
    
    




//Color:


    
    
    
    
