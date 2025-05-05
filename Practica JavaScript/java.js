/*-------------------------------------------------------------- */
/*let: Declara variables */ console.log("--LET--");
let nombre = "Mateo";
let apodo = "EL balvin";

let edad;
edad = 21;

/*console.log(""): Imprime lo que colocamos dentro de los parentesis*/
console.log("Nombre y apodo");
console.log(nombre);
console.log(apodo);

console.log("");
console.log(edad);
console.log("Tengo " + edad + " años");
/*------------------------------------------------------------------------ */

/*const: La constante se usa cuando no queremos reasignar una variable y si la cambiamos arrojará un error al intentar, es decir, si una variable es '5' queda asi y no puedo cambiarla, y si intento cambiarla me lanzara un error que dice que no se puede resignar la variable  */ console.log(
  "--CONST--"
);
const sexo = "Masculino";
const gusto = "Monitas exoticas";

/*Trato de cambiarlo y lanza un error: */
/*
sexo="Femenino"
gusto="Negros Albinos"
*/

console.log(sexo);
console.log(gusto);
/**------------------------------------------------------------------------------------- */

/** --OPERACIONES-- */ console.log("--OPERACIONES--");

/** --Suma-- */
console.log(10 + 22);
console.log(100 + 20 + 200 + 3);
/** --Resta-- */
console.log(10 - 5);
/** --Multiplicacion-- */
console.log(20 * 3);
/** --Division-- */
console.log(2 / 2 + 2);

/**----------------------------------------------------------------------------------------- */

/**Operaciones con variables */ console.log("--OPERACIONES CON VARIABLES--");

let a = 10;
let b = 5;
let c = b + 6;

console.log("Suma: " + (a + b));
console.log("Resta: " + (a - b));
console.log("Multiplicacion: " + a * b);
console.log("Division: " + a / b);
console.log(c);
/**-------------------------------------------------------------------------------------------- */

/* Cadenas de JavaScripts - Strings */ console.log(
  "-- CADENAS DE JAVASCRIPTS - STRINGS --"
);
const string = "Revolucion";
console.log(string);

const badString = string;
console.log(badString);

/**--------------------------------------------------------------------------------------------- */

/*-- INCORPORACION DE JAVASCRIPTS `${ }` */ console.log(
  "-- Incorporacion de JavaScript `${ }` --"
);

const name1 = "Balvino";
const saludo = `Hola, ${name1}`;
console.log(saludo);

/**----------------------------------------------------------------------------------------------- */

/*Tambien se usa PARA UNIR DOS VARIABLES */ console.log(
  "-- Tambien se usa PARA UNIR DOS VARIABLES--"
);

const one = "hola";
const two = "que tal";

const three = `${one}, ${two}`;
console.log(three);
/**------------------------------------------------------------------------------------------------- */

/*--LENGTH--*/ console.log("-- LENGHT --");

/**Cuenta el total las letras que colocamos en una variable  */
let text = "ABCEDFGH2";
let length = text.length;
console.log(length); //Aparecera 9, porque cuenta el total de letras que hay en el texto
/**------------------------------------------------------------------------------------------------- */

/** --CONDICIONALES-- */ console.log("-- CONDICIONALES --");
let hora = 19;

if (hora < 18 && hora >= 12) {
  salud = "Buenas tardes";
} else if (hora < 12) {
  salud = `Buenos dias, ${name1}`;
} else if (hora == 18) {
  salud = `Son las 6pm, ${name1}`;
} else {
  salud = `Buenas noches, ${name1}`;
}
console.log(salud);

/** --FUNCIONES-- */ console.log("-- FUNCIONES --");
//Un conjunto de instrucciones ede codigo que calculal un valor que  puede tomar uno de tus scripts y empaquetarlo en un pequeño paquete que puedas usar una y otra vez sin tener que reescribir ni modificar el código

function animalfavorito(animal) {
  return animal + " es mi animal favorito";
}

console.log(animalfavorito("la cabra"));

function sum(para1, para2) {
  return para1 + para2;
}
sum(1, 2);
//-----------------------------------------------
function unafuncion1() {
  console.log(1);
  console.log(2);
  console.log(3);
}
unafuncion1();

//------------------------------------------------------
//Forma 1:
function suma1(a1, b1) {
  return a1 + b1;
}
const resultado1 = suma1(5, 10);
console.log(resultado1);

