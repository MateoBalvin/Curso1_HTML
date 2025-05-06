
const cuadricula = document.querySelector(".cuadricula");

let contador=0;

while(contador<256){
    const cuadrado = document.createElement("div");
    const texto_cuadra = document.createTextNode("prueba");
    cuadrado.classList.add("cuadrado");
    cuadricula.appendChild(cuadrado);
    cuadrado.appendChild(texto_cuadra);
    contador++;
}