//Forma 2:
function resta1(a2, b2) {
  let resultado2;
  resultado2 = a2 - b2;
  return resultado2;
}
let result2 = resta1(12, 6);
console.log("La resta de estos dos numeros son: " + result2);
//---------------------------------
function unafuncion3(nombre1) {
  return "Su nombre es " + nombre1;
}
console.log(unafuncion3("Mateo"));

function unafuncion3_1(apellido1) {
  return "Su apellido es: " + apellido1;
}
const llamarapellido = unafuncion3_1("Balvinnnn");
console.log(llamarapellido);

//Funcion a una variable para no poner parametros dentro de la funcion
const unafuncion4 = function () {
  console.log(
    "Funcion a una variable para no poner parametros dentro de la funcion"
  );
};
unafuncion4();

/**Ejemplos */ console.log("--EJEMPLOS DE FUNCIONES--");

function ejemplo1_mayor(a3, b3) {
  if (a3 > b3) {
    return "El numero mayor es el: " + a3;
  } else if (a3 < b3) {
    return "el numero mayoe es el: " + b3;
  }
}
console.log(ejemplo1_mayor(10, 15));

/*
 Ejemplo #1 Funciones calculadora basica  console.log("--Ejemplo #1 Funciones sobre una Calculadora básica con dos números--");

function sumar(s1, s2) {
  return "La suma de estos numeros son: " + (s1 + s2);
}

function restar(s1, s2) {
  return "La resta de estos numeros son: " + (s1 - s2);
}

function multiplicar(s1, s2) {
  return "La multiplicacion de estos numeros son: " + s1 * s2;
}

function dividir(s1, s2) {
  return "La division de estos numeros son: " + s1 / s2;
}

function main() {
  console.log("");

  let desicion = parseInt(
    prompt(
      "--Calculadora-- \n 1. Suma \n 2.Resta \n 3.Multiplicación \n 4.División \n5. Salir"
    )
  );

  while (desicion != 5) {
    switch (desicion) {
      case 1:
        s1 = parseInt(prompt("Ingresa el primer número: "));
        s2 = parseInt(prompt("Ingresa el segundo número: "));

        let mostrarsuma = sumar(s1, s2);

        console.log(mostrarsuma);

        break;

      case 2:
        s1 = parseInt(prompt("Ingresa el primer número: "));
        s2 = parseInt(prompt("Ingresa el segundo número: "));

        console.log(restar(s1, s2));

        break;

      case 3:
        s1 = parseInt(prompt("Ingresa el primer número: "));
        s2 = parseInt(prompt("Ingresa el segundo número: "));

        console.log(multiplicar(s1, s2));
        break;

      case 4:
        s1 = parseInt(prompt("Ingresa el primer número: "));
        s2 = parseInt(prompt("Ingresaa el segundo número: "));

        console.log(dividir(s1, s2));
        break;
    }
    desicion=  parseInt(
      prompt(
        "--Calculadora-- \n 1. Suma \n 2.Resta \n 3.Multiplicación \n 4.División \n5. Salir"));
  }
}
main();
 
 */


/*
Ejemplo #2 Funciones Verificador de edad console.log("--Ejemplo #2 Funciones Verificador de edad--");

  

  function pediredad(){
    let edad3 = parseInt(prompt("Bienvenido al BalvinClub \n¿Cual es tu edad?"));
    return edad3;
  }

  function verificar_edad(edad3){

    if(edad3<18){
      return "No puedes entrar, eres menor de edad";
    }
    else if(edad3>=18 && edad3<60){

      return "¡Bienvenido a la fiesta!";

    }
    else if(edad3>60){
      return "Puedes entrar, pero cuidado con la música alta";

    }
  }
21
  function main2(){
    let edad_usuario = pediredad();
    
    console.log(verificar_edad(edad_usuario));
  }

  main2();
*/

/*
-- PROYECTO 1: PIEDAD-PAPEL-TIJERA--* console.log("--PROYECTO 1: PIEDAD-PAPEL-TIJERA--");

function CpuChoise(){
  let aleatorio = Math.floor(Math.random() * 3) + 1;
  
  switch(aleatorio){
    case 1:
      return "Piedra"
      break;

      case 2:
        return "Papel"
        break;

      case 3:
        return "Tijera"
        break;
  }
  
 }
 
 function HumanChoise(){
  let desicion1 = parseInt(prompt(" Elije sabiamente: \n 1. Piedra \n 2. Papel \n 3. Tijera"));
  switch(desicion1){
    case 1:
      return "Piedra";
      break;

      case 2:
        return "Papel";
        break;

      case 3:
        return "Tijera";
        break;
  }  
 }

 let CpuScore =0;
  let HumanScore =0;
 

 function PlayRound(){
  

  let cpu = CpuChoise();
  let human = HumanChoise();

  //Piedra
  if(human == "Piedra" && cpu == "Piedra"){
    
    return alert("EMPATE!! \n La CPU tambien escogio piedra... \n Fue un combate "+human+" vs "+cpu)
  }

  else if(human == "Piedra" && cpu == "Papel"){

    CpuScore++;
    return alert("PERDISTE!! \n La CPU escogio papel... \n Fue un combate "+human+" vs "+cpu)
    
  }

  else if(human == "Piedra" && cpu == "Tijera"){

    HumanScore++;
    return alert("GANASTEE!! \n La CPU escogio tijera... \n Fue un combate "+human+" vs "+cpu)
    
  }

  //Papel
  else if(human == "Papel" && cpu == "Papel"){
    
    return "EMPATE!! \n La CPU tambien escogio papel... \n Fue un combate "+human+" vs "+cpu
  }

  else if(human == "Papel" && cpu == "Tijera"){
    CpuScore++;
    return "PERDISTE!! \n La CPU escogio tijera... \n Fue un combate "+human+" vs "+cpu
    
  }

  else if(human == "Papel" && cpu == "Piedra"){
    HumanScore++;
    return "GANASTEE!! \n La CPU escogio Piedra... \n Fue un combate "+human+" vs "+cpu
    
  }

  //Tijera
  else if(human == "Tijera" && cpu == "Tijera"){
    
    return "EMPATE!! \n La CPU tambien escogio papel... \n Fue un combate "+human+" vs "+cpu
  }

  else if(human == "Tijera" && cpu == "Piedra"){
    CpuScore++;
    return "PERDISTE!! \n La CPU escogio piedra... \n Fue un combate "+human+" vs "+cpu
    
  }

  else if(human == "Tijera" && cpu == "Papel"){

    HumanScore++;
    return "GANASTEE!! \n La CPU escogio papel... \n Fue un combate "+human+" vs "+cpu
    
  }

  

 }

 function PlayGame(){
  alert("Jugaras Piedra-Papel-Tijeras \n El juego tiene en total 5 RONDAS \n PREPARATEE!!");
  let contador=0;


  while(contador<5){
    let ronda = PlayRound();
    console.log(ronda);
    contador++;
  }
  console.log("Esta es TÚ puntuacion de las veces que ganaste: "+HumanScore+" \n Esta es la puntuación de la CPU de las veces que te ganó: "+CpuScore);

 }

let jugada=PlayGame();
console.log(jugada);

*/
  
 
/*

/**--PROMPT-- console.log("--PROMPT--");
//Sirve para mostrar una ventana emergente al usuario y pedirle que ingrese un valor

//Variable String
/**
  * let nombre2 = prompt("¿Cual es tu nombre? ");
  console.log("Tu nombre es: "+nombre2);
  */

//Variable int
/*
  let edad2 = parseInt(prompt("Cuantos años tienes?"));
  console.log("Tienes "+edad2+ " años");
  */

/**EJEMPLOS PROMPT:  console.log("--EJEMPLOS DE PROMPT--")
let numero_secreto = 7;
let intentos = 0;
let contador = 0;

contador = parseInt(prompt("Adivine el número que tengo en la cabeza"));
while (contador != numero_secreto) {
  intentos++;

  if(contador>numero_secreto){
    contador=parseInt(prompt("Muy alto. Intenta de nuevo."));
  }
  else if(contador<numero_secreto){
    contador=parseInt(prompt("Muy bajo. Intenta de nuevo."));
  }

}
intentos++;
console.log("Felicidades, el numero que esta en mi cabezaa fue el " + numero_secreto+ " y lo hiciste con "+intentos+" intentos");

*/

/*-- ARRAYS --*/ console.log("-- ARRAYS --");
//Una matriz un metodo permite que una variable contenga mas de un valor

/*.Metodo #1 */ console.log(".Metodo #1");
const carro1 = ["Renoult", "Mazda", "Toyota"];
//alert(carro);
console.log(carro1);

/*.Metodo #2 */ console.log(".Metodo #2");
const carro2=[];
carro2[0]="Renoult";
carro2[1]="Mazda";
carro2[2]= "Toyota";

console.log(carro2[1]);

/*.Metodo #3 */ console.log(".Metodo #3: ");
const carro3 = new Array("BMW","Audi",nombre);
console.log(carro3[1],carro3[2]);

let carro4 = carro3[0];
console.log(carro4);



// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/**-- DOM 'MODELO DE OBJETO DE DOCUMENTO' -- */ console.log("-- DOM 'MODELO DE OBJETO DE DOCUMENTO' --");
//Se usa para manipular los elementos de una pagina web desde javascript, ademas modificar el contenido de los elementos html y como cambiar los estilos CSS

//METODO #1: 

/** .Modificando Elementos en html. */ console.log(".Seleccionando Elementos en html.");

//Por ID
let elementoID = document.getElementById("parrafo1_1");
elementoID.innerHTML = 'HTML';

//Por clases
let elementoClase = document.getElementsByClassName('parrafos1');
console.log(elementoClase.length); //Muestra cuantos elementos tienen la clase 'parrafos'
elementoClase[1].innerHTML = "Un cambio para el parrafo 2" //usamos elementoClase[1] que se refiere al segundo elemento que tiene como clase parrafos

//por etiqueta
let elementoEtiqueta = document.getElementsByTagName("p");
console.log(elementoClase.length); //Muestra cuantos elementos tienen la etiqueta 'p'
elementoEtiqueta[2].innerHTML = "Whatsss UPP"

/** .Modificando estilos de CSS. */ console.log(".Modificando estilos de CSS.");
//Id
elementoID.style.background = "blue";
elementoID.style.color = "red";
elementoID.style.borderRadius= "20px";
elementoID.style.width = "70px"
elementoID.style.marginLeft = "10px"; 

//METODO #2:

/** .DOM - LECTURA DE NODOS 'QuerySelector. */ console.log(" .DOM - LECTURA DE NODOS 'QuerySelector. ");
//Cuando una clase tiene varios elementos con su nombre es mejor usar 'querySelectorAll?
// Por ID
let elementoID2 = document.querySelector('#parrafo2_1');
elementoID2.innerHTML="Probando el querySelector en el parrafo 1";

//Por Clase
let elementoClase2 = document.querySelectorAll('.parrafos2');
console.log(elementoClase2) //Como esta como un NodeList no puede aprovechar al maximo cierto comandos para eso lo convertiremos en un array
const arreglo = [...elementoClase2]; //Este comando ayuda a convertir en un array
console.log(arreglo); //COnfirmar si ya se volvio un array

arreglo[1].innerHTML="Probando el querySelector en el parrafo 2"

//Por etiqueta
let elementoEtiqueta2 = document.querySelectorAll('p');
const arreglo2 =[...elementoEtiqueta2];
arreglo[2].innerHTML = "Probando el querySelectoe en el parrafo 3";

/**-- EJEMPLO DE DOM -- */ console.log("-- EJEMPLO DE DOM --");

function Cambiartexto(){ //Llama la funcion cuando presionamos el botón
  let parrafo= document.querySelectorAll('.ejemplo1');
  parrafo[0].textContent = "Texto cambiado";
  parrafo[0].style.color ="red";
  parrafo[1].style.color = "rgb(70, 124, 0)";

}

/*
//Id 
   let parrafo = document.getElementById("miParrafo");
  parrafo.textContent = "Texto Cambiado";

  //Clase: 
  let parrafo = document.getElementsByClassName("ejemplo1"); // Generamos una variable que tenga la informacion de lo que queremos cambiar en el html
  parrafo[0].textContent = "Texto Cambiado"; //Cuando se presione el boton el texto cambiara y aparecera este nuevo texto
  parrafo[0].style.color ="red"; //Cuando se presione el boton ahora cambiara de color
 */


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

/** .DOM - CreateElement - appendChild - append. */ console.log(" .DOM - CreateElement - appendChild - append ");

//CreateElement(): Sirve para crear un nuevo elemento HTML con JavaScript
//appendChild(): Sirve para agregar un nodo hijo (como un párrafo, div, etc.) dentro de otro elemento.
//append(): Es muy parecido a .appendChild(), pero más flexible: puedes agregar elementos Y texto directamente, e incluso varios elementos a la vez.

//Metodo #1:
const crearparrafo4 =document.createElement('p'); //Para crear un elemento que seria un parrafo
const textocreado = document.createTextNode("Parrafo 4"); //Creamos el texto que aparecera en el contenedor div cuando lo pongamos

const almacenarparrafo = document.querySelector('.padre');//Crear en donde se va almacenar el elemento

almacenarparrafo.appendChild(crearparrafo4);//Esto va a servir para agregar el elemento que pusimos arriba al div donde queremos que aparezca
crearparrafo4.appendChild(textocreado); //Esto para que aparezca lo que pusimos en el texto

//Metodo #2:
const crearparrafo5 = document.createElement('p'); //Se crea el elemento, aqui es un parrafo
crearparrafo5.innerHTML = "<h3>Parrafo 5</h3>"; //Se crea lo que va a decir el texto

const almacenarparrafo5 = document.querySelector('.padre') //Creanos donde se va almacenar los elementos

//almacenarparrafo5.appendChild(crearparrafo5); //Agregamos el texto donde queremos almacenarlo

//Usando el append:
almacenarparrafo5.append(crearparrafo4,crearparrafo5); //Deja crear varios elementos a la vez


//EJEMPLO #1:
const crearparrafo_ejemplo2 = document.createElement("p");
const textoparrafo_ejemplo2 = document.createTextNode("Ejemplo #1 para el parrafo 2");

const almacenarparrafo_ejemplo2 = document.querySelector(".ejemplo2_1");

almacenarparrafo_ejemplo2.appendChild(crearparrafo_ejemplo2);
crearparrafo_ejemplo2.appendChild(textoparrafo_ejemplo2);

//EJEMPLO #2:
function gustomujeres(){
  let gustom1 = document.createElement("p");
  let texto_gustom1 = document.createTextNode("Eres un crack bro");

  let almacenar_gustom1 = document.querySelectorAll('.ejemplo2_2');
  almacenar_gustom1[0].appendChild(gustom1);
  gustom1.appendChild(texto_gustom1);
  

  //style:
  almacenar_gustom1[0].style.color="rgb(10, 300, 3)";

}

function gustohombres(){
  let gustoh1 = document.createElement("p");
  let texto_gustoh1 = document.createTextNode("Eres una Loka");

  let almacenar_gustoh1 = document.querySelectorAll(".ejemplo2_2");
  almacenar_gustoh1[0].appendChild(gustoh1);
  gustoh1.appendChild(texto_gustoh1);

  //style:
  almacenar_gustoh1[0].style.color="rgb(177, 0, 0)";
  almacenar_gustoh1[0].style.background="black";

}


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*.InsertBefore() - InsertAdjacentElement() - SetAttibute().*/ console.log("InsertBefore() - InsertAdjacentElement() - SetAttibute()");

/*InsertBefore: Insertar algo antes de otro elemento*/ console.log(".InsertBefore().");
const parrafo_0 =document.createElement('p'); 
parrafo_0.innerHTML ="Parrafo 0";

const parrafoo1 = document.querySelectorAll(".parrafos4"); //Creamos para traer a el primer parrafo que tengo del div
console.log(parrafoo1);

const almacenar_parrafo0 = document.querySelector('.padre1');

almacenar_parrafo0.insertBefore(parrafo_0 , parrafoo1[0]); // Sirve para poner de primeras este texto en otro lugar, primero ponemos el texto que queremos poner primer y ya despues de la coma la posicion que queremos que cambie

/*InsertAdjacentElement: Se usa para insertar un elemento en una posición específica del DOM*/ console.log("._ InsertAdjacentElement() _.");
/* 
-beforebegin: Antes del comienzo - es decir que se crea antes de la etiqueta div
-afterbegin: Despues del comienzo - es decir que se crea despues de empezar la etiqueta div
-beforeend: Antes del final - es decir que se crea antes de cerrar etiqueta div
-afterend: Despues del final - es decir que se crea despues de cerrar la etiqueta div
*/
const parrafo_extra1 = document.createElement("p");
parrafo_extra1.innerHTML ="Parrafo Extra";

almacenar_parrafo0.insertAdjacentElement("afterbegin",parrafo_extra1)

/*SetAttribute(): Para agregar o modificar atributos en un elemento HTML (como id, class, src, etc.)*/ console.log("._ SetAttribute() _.");

const parrafo_extra2 = document.createElement("p");
parrafo_extra2.innerHTML= "Segundo parrafo extra";
almacenar_parrafo0.insertAdjacentElement("beforeend",parrafo_extra2)

parrafo_extra2.setAttribute("class","parrafos4"); //Primero el atributo que queremos como una clase y despues el nombre de la clase que quieres que incluya

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*--ELIMINANDO NODES, RemoveChild() - Remove() - ReplaceChild() --*/ console.log("._ ELIMINANDO NODES, RemoveChild() - Remove() - ReplaceChild() _.");

const elimina_nodes_parrafo = document.createElement("p");
elimina_nodes_parrafo.innerHTML = "Parrafo de prueba";

const almacenardiv_padre2 = document.querySelector(".padre2");

almacenardiv_padre2.appendChild(elimina_nodes_parrafo);

//Metodo #1: --RemoveChild()-- Elimina el elemento que queremos borrar para eso necesitamos el div que incluye todo osea el padre 
const almacenar_parrafos = document.querySelectorAll(".parrafos5") //Aqui estan registrados todos los parrafos almacenados que estan en el div

almacenardiv_padre2.removeChild(almacenar_parrafos[0]); //ELimina el elemento que estaba en el div

//Metodo #2: --Remove()-- Elimina el elemento sin depender del div padre
almacenar_parrafos[1].remove();

//Metodo #3: -- ReplaceChild -- Remplazar un parrafo ya creado
//almacenardiv_padre2.replaceChild(parrafo_extra1,almacenar_parrafo[2]);

// ---------------------------------------------------------------------------------------------------------------------------------

/*--EVENTOS -  EVENTLISTENERS()--*/ console.log(" --EVENTOS -  EVENTLISTENERS()-- ");

//addEventListener("click",__) - Que con click se realizará la acción
//addEventListener("contextmenu",__) - QUe con el clic derecho se realizará la acción
//addEventListener("mouseover",__) - Solamente con pasar el mouse al elemento se realizará la accion
//addEventListener("keypress",__) - Con las teclas del teclado

function ejemplo_saludo(){
alert("hola desde funcion");
}

//Añadir evento:
const saludo_btn = document.querySelector("#saludoBtn"); 

saludo_btn.addEventListener('click', ejemplo_saludo); //Creamos el evento que diga cuando le demos... la primera casilla es la accion de como queremos que se active el evento y el segundo puedes poner la funcion que creas

//Remove Evento:
const remover_btn = document.querySelector("#removerBtn") 

remover_btn.removeEventListener('click', ejemplo_saludo); //Elimina el evento que estamos manejando

/*--Ejemplo de EventListener() */
function mostrar_saludo(){
  const evento_nombre = document.querySelector("#evento-nombre").value;
  
  const evento_resultado =document.querySelector("#evento-resultado");
  evento_resultado.textContent = "hola, "+ evento_nombre;
}

const evento_enviar = document.querySelector("#evento-enviar");
evento_enviar.addEventListener("click",mostrar_saludo);



















/* --EJEMPLO #2-- */

const enviar_edad = document.querySelector("#enviar-edad");
enviar_edad.addEventListener("click",mostrar_edad);

function mostrar_edad(){
  const evento_edad = document.querySelector("#evento-edad").value;
  const evento_nombre2 = document.querySelector("#evento-nombre").value;
  

  if(evento_edad<18){

    const parrafo_edad = document.querySelector("#parrafo-edad");
    parrafo_edad.textContent = "Hola, "+evento_nombre2+" Eres menor de edad, por tener: "+evento_edad+" años";
    parrafo_edad.style.color ="red";
  }
  if(evento_edad>=18){

    const parrafo_edad = document.querySelector("#parrafo-edad");
    parrafo_edad.textContent = "Hola, "+evento_nombre2+" Eres mayor de edad, por tener: "+evento_edad+" años";
    parrafo_edad.style.color ="orange";
    
  }


  

  
}


















